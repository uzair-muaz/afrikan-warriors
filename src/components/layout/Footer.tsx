import Link from "next/link";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
import { footerColumns, footerSocial, site } from "@/constants/nav";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="font-display-lg text-2xl tracking-tighter text-primary hover:opacity-80 transition-opacity"
            >
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs font-body-md text-body-md text-on-surface-variant">
              {site.tagline}
            </p>
            <HeritageDivider align="left" className="mt-6 max-w-24" />
            <ul className="mt-6 flex items-center gap-1">
              {footerSocial.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex size-10 items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <Icon name={item.icon} className="text-xl" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className={
                column.title === "Connect" ? "lg:col-span-2" : "lg:col-span-3"
              }
            >
              <h2 className="font-label-caps text-xs uppercase tracking-[0.22em] text-primary">
                {column.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-primary/20 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-on-surface-variant">
            © {new Date().getFullYear()} Afrikan Warriors Ltd. All rights
            reserved.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
