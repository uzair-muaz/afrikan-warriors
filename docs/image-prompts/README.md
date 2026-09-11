# Image inventory & generation

## Style source of truth

All new generations must match the **client PDF extract style**:

- Style lock: [`_style-lock.md`](./_style-lock.md)
- Visual references: `public/client-updates/pdf-extract-01.jpg` … `06.jpg`
- **Batch to generate:** [`GENERATE_THESE.md`](./GENERATE_THESE.md) ← start here

Older per-slot files under `home/`, `acts/`, `shows/`, etc. are legacy; prefer `GENERATE_THESE.md` + `_style-lock.md` until those files are rewritten.

## Live images on the site

| Location | Role |
|----------|------|
| `public/client-updates/` | Client PDF stills — current hero / flagship grade |
| `public/stitch/` | Remaining page slots (to be replaced with new gens) |
| `src/constants/images.json` | Wiring of paths into the app |

## Home — `/`

| Slot | Current file (typical) |
|------|------------------------|
| Hero | `client-updates/pdf-extract-01.jpg` |
| About | `client-updates/pdf-extract-05.jpg` |
| Bring Africa | `client-updates/pdf-extract-02.jpg` |

## Shows

| Page | Notes |
|------|--------|
| `/shows/tokomile` | Hero often extract-04; need 02–03 gens |
| `/shows/rizombe-king` | Hero often extract-02; need 02–07 gens |
| `/shows/african-pirate` | Both stitch — generate |
| `/shows/freedom` | Hero often extract-06; need 02–03 gens |
| `/shows/regular-show` | Often extract-05 |

## Other

| Page | Folder |
|------|--------|
| `/acts` | `public/stitch/acts/` (+ fire limbo may use extract-03) |
| `/gallery` | `public/stitch/gallery/` |
| `/workshops` | `public/stitch/workshops/` |
| `/team` | `public/stitch/team/01–14.jpg` |

## Workflow

1. Read `_style-lock.md`.
2. Open `GENERATE_THESE.md` and generate each unchecked slot.
3. Save over stitch paths (or higgsfield + update `images.json`).
4. Compare to PDF extracts before shipping.
