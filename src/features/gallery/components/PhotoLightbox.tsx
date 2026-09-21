"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui/Icon";
import type { GalleryItem } from "@/constants/gallery";

type PhotoLightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function PhotoLightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: PhotoLightboxProps) {
  const item = items[index];
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  if (!item || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.headline}
      className="fixed inset-0 z-100 flex flex-col bg-void"
      onClick={onClose}
      onTouchStart={(event) => {
        touchX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchX.current;
        touchX.current = null;
        if (start == null) return;
        const delta = event.changedTouches[0].clientX - start;
        if (delta > 50) onPrev();
        if (delta < -50) onNext();
      }}
    >
      <button
        type="button"
        aria-label="Close photograph"
        className="absolute top-5 right-5 z-20 text-primary hover:opacity-80"
        onClick={onClose}
      >
        <Icon name="close" className="text-3xl" />
      </button>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-12 py-16 md:px-24">
        <button
          type="button"
          aria-label="Previous photograph"
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 text-primary hover:opacity-80 md:left-8"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
        >
          <Icon name="arrow_forward" className="rotate-180 text-3xl" />
        </button>
        <div
          className="max-h-[78svh] max-w-full"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={1600}
            height={900}
            className="max-h-[78svh] w-auto max-w-full object-contain"
          />
        </div>
        <button
          type="button"
          aria-label="Next photograph"
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 text-primary hover:opacity-80 md:right-8"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
        >
          <Icon name="arrow_forward" className="text-3xl" />
        </button>
      </div>

      <div
        className="px-margin-mobile pb-8 text-center md:px-margin-desktop"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="font-headline-md text-xl md:text-2xl text-on-surface uppercase tracking-tight">
          {item.headline}
        </p>
        <p className="font-label-caps text-[0.65rem] md:text-label-caps text-primary uppercase tracking-widest mt-2">
          {item.detail}
        </p>
      </div>
    </div>,
    document.body,
  );
}
