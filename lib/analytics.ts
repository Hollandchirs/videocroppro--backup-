// Only track video export complete

declare function gtag(
  command: "event",
  action: string,
  params: Record<string, string | number | boolean>
): void;

function safeGtag(
  action: string,
  params: Record<string, string | number | boolean>
) {
  try {
    if (typeof gtag === "function") {
      gtag("event", action, params);
    }
  } catch {
    // gtag not loaded yet — silently ignore
  }
}

/**
 * Track when video export completes
 */
export function trackExportComplete(params: {
  platform_id: string;
  aspect_ratio: string;
}) {
  safeGtag("video_export_complete", {
    event_category: "engagement",
    event_label: "Video Export",
    ...params,
  });
}
