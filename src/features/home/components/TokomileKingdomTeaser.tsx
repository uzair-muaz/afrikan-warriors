import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tokomileCharacters } from "@/constants/shows";
import { cn } from "@/lib/cn";

export function TokomileKingdomTeaser() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-stage border-y border-primary/10">
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          eyebrow="Tokomile"
          title={
            <>
              Meet the <span className="text-primary">Kingdom</span>
            </>
          }
          description="This is an actual story — Chief Zuwadiswa, Prince Zagayo, Zomola, and the Kingdom of Zaramu."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tokomileCharacters.map((character) => (
            <article
              key={character.name}
              className="group relative overflow-hidden border border-primary/20 min-h-[52vh]"
            >
              <CoverImage
                src={character.image}
                alt={character.alt}
                className={cn(
                  "hover-media-slow group-hover:scale-105",
                  character.imageClassName,
                )}
              />
              <div className="absolute inset-0 bg-linear-to-t from-stage via-stage/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-headline-md text-2xl text-primary uppercase mb-2">
                  {character.name}
                </h3>
                <p className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                  {character.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/shows/tokomile"
            className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-80"
          >
            Discover the Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
