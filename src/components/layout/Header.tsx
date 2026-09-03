"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
          {navItems.map((item) => (
            <DesktopNavItem key={item.label} item={item} pathname={pathname} />
          ))}
        </nav>

        <Button
          href={site.inquiryHref}
          className="hidden xl:inline-flex"
          size="md"
        >
          Book Us
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
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "py-2 border-b border-primary/10 block",
                      active ? "text-primary" : "text-on-surface-variant",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="mt-2 mb-2 flex flex-col gap-2 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="py-1 text-on-surface-variant hover:text-primary block"
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
          <Button href={site.inquiryHref} size="lg" fullWidth>
            Book Us
          </Button>
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
