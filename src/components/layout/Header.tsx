"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { navItems, site } from "@/constants/nav";
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

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300",
        scrolled
          ? "bg-stage border-gold-border"
          : "bg-transparent border-primary/20",
      )}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-display-lg text-headline-md tracking-tighter text-primary hover:opacity-80 transition-opacity"
        >
          {site.name}
        </Link>

        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-8 font-label-caps text-label-caps"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href, item.match);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "transition-colors duration-500 ease-in-out hover:text-primary hover:opacity-80",
                  active
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button
          href={site.inquiryHref}
          className="hidden xl:inline-flex"
          size="md"
        >
          Book Now
        </Button>

        <button
          type="button"
          className="lg:hidden text-primary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} filled className="text-3xl" />
        </button>
      </div>

      {open ? (
        <div className="lg:hidden bg-stage border-t border-gold-border px-margin-mobile py-8 flex flex-col gap-6 min-h-screen">
          <nav className="flex flex-col gap-4 font-label-caps text-label-caps" aria-label="Mobile">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href, item.match);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "py-2 border-b border-primary/10",
                    active ? "text-primary" : "text-on-surface-variant",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Button href={site.inquiryHref} size="lg" fullWidth>
            Book Now
          </Button>
        </div>
      ) : null}
    </header>
  );
}
