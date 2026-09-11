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

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Wait until the route curtain finishes (or skip if none / reduced motion).
 * Defers one frame so a remounted ShutterIntro can appear before we check.
 */
function whenCurtainDone(callback: () => void) {
  if (prefersReducedMotion()) {
    callback();
    return () => {};
  }

  let cancelled = false;
  let removeListener = () => {};
  let fallbackId = 0;

  const finish = () => {
    if (cancelled) return;
    cancelled = true;
    removeListener();
    window.clearTimeout(fallbackId);
    callback();
  };

  const frame = window.requestAnimationFrame(() => {
    if (cancelled) return;

    if (!document.querySelector(".shutter-intro")) {
      finish();
      return;
    }

    const onDone = () => finish();
    window.addEventListener("aw:curtain-done", onDone);
    removeListener = () => window.removeEventListener("aw:curtain-done", onDone);
    fallbackId = window.setTimeout(finish, 2000);
  });

  return () => {
    cancelled = true;
    window.cancelAnimationFrame(frame);
    removeListener();
    window.clearTimeout(fallbackId);
  };
}

export function SmoothScroll() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

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

    scrollToTop();

    if (id) {
      return whenCurtainDone(() => {
        scrollToId(id);
      });
    }

    return whenCurtainDone(() => {
      scrollToTop();
      // Next paint — catch any late scroll restoration from the router
      window.requestAnimationFrame(() => scrollToTop());
    });
  }, [pathname]);

  return null;
}
