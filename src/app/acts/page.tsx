import type { Metadata } from "next";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { ActGrid } from "@/features/acts/components/ActGrid";

export const metadata: Metadata = {
  title: "Our Acts",
};

export default function ActsPage() {
  return (
    <div className="pt-[120px] pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <header className="mb-stack-lg text-center md:text-left">
        <h1 className="font-headline-lg-mobile md:text-display-lg font-display-lg text-on-background uppercase mb-unit">
          Our Acts
        </h1>
        <p className="font-body-lg text-primary tracking-widest uppercase text-label-caps">
          Individually Spectacular
        </p>
        <HeritageDivider className="h-px w-24 mt-6 mb-8 md:mx-0 mx-auto" />
      </header>
      <ActGrid />
    </div>
  );
}
