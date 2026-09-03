import Image from "next/image";
import { cn } from "@/lib/cn";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function CoverImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority,
}: CoverImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn(
        "object-cover hover-media motion-reduce:transition-none motion-reduce:transform-none",
        className,
      )}
    />
  );
}
