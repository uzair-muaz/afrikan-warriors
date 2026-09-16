"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { navItems, site, type NavItem } from "@/constants/nav";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string, match?: string) {
  if (match === "shows") return pathname.startsWith("/shows");
  if (match === "prefix") {
    const path = href.split("#")[0];
    return path !== "/" && pathname.startsWith(path);
  }
  return false;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderBar key={pathname} pathname={pathname} scrolled={scrolled} />
  );
}

function HeaderBar({
  pathname,
  scrolled,
}: {
  pathname: string;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const apply = () => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${Math.round(el.getBoundingClientRect().height)}px`,
      );
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-col",
        open && "bottom-0",
      )}
    >
      <div
        ref={barRef}
        className={cn(
          "shrink-0 border-b transition-colors duration-300",
          open || scrolled
            ? "bg-stage border-gold-border"
            : "bg-transparent border-primary/20 backdrop-blur-md",
        )}
      >
        <div className="flex justify-between items-center gap-3 px-margin-mobile md:px-margin-desktop py-3 lg:py-6 max-w-container-max mx-auto">
          <Link
            href="/"
            className="font-display-lg text-lg sm:text-xl lg:text-headline-md tracking-tighter text-primary hover:opacity-80 transition-opacity whitespace-nowrap min-w-0"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>

          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-8 font-label-caps text-label-caps"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} item={item} pathname={pathname} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={site.inquiryHref} size="md">
              Book Us
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden flex items-center justify-center size-11 -mr-2 text-primary"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} filled className="text-3xl" />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="lg:hidden flex-1 min-h-0 bg-stage flex flex-col"
        >
          <nav
            className="flex-1 overflow-y-auto overscroll-contain px-margin-mobile pt-6 pb-4 font-label-caps text-label-caps"
            aria-label="Mobile"
          >
            {navItems.map((item) => {
              const active = isActive(pathname, item.href, item.match);
              return (
                <div key={item.label} className="border-b border-primary/10">
                  <Link
                    href={item.href}
                    className={cn(
                      "py-3.5 block",
                      active ? "text-primary" : "text-on-surface",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="pb-3 flex flex-col gap-0.5 border-l border-primary/20 ml-1 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="py-1.5 text-on-surface-variant hover:text-primary block text-[0.7rem] tracking-[0.14em]"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div
            className="shrink-0 px-margin-mobile pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] border-t border-gold-border"
            onClick={() => setOpen(false)}
          >
            <Button href={site.inquiryHref} size="lg" fullWidth>
              Book Us
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function DesktopNavItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const active = isActive(pathname, item.href, item.match);
  const linkClass = cn(
    "transition-colors duration-500 ease-in-out hover:text-primary hover:opacity-80 inline-flex items-center gap-1",
    active
      ? "text-primary border-b-2 border-primary pb-1"
      : "text-on-surface-variant",
  );

  if (!item.children) {
    return (
      <Link href={item.href} className={linkClass}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <Link href={item.href} className={linkClass}>
        {item.label}
        <Icon name="expand_more" className="text-sm" />
      </Link>
      <ul className="absolute left-0 top-full pt-3 hidden group-hover:block group-focus-within:block min-w-56">
        <li>
          <ul className="bg-stage border border-gold-border py-3 px-4 flex flex-col gap-3 shadow-lg">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="text-on-surface-variant hover:text-primary block whitespace-nowrap"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
