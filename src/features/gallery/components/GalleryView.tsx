"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  galleryFilters,
  galleryItems,
  type GalleryFilter,
} from "@/constants/gallery";
import { cn } from "@/lib/cn";

export function GalleryView() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [loaded, setLoaded] = useState(true);

  const items = useMemo(() => {
    if (filter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="pb-0">
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-10 pb-8">
        <div className="hidden md:flex flex-wrap justify-center gap-6 z-10 relative">
          {galleryFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "font-label-caps text-label-caps transition-colors",
                filter === item
                  ? "text-primary border-b border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="md:hidden flex justify-center">
          <label className="sr-only" htmlFor="gallery-filter">
            Filter gallery
          </label>
          <select
            id="gallery-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as GalleryFilter)}
            className="bg-surface-container border border-gold-border text-on-surface font-label-caps px-4 py-3"
          >
            {galleryFilters.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="relative group overflow-hidden bg-surface break-inside-avoid border-l border-t border-gold-border"
            >
              <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover hover-media group-hover:scale-105 vignette"
                />
              <div className="absolute inset-0 bg-linear-to-t from-stage via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex flex-col justify-end p-6">
                <span className="font-label-caps text-label-caps text-primary mb-2">
                  {item.category}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            variant="ghost"
            className="gap-2"
            type="button"
            onClick={() => setLoaded(false)}
          >
            {loaded ? "Load More" : "No further images in this gallery"}
            <Icon name="expand_more" className="text-sm" />
          </Button>
        </div>
      </section>

      <section className="bg-surface-container py-stack-xl relative overflow-hidden border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center px-margin-mobile md:px-margin-desktop relative z-10 space-y-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase">
            Bring This Energy To Your Stage
          </h2>
          <Button href="/#inquiry" size="lg">
            Book the Show
          </Button>
        </div>
      </section>
    </div>
  );
}
