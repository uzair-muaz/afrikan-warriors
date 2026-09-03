import type { Metadata } from "next";
import { GalleryView } from "@/features/gallery/components/GalleryView";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return <GalleryView />;
}
