"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { scrollToY } from "@/components/layout/SmoothScroll";
import { site } from "@/constants/nav";
import { cn } from "@/lib/cn";

const SHOW_AFTER = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => scrollToY(0)}
      className={cn(
        "fixed z-40 flex size-12 cursor-pointer items-center justify-center rounded-full border border-primary bg-stage text-primary shadow-[0_0_24px_rgb(212_175_55_/_0.25)] transition-[opacity,background-color,color] duration-500 hover:bg-primary hover:text-on-primary",
        site.whatsapp ? "bottom-20 right-5" : "bottom-5 right-5",
        visible
          ? "opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <Icon name="expand_less" className="text-xl" />
    </button>
  );
}
