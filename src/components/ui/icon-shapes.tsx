import type { ReactNode } from "react";

function Figure({
  transform,
  opacity,
}: {
  transform?: string;
  opacity?: number;
}) {
  return (
    <g opacity={opacity} transform={transform}>
      <circle cx="0" cy="-6.6" r="2.2" />
      <path d="M-3.5-4h7c.64 0 1.14.57 1.06 1.2L3.9 3.3c-.1.82-.8 1.42-1.63 1.42H-2.27c-.83 0-1.53-.6-1.63-1.42L-4.56-2.8C-4.64-3.43-4.14-4-3.5-4Z" />
    </g>
  );
}

export const iconShapes = {
  accessibility_new: (
    <>
      <circle cx="12" cy="5.2" r="2.3" />
      <path d="M7.2 8.1c.4-.6 1.1-1 1.9-1h5.8c.8 0 1.5.4 1.9 1l1.8 2.7a1.2 1.2 0 0 1-2 1.3L15.2 10v3.2l2.6 6.2a1.25 1.25 0 1 1-2.3 1L13.2 14h-2.4L8.5 20.4a1.25 1.25 0 1 1-2.3-1L8.8 13.2V10L7.4 12.1a1.2 1.2 0 0 1-2-1.3L7.2 8.1Z" />
    </>
  ),

  add: <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z" />,

  adjust: (
    <>
      <circle cx="12" cy="12" r="9" opacity="0.28" />
      <circle cx="12" cy="12" r="6.2" opacity="0.55" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),

  arrow_forward: (
    <path d="M13.2 5.2 20 12l-6.8 6.8-1.4-1.4 4.4-4.4H4v-2h12.2l-4.4-4.4 1.4-1.4Z" />
  ),

  attractions: (
    <>
      <path d="M12.7 2.1h5l-1.15 1.25 1.15 1.25h-5z" />
      <circle cx="12" cy="4.15" r="1.2" />
      <path d="M12 4.7 21.6 12.8q-1.6 1.4-3.2.3-1.5 1.1-3.1.2-1.6 1.1-3.3.2-1.6 1.1-3.3.2-1.5 1.1-3.1.2-1.6 1.1-3.2-.3Z" />
      <path d="M12 4.7 15.6 13.2h-7.2Z" fill="var(--color-stage)" opacity="0.35" />
      <path d="M4.3 13h15.4v7.4H4.3z" opacity="0.45" />
      <path d="M11.15 13h1.7v7.4h-1.7z" />
      <path d="M9.5 20.4v-3.5a2.5 2.5 0 0 1 5 0v3.5z" fill="var(--color-stage)" />
    </>
  ),

  bolt: <path d="M13.6 2.5 6.2 13.2h5.1L9.4 21.5 18.4 10h-5.2L13.6 2.5Z" />,

  business: (
    <>
      <path d="M5.2 20.4V7.2h13.6v13.2H5.2Z" />
      <path d="M4.2 5.4h15.6v2.2H4.2z" />
      <path
        d="M7 9.2h3v2.6H7zm7 0h3v2.6h-3zM7 13.4h3v2.6H7zm7 0h3v2.6h-3z"
        fill="var(--color-stage)"
      />
      <path d="M10.4 16.6h3.2v3.8h-3.2z" fill="var(--color-stage)" />
    </>
  ),

  cake: (
    <>
      <path d="M4.2 13.2h15.6v7.1H4.2z" opacity="0.4" />
      <path d="M5.2 10.4h13.6v3.2H5.2z" />
      <rect x="8" y="5.4" width="1.5" height="5" rx="0.6" />
      <rect x="11.25" y="4.4" width="1.5" height="6" rx="0.6" />
      <rect x="14.5" y="5.4" width="1.5" height="5" rx="0.6" />
      <path d="M8.75 3.2c.8 0 .8 1.6 0 1.6s-.8-1.6 0-1.6Zm3.25-1c.8 0 .8 1.6 0 1.6s-.8-1.6 0-1.6Zm3.25 1c.8 0 .8 1.6 0 1.6s-.8-1.6 0-1.6Z" />
    </>
  ),

  calendar_today: (
    <>
      <path d="M7 3.2h2v2.2h6V3.2h2v2.2h3.2v15.4H3.8V5.4H7V3.2Z" />
      <path d="M5.6 10h12.8v8.8H5.6z" opacity="0.35" />
      <circle cx="8.2" cy="14.2" r="1.05" />
      <circle cx="12" cy="14.2" r="1.05" />
      <circle cx="15.8" cy="14.2" r="1.05" />
    </>
  ),

  campaign: (
    <>
      <path d="M4.2 9.2h4.2l8.4-5v15.6l-8.4-5H4.2z" />
      <path d="M18.4 9.4a3.4 3.4 0 0 1 0 5.2l-1.2-1.1a1.9 1.9 0 0 0 0-3z" opacity="0.5" />
      <path d="M8.2 14.4 6.6 20.2h2.6l1.3-5.2z" opacity="0.55" />
    </>
  ),

  celebration: (
    <>
      <circle cx="12.8" cy="4.25" r="2.15" />
      <path d="M10.4 7.1C7.4 5.4 5.4 3.8 3.8 3.2c0 1.3.4 2.5 1.4 3.4 1.3 1.2 3.1 2.4 5.1 3.1l.1-2.6Z" />
      <path d="M15 8.2c2.1.3 3.9.1 5.7-.9l.9 1.7c-2.1 1.3-4.4 1.6-7 1.1l.4-1.9Z" />
      <path d="M10.2 7.5h4.6c.5 0 .9.4.9.9v2.1l5 10.1H4.7l4.6-10.1V8.4c0-.5.4-.9.9-.9Z" />
      <path d="M8.8 13.4h7.8l3 7.2H5.8z" opacity="0.38" />
    </>
  ),

  check_circle: (
    <path
      fillRule="evenodd"
      d="M12 2.2a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 0-19.6Zm4.15 7.05-5.4 5.4-2.9-2.9 1.4-1.4 1.5 1.5 4-4 1.4 1.4Z"
    />
  ),

  close: (
    <path d="M6.2 5.1 12 10.9l5.8-5.8 1.1 1.1L13.1 12l5.8 5.8-1.1 1.1L12 13.1l-5.8 5.8-1.1-1.1L10.9 12 5.1 6.2 6.2 5.1Z" />
  ),

  crown: (
    <>
      <path d="M3.2 8.8 7.4 13 12 4.6 16.6 13 20.8 8.8 19.2 19.2H4.8Z" />
      <path d="M4.6 17.2h14.8v2.4H4.6z" />
      <circle cx="3.6" cy="8.2" r="1.55" />
      <circle cx="12" cy="4.1" r="1.7" />
      <circle cx="20.4" cy="8.2" r="1.55" />
      <path d="M7.4 14.6h9.2l.8 2.6H6.6z" fill="var(--color-stage)" opacity="0.4" />
    </>
  ),

  directions_run: (
    <>
      <circle cx="14.6" cy="4.6" r="2.15" />
      <path d="M8.2 8.4c2.1-1.6 4.6-.6 6.6.6l-1.1 1.7c-1.2-.7-2.4-1.1-3.3-.4L8.8 12l3.1 1.3-1.2 6.4-2.1-.4 1-4.4-3.5-1.7c-1.4-.7-1.8-2.5-.9-3.8l1-1Z" />
      <path d="M13.2 12.6 17 15.2l2.3-3.2 1.7 1.2-3.4 4.7-5 3.2-1.2-1.8 4.1-2.6-1.6-1.2z" opacity="0.55" />
    </>
  ),

  diversity_3: (
    <>
      <Figure transform="translate(6.2 16.4) scale(0.86)" />
      <Figure transform="translate(12 15.4)" />
      <Figure transform="translate(17.8 16.4) scale(0.86)" opacity={0.55} />
    </>
  ),

  done: <path d="m9.2 16.4-4.4-4.4 1.4-1.4 3 3 8.6-8.6 1.4 1.4-10 10Z" />,

  expand_more: (
    <path d="m6.2 9.2 5.8 5.8 5.8-5.8 1.4 1.4L12 17.8 4.8 10.6 6.2 9.2Z" />
  ),

  facebook: (
    <path d="M13.6 21v-7.2h2.5l.4-2.9h-2.9V9.1c0-.8.2-1.4 1.4-1.4H16.7V5.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2h-2.6v2.9h2.6V21h3Z" />
  ),

  flag: (
    <>
      <path d="M4 3.2h1.8v17.8H4z" />
      <path d="M5.8 4h14.4v9.2H5.8z" />
      <path d="M11.7 4h2.6v9.2h-2.6z" fill="var(--color-stage)" />
      <path d="M5.8 7.3h14.4v2.6H5.8z" fill="var(--color-stage)" />
    </>
  ),

  festival: (
    <>
      <path d="M12 3 21.2 13H2.8L12 3Z" />
      <path d="M5 13h14v7.6H5z" opacity="0.4" />
      <path d="M11.15 13h1.7v7.6h-1.7z" />
      <path d="M3.4 8.2 7.8 4.6l.9 1.1-4.4 3.6z" opacity="0.7" />
    </>
  ),

  fitness_center: (
    <>
      <path d="M3.2 9.2h2.4v5.6H3.2zm15.2 0h2.4v5.6h-2.4z" />
      <path d="M6.4 10.2h2.2v3.6H6.4zm9 0h2.2v3.6H15.4z" opacity="0.55" />
      <rect x="8.4" y="11.15" width="7.2" height="1.7" rx="0.6" />
    </>
  ),

  format_quote: (
    <path d="M4.2 17.8V11c0-3.4 2-6.3 5.4-7.2v2.6c-1.9.7-2.9 2.2-2.9 4.6h2.9v6.8H4.2zm10.2 0V11c0-3.4 2-6.3 5.4-7.2v2.6c-1.9.7-2.9 2.2-2.9 4.6h2.9v6.8h-5.4z" />
  ),

  graphic_eq: (
    <>
      <rect x="4.2" y="7" width="2.4" height="10" rx="1.1" />
      <rect x="8.6" y="4.4" width="2.4" height="12.6" rx="1.1" />
      <rect x="13" y="6.2" width="2.4" height="10.8" rx="1.1" />
      <rect x="17.4" y="8.4" width="2.4" height="8.6" rx="1.1" />
    </>
  ),

  group: (
    <>
      <Figure transform="translate(8.4 16.2) scale(0.95)" />
      <Figure transform="translate(15.2 16.2) scale(0.95)" opacity={0.55} />
    </>
  ),

  groups: (
    <>
      <Figure transform="translate(5.8 16.6) scale(0.82)" />
      <Figure transform="translate(12 15.6)" />
      <Figure transform="translate(18.2 16.6) scale(0.82)" opacity={0.5} />
    </>
  ),

  instagram: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5.2" />
      <circle
        cx="12"
        cy="12"
        r="4.15"
        fill="none"
        stroke="var(--color-stage)"
        strokeWidth="1.7"
      />
      <circle cx="17.15" cy="6.85" r="1.15" fill="var(--color-stage)" />
    </>
  ),

  local_bar: (
    <>
      <path d="M6.2 3.4h11.6l-4.7 8.2V17h2.7v2.2H8.2V17h2.7v-5.4L6.2 3.4Z" />
      <path d="M8.1 5.4h7.8l-1.3 2.3H9.4z" opacity="0.4" />
    </>
  ),

  local_fire_department: (
    <>
      <path d="M12.3 2.2c.6 3 2.2 5 4.2 6.8 2 1.8 3.7 4 3.7 7 0 4.2-3.6 7.4-8.2 7.4S3.8 20.2 3.8 16c0-2.6 1.3-4.8 2.6-6.2.6 2.4 2 4 3.8 5C9.6 11.2 10.6 7.2 12.3 2.2Z" />
      <path d="M12 10.8c2.4 1.6 3.6 3.2 3.6 5.2 0 2.4-1.8 4-3.6 4s-3.6-1.6-3.6-4c0-1.5.8-2.8 1.8-3.6.2 1.1 1 1.8 2 2.2-.2-1.5.4-3 1.2-3.8Z" fill="var(--color-stage)" />
    </>
  ),

  location_on: (
    <>
      <path d="M12 2.6c3.7 0 6.7 2.9 6.7 6.7 0 4.4-5.1 9.8-6.4 11.1h-.6C10.4 19.1 5.3 13.7 5.3 9.3c0-3.8 3-6.7 6.7-6.7Z" />
      <circle cx="12" cy="9.2" r="2.15" fill="var(--color-stage)" />
    </>
  ),

  mail: (
    <>
      <path d="M3.2 6h17.6v12.4H3.2z" />
      <path
        d="M3.2 6 12 13.2 20.8 6"
        fill="none"
        stroke="var(--color-stage)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </>
  ),

  menu: <path d="M4 6.2h16v2H4zm0 4.8h16v2H4zm0 4.8h16v2H4z" />,

  mic: (
    <>
      <rect x="9.1" y="3.2" width="5.8" height="10.2" rx="2.9" />
      <path d="M7.2 11.4a4.8 4.8 0 0 0 9.6 0h1.8a6.6 6.6 0 0 1-5.7 6.3V21h-1.8v-3.3a6.6 6.6 0 0 1-5.7-6.3h1.8Z" opacity="0.55" />
    </>
  ),

  mood: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10.2" r="1.15" fill="var(--color-stage)" />
      <circle cx="15" cy="10.2" r="1.15" fill="var(--color-stage)" />
      <path
        d="M8.2 14.2c1.1 1.8 2.5 2.7 3.8 2.7s2.7-.9 3.8-2.7"
        fill="none"
        stroke="var(--color-stage)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),

  movie: (
    <>
      <path d="M3.4 6.4h17.2v12H3.4z" />
      <path d="M3.4 6.4 8 3.8v2.6zm12.6 0 4.6-2.6v2.6z" opacity="0.55" />
      <path d="M7.2 6.4h1.6v12H7.2zm8 0h1.6v12H15.2z" fill="var(--color-stage)" opacity="0.35" />
    </>
  ),

  music_note: (
    <>
      <path d="M10.2 5.2v9.1a3.4 3.4 0 1 0 1.8 3V9.4L19 7.6V4.2L10.2 6.4V5.2Z" />
      <circle cx="8.4" cy="17.5" r="2.6" />
    </>
  ),

  park: (
    <>
      <path d="M12 3.2c4.4 0 7.4 4.4 5.8 8.4H6.2C4.6 7.6 7.6 3.2 12 3.2Z" />
      <path d="M12 8.2c3.8 0 6.2 3.6 4.8 7H7.2c-1.4-3.4 1-7 4.8-7Z" opacity="0.5" />
      <rect x="11.1" y="15" width="1.8" height="5.6" rx="0.4" />
    </>
  ),

  play_arrow: <path d="M7.4 4.8v14.4L19.2 12 7.4 4.8Z" />,

  play_circle: (
    <path
      fillRule="evenodd"
      d="M12 2.2a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 0-19.6ZM9.8 8.1v7.8L17 12 9.8 8.1Z"
    />
  ),

  restaurant: (
    <>
      <path d="M8.2 3.4c.7 0 1.3.6 1.3 1.4v6.4H8.2V21H6.4V11.2H5.2V4.8c0-.8.6-1.4 1.3-1.4h1.7Z" />
      <path d="M16.2 3.4c2.1 0 3.6 1.7 3.6 4.2v3.6h-1.7V21h-1.8V11.2h-1.7V7.6c0-2.5 1.5-4.2 3.6-4.2Z" opacity="0.55" />
    </>
  ),

  schedule: (
    <>
      <circle cx="12" cy="12" r="9" />
      <rect x="11.2" y="6.4" width="1.6" height="6.4" rx="0.8" fill="var(--color-stage)" />
      <rect x="11.2" y="11.2" width="5.2" height="1.6" rx="0.8" fill="var(--color-stage)" />
    </>
  ),

  school: (
    <>
      <path d="M12 3.4 22 8.6v1.8H2V8.6L12 3.4Z" />
      <path d="M6.2 11.2h11.6v6.4l-5.8 2.8-5.8-2.8z" opacity="0.45" />
      <path d="M20.2 10.4v6.2l1.2.6v1.4l-2.4-1.1v-7.1z" />
    </>
  ),

  shield: (
    <>
      <path d="M12 2.2 20.6 5.5v7.1c0 5.3-3.7 8.8-8.6 10.2C7.1 21.4 3.4 17.9 3.4 12.6V5.5Z" />
      <path d="M12 5.2 17.4 7.2v5.2c0 3.5-2.3 5.9-5.4 7-3.1-1.1-5.4-3.5-5.4-7V7.2Z" fill="var(--color-stage)" opacity="0.32" />
      <path d="M8.4 13.2 12 8.6l3.6 4.6-1.5 1.2L12 11.4l-2.1 3z" fill="var(--color-stage)" />
    </>
  ),

  shopping_cart: (
    <>
      <path d="M3.4 4.2h2.3l.6 2.2h13.4l-1.8 7.6H8.1L7.2 10H6.2L4.8 5.8H3.4z" />
      <circle cx="9.2" cy="18.6" r="1.7" />
      <circle cx="16.6" cy="18.6" r="1.7" />
      <path d="M8.2 6.4h10.6l-1.3 5.6H8.9z" opacity="0.35" />
    </>
  ),

  sports_gymnastics: (
    <>
      <circle cx="16.4" cy="4.8" r="2.1" />
      <path d="M4.4 10.6c4.2-3.6 8.6-2.4 12.6.2l-1.2 1.7c-3.2-2-6.6-2.8-9.6.1L4.4 10.6Z" />
      <path d="M8.2 12.8c2.2 2.6 4.8 4.2 8.2 5.2l-.7 1.8c-3.8-1.1-6.8-3-9.4-6.2l1.9-.8Z" opacity="0.6" />
      <path d="M5.2 19.6h13.6v1.8H5.2z" />
    </>
  ),

  sports_martial_arts: (
    <>
      <circle cx="13.8" cy="4.6" r="2.15" />
      <path d="M6.2 8.6c2.8-1.4 5.4-.2 7.6 1.4L12.6 12c-1.6-1.1-3.2-1.8-4.8-.8L6.2 8.6Z" />
      <path d="M10.4 11.4 18.8 8.8l.8 1.8-6.2 2.2 4.8 6.4-1.9 1.2-5.9-7.8z" />
      <path d="M9.6 13.2 6.2 20.2 4.4 19l3.8-7z" opacity="0.55" />
    </>
  ),

  sports_soccer: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8.1 14.7 10l-.9 3.1H10.2L9.3 10 12 8.1Z" fill="var(--color-stage)" />
      <path
        d="M12 3.4 13.4 6.8 12 8.1 10.6 6.8 12 3.4Zm6.8 4.1-3.1.2.9 2.3 2.6 1.8.9-2.1-1.3-2.2Zm-13.6 0L6.9 9.8l.9 2.1 2.6-1.8.9-2.3-3.1-.2-1.3 2.2Zm1.4 9.3 1.6-2.7-2.5-1.6-2.2 2.2 1.2 2.1 1.9 0Zm10.8 0 1.9 0 1.2-2.1-2.2-2.2-2.5 1.6 1.6 2.7ZM8.6 19.8 12 18.2l3.4 1.6-.6 1.4H9.2l-.6-1.4Z"
        fill="var(--color-stage)"
        opacity="0.55"
      />
    </>
  ),

  star: (
    <path d="M12 2.8 14.6 9h6.6l-5.3 3.9 2 6.3L12 15.6 6.1 19.2l2-6.3L2.8 9h6.6L12 2.8Z" />
  ),

  swords: (
    <>
      <path d="M4.4 3.6 15 14.2l-1.6 1.6-2-2-1.5 1.5-1.5-1.5 1.5-1.5-2.2-2.2L4.4 3.6Z" />
      <path d="M5.6 15.6 8.4 18.4 5.4 21 2.8 18.4z" opacity="0.55" />
      <path d="M19.6 3.6 9 14.2l1.6 1.6 2-2 1.5 1.5 1.5-1.5-1.5-1.5 2.2-2.2L19.6 3.6Z" />
    </>
  ),

  theater_comedy: (
    <>
      <path d="M3.6 6.2h9.2v10.4c0 1.4-1.8 2.6-4.6 2.6s-4.6-1.2-4.6-2.6V6.2Z" />
      <circle cx="6.4" cy="10.4" r="0.95" fill="var(--color-stage)" />
      <circle cx="9.8" cy="10.4" r="0.95" fill="var(--color-stage)" />
      <path
        d="M6.2 13.4c.8 1.3 1.8 1.9 2.8 1.9s2-.6 2.8-1.9"
        fill="none"
        stroke="var(--color-stage)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <g opacity="0.7">
        <path d="M11.2 5.2h9.2v10.4c0 1.4-1.8 2.6-4.6 2.6s-4.6-1.2-4.6-2.6V5.2Z" />
        <circle cx="14" cy="9.2" r="0.9" fill="var(--color-stage)" />
        <circle cx="17.4" cy="9.2" r="0.9" fill="var(--color-stage)" />
        <path
          d="M14.2 14.2c.7-1 1.6-1.5 2.4-1.5s1.7.5 2.4 1.5"
          fill="none"
          stroke="var(--color-stage)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </g>
    </>
  ),

  tiktok: (
    <path d="M14.6 3.2c.7 2.6 2.4 4.4 5.2 4.8v3.1c-1.8 0-3.4-.6-5.1-1.7v6.7c0 3.4-2.6 5.7-6.1 5.7S2.6 19.5 2.6 16.1c0-3.5 2.6-5.8 6-5.8.5 0 1 .1 1.5.2v3.3c-.4-.2-.9-.3-1.4-.3-1.6 0-2.8 1.2-2.8 2.7 0 1.6 1.2 2.7 2.9 2.7 1.6 0 2.8-1.2 2.8-3.1V3.2h3Z" />
  ),

  tv: (
    <>
      <path d="M3.2 6.4h17.6v11.2H3.2z" />
      <path d="M5 8.2h14v7.6H5z" fill="var(--color-stage)" opacity="0.35" />
      <path d="M9 19.6h6v1.6H9z" />
    </>
  ),

  volunteer_activism: (
    <path d="M12 20.4 4.8 13.6c-2-2-2-5.2.2-7.1 1.8-1.6 4.5-1.3 6.1.5L12 8.3l.9-1.3c1.6-1.8 4.3-2.1 6.1-.5 2.2 1.9 2.2 5.1.2 7.1L12 20.4Z" />
  ),

  workspace_premium: (
    <>
      <circle cx="12" cy="9.2" r="6.4" />
      <path d="m9.2 14.8 1.4 6.6L12 19.4l1.4 2-1.4-6.6z" opacity="0.55" />
      <path d="M12 6.1 13.1 8.4l2.5.3-1.8 1.8.5 2.5L12 11.8l-2.3 1.2.5-2.5-1.8-1.8 2.5-.3L12 6.1Z" fill="var(--color-stage)" />
    </>
  ),

  youtube: (
    <>
      <path d="M21.6 8.2c.3 1.2.4 3.2.4 3.8s-.1 2.6-.4 3.8c-.3 1.2-1.1 2-2.3 2.3C17.8 18.4 12 18.4 12 18.4s-5.8 0-7.3-.3c-1.2-.3-2-1.1-2.3-2.3C2.1 14.6 2 12.6 2 12s.1-2.6.4-3.8c.3-1.2 1.1-2 2.3-2.3C6.2 5.6 12 5.6 12 5.6s5.8 0 7.3.3c1.2.3 2 1.1 2.3 2.3Z" />
      <path d="M10.2 8.8v6.4L16 12l-5.8-3.2Z" fill="var(--color-stage)" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof iconShapes;
