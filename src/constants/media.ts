export const youtubeVideos = {
  tokomile: "eM0NeJIaeFs",
  interview: "4BsvNBqfXxE",
  /** Showreel uses the interview until a dedicated showreel ID is supplied */
  showreel: "4BsvNBqfXxE",
} as const;

/** hqdefault exists for every public video. maxresdefault 404s when YouTube has no HD still. */
export function youtubeThumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function youtubeEmbedSrc(
  videoId: string,
  options?: { start?: number; end?: number },
) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
  });
  if (options?.start != null) params.set("start", String(options.start));
  if (options?.end != null) params.set("end", String(options.end));
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
