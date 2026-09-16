import { Icon } from "@/components/ui/Icon";
import { site } from "@/constants/nav";

export function WhatsAppFloat() {
  if (!site.whatsapp) return null;

  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full border border-primary bg-stage text-primary shadow-[0_0_24px_rgb(212_175_55_/_0.25)] hover:bg-primary hover:text-on-primary transition-colors duration-500"
    >
      <Icon name="whatsapp" className="text-[1.35rem]" />
    </a>
  );
}
