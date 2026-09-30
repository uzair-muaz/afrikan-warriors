"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  primaryNav,
  site,
  utilityNav,
  type NavItem,
} from "@/constants/nav";
import { cn } from "@/lib/cn";

function pathOf(href: string) {
  return href.split("#")[0];
}

function isActive(pathname: string, item: NavItem) {
  if (item.match === "shows") return pathname.startsWith("/shows");
  if (item.match === "children") {
    return (item.children ?? []).some((child) => {
      const path = pathOf(child.href);
      return path !== "/" && pathname.startsWith(path);
    });
  }
  if (item.match === "prefix" && item.href) {
    const path = pathOf(item.href);
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
        <div className="flex items-center gap-6 px-margin-mobile md:px-margin-desktop py-3 lg:py-5 max-w-container-max mx-auto">
          <Link
            href="/"
            className="font-display-lg text-lg sm:text-xl lg:text-2xl tracking-tighter text-primary hover:opacity-80 transition-opacity whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>

          <nav
            className="hidden lg:flex flex-1 items-center font-label-caps text-label-caps"
            aria-label="Primary"
          >
            <div className="flex items-center gap-7 xl:gap-9">
              {primaryNav.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                />
              ))}
            </div>
            <div className="ml-auto flex items-center gap-5 xl:gap-7">
              {utilityNav.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  quiet
                />
              ))}
              <span aria-hidden className="h-4 w-px bg-primary/40" />
              <Button href={site.inquiryHref} size="md">
                Book Us
              </Button>
            </div>
          </nav>

          <button
            type="button"
            className="lg:hidden ml-auto flex items-center justify-center size-11 -mr-2 text-primary"
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
            {primaryNav.map((item) => (
              <MobileGroup
                key={item.label}
                item={item}
                pathname={pathname}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <div className="mt-8 border-t border-primary/20 pt-4">
              {utilityNav.map((item) => (
                <MobileGroup
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </div>
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
  quiet = false,
}: {
  item: NavItem;
  pathname: string;
  quiet?: boolean;
}) {
  const active = isActive(pathname, item);
  const linkClass = cn(
    "transition-colors duration-500 ease-in-out hover:text-primary inline-flex items-center gap-1",
    active
      ? "text-primary"
      : quiet
        ? "text-on-surface-variant/80"
        : "text-on-surface",
  );

  if (!item.children) {
    return (
      <Link href={item.href ?? "/"} className={linkClass}>
        {item.label}
      </Link>
    );
  }

  const trigger = (
    <>
      {item.label}
      <Icon name="expand_more" className="text-sm" />
    </>
  );

  return (
    <div className="relative group">
      {item.href ? (
        <Link href={item.href} className={linkClass} aria-haspopup="true">
          {trigger}
        </Link>
      ) : (
        <button type="button" className={linkClass} aria-haspopup="true">
          {trigger}
        </button>
      )}
      <ul className="absolute left-0 top-full pt-4 hidden group-hover:block group-focus-within:block min-w-52 z-50">
        <li>
          <ul className="bg-stage border border-gold-border py-3 px-2 flex flex-col shadow-lg">
            {item.children.map((child) => {
              const childActive =
                pathOf(child.href) !== "/" &&
                pathname.startsWith(pathOf(child.href));
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className={cn(
                      "block px-3 py-2.5 whitespace-nowrap hover:text-primary hover:bg-primary/10",
                      childActive ? "text-primary" : "text-on-surface-variant",
                    )}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}

function MobileGroup({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const active = isActive(pathname, item);

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "/"}
        className={cn(
          "py-3.5 block border-b border-primary/10",
          active ? "text-primary" : "text-on-surface",
        )}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-primary/10 py-3">
      {item.href ? (
        <Link
          href={item.href}
          className={cn("block py-1", active ? "text-primary" : "text-on-surface")}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ) : (
        <p className={cn("py-1", active ? "text-primary" : "text-on-surface")}>
          {item.label}
        </p>
      )}
      <ul className="mt-1 flex flex-col border-l border-primary/20 ml-1 pl-4">
        {item.children.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              className="py-1.5 text-on-surface-variant hover:text-primary block text-[0.7rem] tracking-[0.14em]"
              onClick={onNavigate}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
