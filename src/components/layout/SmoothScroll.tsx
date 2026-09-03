"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return false;
  element.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  return true;
}

export function SmoothScroll() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#" || !href.includes("#")) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const id = url.hash.slice(1);
      if (!id) return;

      event.preventDefault();
      event.stopPropagation();

      if (url.pathname === window.location.pathname) {
        window.history.pushState(null, "", `${url.pathname}${url.hash}`);
        scrollToId(id);
        return;
      }

      router.push(`${url.pathname}${url.hash}`, { scroll: false });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const timeout = window.setTimeout(() => {
      scrollToId(id);
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}
