# Media library — v1

Site imagery for Afrikan Warriors. Future packs can live beside this as `v2/`, etc.

## Layout

```
media/v1/
  source/     Client-provided stills (PDF extracts) — reference grade
  home/       Homepage supporting shots
  acts/       Act gallery tiles (01–09)
  gallery/    Media page grid
  workshops/  Workshop page
  shows/      Per-production stills
  pages/      One-off page heroes (media, faq)
  team/       Team placeholders until real portraits arrive
```

## Naming

- Prefer `{section}/{nn}-{slug}.{ext}` (zero-padded index + kebab description)
- `source/` keeps client originals: `{nn}-{slug}.jpg`
- Do not use `gen-` or `pdf-extract-` prefixes
