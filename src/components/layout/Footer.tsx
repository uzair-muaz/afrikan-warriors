import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { footerExplore, footerLegal, footerSocial, site } from "@/constants/nav";

const footerLinks = [...footerExplore, ...footerLegal];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 md:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <Link
            href="/"
            className="font-display-lg text-lg tracking-tight text-primary shrink-0 hover:opacity-80 transition-opacity"
          >
            {site.name}
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 font-label-caps text-xs uppercase tracking-widest"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ul className="flex items-center gap-3 lg:ml-auto">
            {footerSocial.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex size-9 items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Icon name={item.icon} className="text-xl" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 pt-4 border-t border-primary/20 text-xs text-on-surface-variant">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
