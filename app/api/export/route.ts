import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const filename = formData.get("filename") as string;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Vercel Blob Storage
    const blob = await put(filename, buffer, {
      access: "public",
    });

    return NextResponse.json({
      success: true,
      downloadUrl: blob.url,
      filename,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 }
    );
  }
}

// Get export status/check if download is ready
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!filename) {
    return NextResponse.json({ error: "Filename required" }, { status: 400 });
  }

  // Check if file exists in blob storage
  try {
    const { head } = await import("@vercel/blob");
    const blob = await head(filename);
    return NextResponse.json({
      exists: true,
      downloadUrl: blob.url,
      size: blob.size,
    });
  } catch {
    return NextResponse.json({ exists: false });
  }
}
