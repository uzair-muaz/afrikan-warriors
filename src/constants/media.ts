export const youtubeVideos = {
  tokomile: "eM0NeJIaeFs",
  interview: "4BsvNBqfXxE",
  /** Showreel uses the interview until a dedicated showreel ID is supplied */
  showreel: "4BsvNBqfXxE",
} as const;

export function youtubeEmbedSrc(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}
