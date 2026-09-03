import { CoverImage } from "@/components/ui/CoverImage";
import { Icon } from "@/components/ui/Icon";

type TrailerPlaceholderProps = {
  image: string;
  alt: string;
  label?: string;
};

export function TrailerPlaceholder({
  image,
  alt,
  label,
}: TrailerPlaceholderProps) {
  return (
    <div className="relative w-full aspect-video border border-primary/20 bg-surface-container-lowest overflow-hidden group">
      <CoverImage
        src={image}
        alt={alt}
        className="opacity-50 group-hover:opacity-30 vignette"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center bg-background/50 backdrop-blur-sm group-hover:scale-110 transition-[scale] duration-700 ease-in-out gold-glow">
          <Icon name="play_arrow" filled className="text-primary text-4xl ml-2" />
        </div>
      </div>
      {label ? (
        <p className="absolute bottom-6 left-6 font-label-caps text-label-caps text-on-surface z-10">
          {label}
        </p>
      ) : null}
    </div>
  );
}
