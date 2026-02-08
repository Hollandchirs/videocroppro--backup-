import { put } from '@vercel/blob';
import { VideoClip, CropStrategy } from './types';

interface ExportRequest {
  videoUrl: string;
  clips: VideoClip[];
  width: number;
  height: number;
  strategy: CropStrategy;
  sourceRegion?: { width: number; height: number };
}

interface JobStatus {
  jobId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  outputUrl?: string;
  error?: string;
}

// Upload video to Vercel Blob
async function uploadVideo(file: File): Promise<string> {
  const blob = await put(file.name, file, { access: 'public' });
  return blob.url;
}

// Submit export job to Railway service
async function submitExportJob(request: ExportRequest): Promise<string> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_PROCESSOR_SERVICE_URL}/export`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });
  if (!response.ok) throw new Error(`Failed to submit job: ${response.statusText}`);
  const { jobId } = await response.json();
  return jobId;
}

// Poll job status from Railway service
async function getJobStatus(jobId: string): Promise<JobStatus> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_PROCESSOR_SERVICE_URL}/status/${jobId}`);
  if (!response.ok) throw new Error(`Failed to get status: ${response.statusText}`);
  return await response.json();
}

// Wait for job completion with progress updates
async function waitForJob(
  jobId: string,
  onProgress?: (progress: number) => void,
  abortSignal?: AbortSignal
): Promise<string> {
  const POLL_INTERVAL = 1000;
  return new Promise((resolve, reject) => {
    const checkStatus = async () => {
      if (abortSignal?.aborted) {
        reject(new DOMException('Aborted', 'AbortError'));
        return;
      }
      try {
        const job = await getJobStatus(jobId);
        if (onProgress) onProgress(job.progress);
        if (job.status === 'completed') resolve(job.outputUrl!);
        else if (job.status === 'failed') reject(new Error(job.error || 'Export failed'));
        else setTimeout(checkStatus, POLL_INTERVAL);
      } catch (e) {
        reject(e);
      }
    };
    checkStatus();
  });
}

// Download processed video from Vercel Blob
async function downloadVideo(url: string): Promise<Blob> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);
  return await response.blob();
}

// Main export function that orchestrates the entire process
export async function serverSideExport(
  videoFile: File,
  clips: VideoClip[],
  width: number,
  height: number,
  strategy: CropStrategy = 'smart-crop',
  onProgress?: (percent: number) => void,
  abortSignal?: AbortSignal,
  sourceRegion?: { width: number; height: number }
): Promise<Blob> {
  // 1. Upload video to Vercel Blob
  if (onProgress) onProgress(5);
  const videoUrl = await uploadVideo(videoFile);
  if (abortSignal?.aborted) throw new DOMException('Aborted', 'AbortError');

  try {
    // 2. Submit export job to Railway service
    if (onProgress) onProgress(10);
    const jobId = await submitExportJob({
      videoUrl,
      clips,
      width,
      height,
      strategy,
      sourceRegion,
    });

    // 3. Wait for job completion with progress updates
    const outputUrl = await waitForJob(jobId, (progress) => {
      if (onProgress) onProgress(10 + Math.round(progress * 0.8));
    }, abortSignal);

    // 4. Download the processed video
    if (onProgress) onProgress(95);
    const blob = await downloadVideo(outputUrl);
    if (onProgress) onProgress(100);
    return blob;
  } catch (e) {
    // On failure, the uploaded video will be cleaned up by Vercel Blob's lifecycle policies
    // Optionally implement explicit cleanup here if needed
    throw e;
  }
}
