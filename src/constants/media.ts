export const youtubeVideos = {
  tokomile: "eM0NeJIaeFs",
  interview: "4BsvNBqfXxE",
} as const;

export function youtubeEmbedSrc(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}
