import { VideoClip, CropStrategy } from './types';

interface ExportRequest {
  videoUrl: string;
  clips: VideoClip[];
  width: number;
  height: number;
  strategy: CropStrategy;
  cropRegion?: { width: number; height: number };  // Actual crop dimensions from preview
}

interface JobStatus {
  jobId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  outputUrl?: string;
  error?: string;
}

const PROCESSOR_URL = process.env.NEXT_PUBLIC_PROCESSOR_SERVICE_URL;

// Upload video to Vercel Blob via API route (used for background upload)
export async function uploadVideoToBlob(file: File): Promise<string> {
  console.log(`[Upload] Starting background upload: ${(file.size / 1024 / 1024).toFixed(1)}MB`);
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Upload failed: ${response.status}`);
  }

  const { url } = await response.json();
  console.log('[Upload] Background upload complete:', url);
  return url;
}

// Submit export job to Railway service
async function submitExportJob(request: ExportRequest): Promise<string> {
  const response = await fetch(`${PROCESSOR_URL}/export`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to submit job: ${response.status} ${text}`);
  }
  const { jobId } = await response.json();
  return jobId;
}

// Poll job status from Railway service
async function getJobStatus(jobId: string): Promise<JobStatus> {
  const response = await fetch(`${PROCESSOR_URL}/status/${jobId}`);
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

// Download processed video from URL
async function downloadVideo(url: string): Promise<Blob> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);
  return await response.blob();
}

// Main export function - accepts pre-uploaded videoUrl to skip upload step
export async function serverSideExport(
  videoUrl: string,
  clips: VideoClip[],
  width: number,
  height: number,
  strategy: CropStrategy = 'smart-crop',
  onProgress?: (percent: number) => void,
  abortSignal?: AbortSignal,
  cropRegion?: { width: number; height: number }  // Actual crop dimensions from preview
): Promise<Blob> {
  if (!PROCESSOR_URL) {
    throw new Error('NEXT_PUBLIC_PROCESSOR_SERVICE_URL is not configured');
  }

  // Video already uploaded — submit job directly
  console.log('[Export] Video already on server, submitting job...');
  if (onProgress) onProgress(10);
  const jobId = await submitExportJob({
    videoUrl,
    clips,
    width,
    height,
    strategy,
    cropRegion,
  });
  console.log('[Export] Job submitted:', jobId);

  // Wait for job completion with progress updates
  const outputUrl = await waitForJob(jobId, (progress) => {
    // Map Railway progress (0-100) to our range (10-90)
    if (onProgress) onProgress(10 + Math.round(progress * 0.8));
  }, abortSignal);

  // Download the processed video
  console.log('[Export] Downloading result...');
  if (onProgress) onProgress(95);
  const blob = await downloadVideo(outputUrl);
  if (onProgress) onProgress(100);
  return blob;
}
