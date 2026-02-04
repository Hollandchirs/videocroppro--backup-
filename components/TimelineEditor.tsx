import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { VideoClip } from "@/lib/types";

interface TimelineEditorProps {
  clips: VideoClip[];
  duration: number;
  selectedClipId: string | null;
  currentTime: number;
  onClipSelect: (id: string | null) => void;
  onClipResize: (id: string, newStartTime: number, newEndTime: number) => void;
  onClipDelete: (id: string) => void;
  onClipsChange: (clips: VideoClip[]) => void;
  onSeek?: (time: number) => void;
}

export const TimelineEditor: React.FC<TimelineEditorProps> = ({
  clips,
  duration,
  selectedClipId,
  currentTime,
  onClipSelect,
  onClipResize,
  onClipDelete,
  onClipsChange,
  onSeek,
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [dragState, setDragState] = useState<{
    type: "move" | "resize-start" | "resize-end" | null;
    clipId: string | null;
    startX: number;
    originalStartTime: number;
    originalEndTime: number;
  }>({
    type: null,
    clipId: null,
    startX: 0,
    originalStartTime: 0,
    originalEndTime: 0,
  });

  // Undo/Redo history - use refs to avoid stale closure issues
  const historyRef = useRef<VideoClip[][]>([JSON.parse(JSON.stringify(clips))]);
  const historyIndexRef = useRef(0);
  const [, forceUpdate] = useState(0);
  const isRestoringRef = useRef(false);
  const lastClipsSignatureRef = useRef<string>(clips.map(c => c.id).join(','));
  const dragStartClipsRef = useRef<VideoClip[] | null>(null);

  // Get current values for rendering
  const historyIndex = historyIndexRef.current;
  const history = historyRef.current;

  // Reset history when clips are externally replaced (e.g., analysis complete, ratio change)
  useEffect(() => {
    if (isRestoringRef.current) {
      isRestoringRef.current = false;
      lastClipsSignatureRef.current = clips.map(c => c.id).join(',');
      return;
    }

    const currentSignature = clips.map(c => c.id).join(',');
    if (currentSignature !== lastClipsSignatureRef.current) {
      // Check if this is an external replacement (all clip IDs are different)
      const historyClipIds = historyRef.current[historyIndexRef.current]?.map(c => c.id) || [];
      const currentClipIds = clips.map(c => c.id);
      const isExternalReplacement = currentClipIds.length > 0 &&
        !currentClipIds.some(id => historyClipIds.includes(id));

      if (isExternalReplacement) {
        historyRef.current = [JSON.parse(JSON.stringify(clips))];
        historyIndexRef.current = 0;
        forceUpdate(n => n + 1);
      }
      lastClipsSignatureRef.current = currentSignature;
    }
  }, [clips]);

  const saveToHistory = useCallback((newClips: VideoClip[]) => {
    if (isRestoringRef.current) return;
    const currentHistory = historyRef.current;
    const currentIndex = historyIndexRef.current;

    // Truncate history if we've undone and are making a new change
    const newHistory = currentHistory.slice(0, currentIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(newClips)));

    historyRef.current = newHistory;
    historyIndexRef.current = newHistory.length - 1;
    forceUpdate(n => n + 1);
  }, []);

  const undo = useCallback(() => {
    if (historyIndexRef.current > 0) {
      const newIndex = historyIndexRef.current - 1;
      historyIndexRef.current = newIndex;
      onClipSelect(null);
      isRestoringRef.current = true;
      const restoredClips = JSON.parse(JSON.stringify(historyRef.current[newIndex]));
      onClipsChange(restoredClips);
      forceUpdate(n => n + 1);
    }
  }, [onClipsChange, onClipSelect]);

  const redo = useCallback(() => {
    if (historyIndexRef.current < historyRef.current.length - 1) {
      const newIndex = historyIndexRef.current + 1;
      historyIndexRef.current = newIndex;
      onClipSelect(null);
      isRestoringRef.current = true;
      const restoredClips = JSON.parse(JSON.stringify(historyRef.current[newIndex]));
      onClipsChange(restoredClips);
      forceUpdate(n => n + 1);
    }
  }, [onClipsChange, onClipSelect]);

  // Split clip at current playhead position
  const splitClipAtPlayhead = useCallback(() => {
    const clipAtTime = clips.find(
      clip => currentTime > clip.startTime && currentTime < clip.endTime
    );
    if (!clipAtTime) return;

    const newClip1: VideoClip = {
      ...clipAtTime,
      id: `${clipAtTime.id}_a`,
      endTime: currentTime,
    };
    const newClip2: VideoClip = {
      ...clipAtTime,
      id: `${clipAtTime.id}_b`,
      startTime: currentTime,
    };

    const newClips = clips.map(clip =>
      clip.id === clipAtTime.id ? newClip1 : clip
    );
    const insertIndex = newClips.findIndex(c => c.id === newClip1.id) + 1;
    newClips.splice(insertIndex, 0, newClip2);

    onClipsChange(newClips);
    onClipSelect(newClip2.id);
    // Save to history after the change
    setTimeout(() => saveToHistory(newClips), 0);
  }, [clips, currentTime, onClipsChange, onClipSelect, saveToHistory]);

  // Check if playhead is inside any clip (for split button state)
  const canSplit = useMemo(() => {
    return clips.some(
      clip => currentTime > clip.startTime + 0.1 && currentTime < clip.endTime - 0.1
    );
  }, [clips, currentTime]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const timeToPx = (time: number): number => {
    if (duration === 0) return 0;
    return (time / duration) * 100;
  };

  const pxToTime = (px: number): number => {
    const rect = timelineRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    return (px / rect.width) * duration;
  };

  const handleTimelineClick = useCallback((e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const time = (x / rect.width) * duration;
    if (onSeek) {
      onSeek(time);
    }
  }, [duration, onSeek]);

  const handleClipMouseDown = useCallback(
    (e: React.MouseEvent, clip: VideoClip, type: "move" | "resize-start" | "resize-end") => {
      e.stopPropagation();
      // Save current state before dragging for undo
      dragStartClipsRef.current = JSON.parse(JSON.stringify(clips));
      setDragState({
        type,
        clipId: clip.id,
        startX: e.clientX,
        originalStartTime: clip.startTime,
        originalEndTime: clip.endTime,
      });
      onClipSelect(clip.id);
    },
    [clips, onClipSelect]
  );

  // Handle clip overlap with "覆盖式" behavior - dragged clip covers others
  const applyClipOverlap = useCallback((
    draggedClipId: string,
    newStartTime: number,
    newEndTime: number
  ): VideoClip[] => {
    const minDuration = 0.5;
    let updatedClips = clips.map(clip => {
      if (clip.id === draggedClipId) {
        return { ...clip, startTime: newStartTime, endTime: newEndTime };
      }

      // Check for overlap with the dragged clip
      const overlapStart = Math.max(clip.startTime, newStartTime);
      const overlapEnd = Math.min(clip.endTime, newEndTime);

      if (overlapStart < overlapEnd) {
        // There is overlap - the dragged clip "covers" this clip
        if (newStartTime <= clip.startTime && newEndTime >= clip.endTime) {
          // Dragged clip completely covers this clip - mark for removal
          return { ...clip, startTime: -1, endTime: -1 };
        } else if (newStartTime <= clip.startTime) {
          // Dragged clip covers the start - shrink from left
          const newClipStart = newEndTime;
          if (newClipStart + minDuration >= clip.endTime) {
            return { ...clip, startTime: -1, endTime: -1 };
          }
          return { ...clip, startTime: newClipStart };
        } else if (newEndTime >= clip.endTime) {
          // Dragged clip covers the end - shrink from right
          const newClipEnd = newStartTime;
          if (clip.startTime + minDuration >= newClipEnd) {
            return { ...clip, startTime: -1, endTime: -1 };
          }
          return { ...clip, endTime: newClipEnd };
        } else {
          // Dragged clip is in the middle - split this clip (keep left part only for simplicity)
          return { ...clip, endTime: newStartTime };
        }
      }
      return clip;
    });

    // Remove clips marked for deletion (startTime === -1)
    updatedClips = updatedClips.filter(clip => clip.startTime >= 0);

    return updatedClips;
  }, [clips]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragState.clipId || !dragState.type) return;
      const deltaX = e.clientX - dragState.startX;
      const deltaTime = pxToTime(deltaX);

      let newStartTime = dragState.originalStartTime;
      let newEndTime = dragState.originalEndTime;

      if (dragState.type === "move") {
        newStartTime += deltaTime;
        newEndTime += deltaTime;
      } else if (dragState.type === "resize-start") {
        newStartTime += deltaTime;
      } else if (dragState.type === "resize-end") {
        newEndTime += deltaTime;
      }

      const minDuration = 0.5;
      newStartTime = Math.max(0, Math.min(newStartTime, duration - minDuration));
      newEndTime = Math.max(newStartTime + minDuration, Math.min(newEndTime, duration));

      // Apply overlap behavior
      const updatedClips = applyClipOverlap(dragState.clipId, newStartTime, newEndTime);
      onClipsChange(updatedClips);
    },
    [dragState, duration, pxToTime, applyClipOverlap, onClipsChange]
  );

  const handleMouseUp = useCallback(() => {
    if (dragState.clipId && dragState.type && dragStartClipsRef.current) {
      // Check if clips actually changed
      const startClipsStr = JSON.stringify(dragStartClipsRef.current);
      const currentClipsStr = JSON.stringify(clips);
      if (startClipsStr !== currentClipsStr) {
        saveToHistory(clips);
      }
    }
    dragStartClipsRef.current = null;
    setDragState({
      type: null,
      clipId: null,
      startX: 0,
      originalStartTime: 0,
      originalEndTime: 0,
    });
  }, [dragState, clips, saveToHistory]);

  useEffect(() => {
    if (dragState.type) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragState, handleMouseMove, handleMouseUp]);

  // Generate time markers for the ruler
  const timeMarkers = useMemo(() => {
    const markers: number[] = [];
    const interval = duration <= 10 ? 1 : duration <= 30 ? 5 : duration <= 60 ? 10 : 30;
    for (let t = 0; t <= duration; t += interval) {
      markers.push(t);
    }
    // Always include the end time
    if (markers[markers.length - 1] !== duration) {
      markers.push(duration);
    }
    return markers;
  }, [duration]);

  return (
    <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-3">
      {/* Header with clip count and action buttons */}
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-2">
        <div className="flex items-center gap-2">
          <span className="font-medium">{clips.length} clip{clips.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Action buttons - Undo/Redo/Split */}
        <div className="flex items-center gap-1">
          <button
            onClick={undo}
            disabled={historyIndex <= 0}
            className={`w-7 h-7 rounded flex items-center justify-center transition-all ${
              historyIndex <= 0
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
            }`}
            title="Undo (撤销)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v6h6" />
              <path d="M3 13a9 9 0 1 0 3-7.7L3 7" />
            </svg>
          </button>
          <button
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
            className={`w-7 h-7 rounded flex items-center justify-center transition-all ${
              historyIndex >= history.length - 1
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
            }`}
            title="Redo (重做)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7v6h-6" />
              <path d="M21 13a9 9 0 1 1-3-7.7L21 7" />
            </svg>
          </button>
          <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-600 mx-1" />
          <button
            onClick={splitClipAtPlayhead}
            disabled={!canSplit}
            className={`w-7 h-7 rounded flex items-center justify-center transition-all ${
              !canSplit
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
            }`}
            title="Split at playhead (剪切)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Time ruler at top of track */}
      <div className="relative h-5 mb-1">
        {timeMarkers.map((time, idx) => (
          <div
            key={time}
            className="absolute flex flex-col items-center"
            style={{ left: `${timeToPx(time)}%`, transform: 'translateX(-50%)' }}
          >
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
              {formatTime(time)}
            </span>
            <div className="w-px h-1.5 bg-neutral-300 dark:bg-neutral-600" />
          </div>
        ))}
      </div>

      {/* Timeline track */}
      <div
        ref={timelineRef}
        className="relative cursor-pointer"
        onClick={handleTimelineClick}
      >
        <div className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-800 dark:bg-neutral-900 h-16">
          {clips.map((clip, index) => {
            const left = timeToPx(clip.startTime);
            const width = timeToPx(clip.endTime - clip.startTime);
            const isSelected = clip.id === selectedClipId;
            const clipDuration = clip.endTime - clip.startTime;
            // Estimate if text will fit (rough calculation)
            const showFullText = width > 8; // ~8% width to show full text
            const showTime = width > 5;

            return (
              <div
                key={clip.id}
                className={`absolute h-full transition-all rounded overflow-hidden ${
                  isSelected
                    ? "bg-[#C2F159] ring-2 ring-white ring-offset-1 ring-offset-neutral-900 z-10"
                    : "bg-[#4A4A4A] hover:bg-[#5A5A5A]"
                }`}
                style={{ left: `${left}%`, width: `${width}%` }}
                onMouseDown={(e) => handleClipMouseDown(e, clip, "move")}
              >
                {/* Clip info - with text truncation */}
                <div className={`h-full flex flex-col items-center justify-center px-1 overflow-hidden ${
                  isSelected ? "text-black" : "text-white"
                }`}>
                  <div className="font-medium text-xs truncate w-full text-center">
                    {showFullText ? `Clip ${index + 1}` : `${index + 1}`}
                  </div>
                  {showTime && (
                    <div className="text-[10px] opacity-80 truncate w-full text-center">
                      {showFullText
                        ? `${formatTime(clip.startTime)} - ${formatTime(clip.endTime)}`
                        : formatTime(clipDuration)
                      }
                    </div>
                  )}
                  {clip.useFullFrame && showFullText && (
                    <div className="text-[9px] opacity-70">letterbox</div>
                  )}
                </div>

                {/* Resize handles - only show when selected */}
                {isSelected && (
                  <>
                    <div
                      className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize bg-white/20 hover:bg-white/40 flex items-center justify-center"
                      onMouseDown={(e) => handleClipMouseDown(e, clip, "resize-start")}
                    >
                      <div className="w-0.5 h-6 bg-black/30 rounded" />
                    </div>
                    <div
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize bg-white/20 hover:bg-white/40 flex items-center justify-center"
                      onMouseDown={(e) => handleClipMouseDown(e, clip, "resize-end")}
                    >
                      <div className="w-0.5 h-6 bg-black/30 rounded" />
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {/* Empty placeholder when no clips */}
          {clips.length === 0 && (
            <div className="h-full w-full flex items-center justify-center text-xs text-neutral-400">
              No clips generated yet
            </div>
          )}
        </div>

        {/* Playhead */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#C2F159] z-20 pointer-events-none"
          style={{ left: `${timeToPx(currentTime)}%` }}
        >
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#C2F159] rotate-45 rounded-sm" />
        </div>

        {/* Seek input - placed below clips to not block interactions */}
        <input
          type="range"
          min={0}
          max={duration}
          step={0.01}
          value={currentTime}
          onChange={(e) => {
            const time = parseFloat(e.target.value);
            if (onSeek) {
              onSeek(time);
            }
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-0"
          style={{ pointerEvents: 'auto' }}
        />
      </div>

      {/* Instructions */}
      <div className="text-[10px] text-neutral-400 text-center mt-2">
        Click to seek • Click clip to select & edit • Drag to move • Drag edges to resize
      </div>
    </div>
  );
};
