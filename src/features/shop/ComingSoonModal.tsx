"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

export function ComingSoonModal() {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const root = dialogRef.current;
    const focusable = () =>
      root
        ? [...root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")]
        : [];

    focusable()[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        window.location.assign("/#shows");
        return;
      }

      if (event.key !== "Tab" || !root) return;

      const nodes = focusable();
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !root.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !root.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="shop-coming-soon-title"
      className="fixed inset-0 z-[45] flex items-center justify-center bg-void/85 px-4 sm:px-6"
    >
      <div className="w-full max-w-lg border border-primary/40 bg-stage px-5 py-10 text-center sm:px-8 sm:py-12 md:px-12 md:py-14">
        <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">
          The Official Shop
        </p>
        <h2
          id="shop-coming-soon-title"
          className="font-headline-md text-4xl md:text-5xl text-on-surface uppercase mb-5"
        >
          Coming Soon
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          Official merchandise is being prepared. The shop will open for United
          Kingdom and international orders when the collection is ready.
        </p>
        <Button
          href="/#shows"
          size="lg"
          className="whitespace-nowrap px-4 tracking-[0.08em] sm:px-8 sm:tracking-widest"
        >
          Explore the Shows →
        </Button>
      </div>
    </div>
  );
}
