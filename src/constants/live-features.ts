export type LiveClip = {
  label: string;
  /** YouTube id. Absent when the clip lives on another site. */
  videoId?: string;
  /** Seconds. */
  start?: number;
  end?: number;
  href?: string;
};

export type LiveFeature = {
  title: string;
  note?: string;
  clips: readonly LiveClip[];
};

/** Featured Afrikan Warriors Live performances supplied by the company. */
export const liveFeatures: readonly LiveFeature[] = [
  {
    title: "Bahrain — Bapco Modernization Project Inauguration Ceremony 2024",
    note: "The main performance runs from about 17:30 to 43:40.",
    clips: [
      {
        label: "Watch",
        videoId: "1OEr7q_IcJA",
        start: 17 * 60 + 30,
        end: 43 * 60 + 40,
      },
    ],
  },
  {
    title: "The Walled City Tattoo, Derry/Londonderry 2013",
    clips: [
      { label: "Trailer", videoId: "mevD3XDx7m4" },
      { label: "Performance", videoId: "6PYTky2qNTo" },
    ],
  },
  {
    title: "Australia’s Got Talent",
    clips: [
      { label: "Part 1", videoId: "8AkDyX1DnZg" },
      { label: "Part 2", videoId: "55gvuTh6cjE" },
    ],
  },
  {
    title: "Flamingo Land Theme Park TV Ad",
    clips: [{ label: "Watch", videoId: "uCsSws4rNkk" }],
  },
  {
    title: "Festival of Fools",
    clips: [{ label: "Watch", videoId: "iBv7FKrUzs8" }],
  },
  {
    title: "Cooperative Events",
    clips: [
      {
        label: "Watch on Facebook",
        href: "https://www.facebook.com/share/v/18UYkLQ65Q/",
      },
    ],
  },
];

function liveFeature(title: string, clipLabel?: string): LiveFeature {
  const feature = liveFeatures.find((item) => item.title === title);
  if (!feature) {
    throw new Error(`Missing live feature: ${title}`);
  }
  if (!clipLabel) return feature;
  return {
    ...feature,
    clips: feature.clips.filter((clip) => clip.label === clipLabel),
  };
}

/** A short set for the landing page. The full list stays on the show and media pages. */
export const homeLiveHighlights: readonly LiveFeature[] = [
  liveFeature("Bahrain — Bapco Modernization Project Inauguration Ceremony 2024"),
  liveFeature("Australia’s Got Talent", "Part 1"),
  liveFeature("Flamingo Land Theme Park TV Ad"),
];
