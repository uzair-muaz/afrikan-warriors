"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui/Icon";
import { youtubeEmbedSrc } from "@/constants/media";
import { cn } from "@/lib/cn";

type VideoLightboxProps = {
  videoId: string;
  title: string;
  label: string;
  className?: string;
  children?: ReactNode;
};

export function VideoLightbox({
  videoId,
  title,
  label,
  className,
  children,
}: VideoLightboxProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-none font-label-caps text-label-caps uppercase tracking-widest transition-[color,background-color,border-color,box-shadow,transform,translate,scale] duration-500 ease-in-out hover:-translate-y-px active:scale-[0.98] bg-transparent border border-primary text-primary hover:bg-primary/10 px-8 py-4",
          className,
        )}
      >
        {children ?? (
          <>
            <Icon name="play_arrow" filled />
            {label}
          </>
        )}
      </button>

      {mounted && open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-void/95 p-4 md:p-10"
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
                  {title}
                </h2>
                <div className="relative aspect-video w-full bg-platform border border-primary/30 overflow-hidden">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    src={`${youtubeEmbedSrc(videoId)}&autoplay=1`}
                    title={title}
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
