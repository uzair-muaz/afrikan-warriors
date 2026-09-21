"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import {
  disciplineFilters,
  galleryItems,
  showFilters,
  type DisciplineFilter,
  type ShowFilter,
} from "@/constants/gallery";
import { PhotoLightbox } from "@/features/gallery/components/PhotoLightbox";
import { cn } from "@/lib/cn";

function FilterRow<T extends string>({
  items,
  value,
  onChange,
  label,
}: {
  items: readonly T[];
  value: T;
  onChange: (next: T) => void;
  label: string;
}) {
  return (
    <div
      className="flex flex-wrap justify-center gap-x-5 gap-y-3"
      role="group"
      aria-label={label}
    >
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={cn(
            "font-label-caps text-[0.65rem] md:text-label-caps uppercase tracking-widest transition-colors",
            value === item
              ? "text-primary border-b border-primary pb-1"
              : "text-on-surface-variant hover:text-primary",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function GalleryView() {
  const [show, setShow] = useState<ShowFilter>("All");
  const [discipline, setDiscipline] = useState<DisciplineFilter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    return galleryItems.filter((item) => {
      const showMatch = show === "All" || item.show === show;
      const disciplineMatch =
        discipline === "All" || item.discipline === discipline;
      return showMatch && disciplineMatch;
    });
  }, [show, discipline]);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((current) => {
      if (current == null || items.length === 0) return current;
      return (current - 1 + items.length) % items.length;
    });
  }, [items.length]);
  const next = useCallback(() => {
    setOpenIndex((current) => {
      if (current == null || items.length === 0) return current;
      return (current + 1) % items.length;
    });
  }, [items.length]);

  return (
    <div id="photos" className="scroll-mt-32">
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-10 pb-8 space-y-6">
        <FilterRow
          items={showFilters}
          value={show}
          onChange={(nextShow) => {
            setShow(nextShow);
            setOpenIndex(null);
          }}
          label="Filter by show"
        />
        <FilterRow
          items={disciplineFilters}
          value={discipline}
          onChange={(nextDiscipline) => {
            setDiscipline(nextDiscipline);
            setOpenIndex(null);
          }}
          label="Filter by discipline"
        />
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
        {items.length === 0 ? (
          <p className="text-center font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest py-20">
            Photographs for this category will be added as the archive grows.
          </p>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {items.map((item, index) => (
              <button
                key={`${item.src}-${item.title}`}
                type="button"
                onClick={() => setOpenIndex(index)}
                className="relative group overflow-hidden bg-surface break-inside-avoid border-l border-t border-gold-border w-full text-left cursor-pointer"
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
                    {item.show}
                  </span>
                  <h3 className="font-headline-md text-xl text-on-surface uppercase">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {openIndex != null && items[openIndex] ? (
        <PhotoLightbox
          items={items}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      ) : null}
    </div>
  );
}
