import Link from "next/link";
import { footerExplore, footerLegal, footerSocial, site } from "@/constants/nav";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-primary font-body-md text-body-md border-t-2 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-mobile md:px-margin-desktop py-stack-xl max-w-container-max mx-auto">
        <div>
          <Link
            href="/"
            className="font-display-lg text-headline-md text-primary block mb-6"
          >
            {site.name}
          </Link>
          <p className="text-on-surface-variant text-sm pr-4">{site.tagline}</p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps uppercase mb-6 text-on-surface">
            Explore
          </h4>
          <ul className="flex flex-col gap-4">
            {footerExplore.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps uppercase mb-6 text-on-surface">
            Legal & Contact
          </h4>
          <ul className="flex flex-col gap-4">
            {footerLegal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps uppercase mb-6 text-on-surface">
            Social
          </h4>
          <ul className="flex flex-col gap-4">
            {footerSocial.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center pb-8">
        <p className="text-sm text-on-surface-variant border-t border-primary/20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8">
          © 2024 {site.name}. {site.tagline}
        </p>
      </div>
    </footer>
  );
}
