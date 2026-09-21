"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { CoverImage } from "@/components/ui/CoverImage";
import { Icon } from "@/components/ui/Icon";
import { youtubeEmbedSrc } from "@/constants/media";
import { cn } from "@/lib/cn";

type TrailerPlaceholderProps = {
  image: string;
  alt: string;
  label?: string;
  videoId?: string;
  videoTitle?: string;
};

export function TrailerPlaceholder({
  image,
  alt,
  label,
  videoId,
  videoTitle = "Watch Trailer",
}: TrailerPlaceholderProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const ready = Boolean(videoId);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const inner = (
    <>
      <CoverImage
        src={image}
        alt={alt}
        className={cn(
          "vignette",
          ready
            ? "opacity-50 group-hover:opacity-30"
            : "opacity-40 grayscale",
        )}
      />
      {ready ? null : <div className="absolute inset-0 bg-stage/55" />}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={cn(
            "w-20 h-20 rounded-full border-2 flex items-center justify-center bg-background/50 backdrop-blur-sm",
            ready
              ? "border-primary group-hover:scale-110 transition-[scale] duration-700 ease-in-out gold-glow"
              : "border-on-surface-variant/40",
          )}
        >
          <Icon
            name="play_arrow"
            filled
            className={cn(
              "text-4xl ml-2",
              ready ? "text-primary" : "text-on-surface-variant/50",
            )}
          />
        </div>
      </div>
      {label || !ready ? (
        <p
          className={cn(
            "absolute bottom-6 left-6 font-label-caps text-label-caps z-10 uppercase tracking-widest",
            ready ? "text-on-surface" : "text-on-surface-variant/70",
          )}
        >
          {ready ? label : label || "Coming soon"}
        </p>
      ) : null}
    </>
  );

  const frameClass = cn(
    "relative w-full aspect-video overflow-hidden",
    ready
      ? "border border-primary/20 bg-surface-container-lowest group text-left"
      : "border border-primary/10 bg-surface-container-lowest pointer-events-none cursor-not-allowed",
  );

  return (
    <>
      {ready ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={frameClass}
          aria-label={videoTitle}
        >
          {inner}
        </button>
      ) : (
        <div className={frameClass} aria-disabled="true">
          {inner}
        </div>
      )}

      {mounted && open && videoId
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="fixed inset-0 z-100 flex items-center justify-center bg-void/95 p-4 md:p-10"
              onClick={() => setOpen(false)}
            >
              <button
                type="button"
                aria-label="Close video"
                className="absolute top-6 right-6 text-primary hover:opacity-80"
                onClick={() => setOpen(false)}
              >
                <Icon name="close" className="text-3xl" />
              </button>
              <div
                className="w-full max-w-5xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 id={titleId} className="sr-only">
                  {videoTitle}
                </h2>
                <div className="relative aspect-video w-full bg-platform border border-primary/30 overflow-hidden">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    src={`${youtubeEmbedSrc(videoId)}&autoplay=1`}
                    title={videoTitle}
                  />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
