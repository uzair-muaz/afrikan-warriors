"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

/** Tune site scroll feel here (hard-refresh after changes). */
const SCROLL_LERP = 0.14; // 0.08 = silkier/slower catch-up · 0.2 = snappier
const SCROLL_WHEEL = 1; // 1 = normal distance · <1 = slower travel

let lenisInstance: Lenis | null = null;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return false;

  if (lenisInstance && !prefersReducedMotion()) {
    lenisInstance.scrollTo(element, { offset: -112 });
    return true;
  }

  element.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  return true;
}

function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  }
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
    removeListener = () =>
      window.removeEventListener("aw:curtain-done", onDone);
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

  // Site-wide smooth scroll — snappy lerp, full wheel speed
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      lerp: SCROLL_LERP,
      wheelMultiplier: SCROLL_WHEEL,
      touchMultiplier: 1,
      smoothWheel: true,
      autoRaf: true,
    });

    lenisInstance = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const onCurtain = () => {
      lenis.start();
      ScrollTrigger.refresh();
    };
    window.addEventListener("aw:curtain-done", onCurtain);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("aw:curtain-done", onCurtain);
      lenis.destroy();
      if (lenisInstance === lenis) lenisInstance = null;
      ScrollTrigger.refresh();
    };
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
      window.requestAnimationFrame(() => scrollToTop());
    });
  }, [pathname]);

  return null;
}
