# GENERATE THESE — Afrikan Warriors image batch

**Purpose:** Ready-to-run prompts to regenerate site imagery in the **client PDF extract style** (`public/client-updates/`).  
**Style lock:** always paste [`_style-lock.md`](./_style-lock.md) (or its rules) with every prompt below.  
**Save generated files** into `public/stitch/...` replacing the paths listed (keep filenames so `images.json` keeps working), **or** save to `public/higgsfield/...` and update `images.json` after review.

---

## Already covered (do NOT regenerate unless upgrading)

| File | Use on site |
|------|-------------|
| `public/client-updates/pdf-extract-01.jpg` | Home hero / pyramid energy |
| `public/client-updates/pdf-extract-02.jpg` | Rizombe / theatrical storytelling ensemble |
| `public/client-updates/pdf-extract-03.jpg` | Fire limbo act |
| `public/client-updates/pdf-extract-04.jpg` | Tokomile kingdom / flagship theatre |
| `public/client-updates/pdf-extract-05.jpg` | Tumbling mid-air + live band / Afrikan Warriors Live |
| `public/client-updates/pdf-extract-06.jpg` | Freedom / intense theatrical vocal moment |

Use these as **visual references** when prompting the slots below.

---

## How to generate each slot

1. Open `_style-lock.md` — copy Brand + Theatre + Negative.
2. Copy the **Prompt** for the slot.
3. Aspect ratio as listed.
4. Prefer outputs that look like the PDF extracts: full stage, props, colourful costumes, haze with warm + magenta wash, ensemble visible.
5. Save over the **Target file** path.

---

## Home

### H1 — Home hero (optional upgrade of extract-01)

| | |
|---|---|
| **Target** | `public/stitch/home/01.jpg` |
| **Aspect** | 16:9 |
| **Reference** | `pdf-extract-01.jpg` |

**Prompt**

Photoreal live-theatre photograph matching Afrikan Warriors PDF production stills. Wide 16:9, centred. East African acrobatic troupe forming a tall human pyramid / diamond formation on a dark stage with interlocking mats. Men in bright teal satin performance trousers, bare-chested, athletic; women in leopard-print unitards held in mirrored side poses. Large cream cylindrical drums across the downstage edge. Side stage lanterns on stands, overhead beams through thick haze with warm amber key and soft purple-magenta background wash. Saxophone or drum kit faintly visible in the wings. Rustic fabric drapes. High detail sweat and fabric. Leave lower third slightly darker for website type. No text, logos, or UI.

### H2 — Home about

| | |
|---|---|
| **Target** | `public/stitch/home/02.jpg` |
| **Aspect** | 4:5 or 3:4 |
| **Reference** | `pdf-extract-05.jpg` |

**Prompt**

Photoreal theatre still, vertical. Mid-air male acrobat horizontal above three catchers on a dark matted stage, live band behind (guitar, saxophone, traditional string instrument, drum kit). Rustic tent-canvas drapes and wooden props. Warm overhead amber spots, deep black wings, high contrast skin and muscle. Same production language as Afrikan Warriors PDF extracts. No text.

### H3 — Bring Africa / ensemble

| | |
|---|---|
| **Target** | `public/stitch/home/03.jpg` *(create if missing; wire in images.json as home[2])* |
| **Aspect** | 4:5 |
| **Reference** | `pdf-extract-02.jpg` |

**Prompt**

Photoreal stage photograph, vertical. High-energy ensemble of East African male performers: traditional patterned wraps, bead collars, headpieces and face paint beside one performer in a modern light-grey suit — contrast of heritage and contemporary theatre. Dark reflective stage, overhead truss spots, intense open-mouthed performance expressions. Canvas backdrop with faint ancestral mask motif. Saturated textile colour against dark house. No text.

---

## Acts (home horizontal gallery + `/acts`)

Order matches site: Human Pyramids → Fire Limbo → Hoop Diving → Hat Juggling → Tumbling → Chinese Pole → Chair Balance → Live Percussion → Traditional Dance.

### A1 — Human Pyramids

| | |
|---|---|
| **Target** | `public/stitch/acts/02.jpg` |
| **Aspect** | 3:4 |
| **Reference** | `pdf-extract-01.jpg` |

**Prompt**

Vertical photoreal theatre still. Towering multi-tier human pyramid of East African acrobats, centred, teal satin trousers and athletic builds, leopard accents optional. Stage mats, cylindrical drums, warm + magenta haze, side lanterns. Company energy, not a single model. No text.

### A2 — Fire Limbo *(already have extract-03 — optional upgrade)*

| | |
|---|---|
| **Target** | `public/stitch/acts/01.jpg` |
| **Aspect** | 3:4 |
| **Reference** | `pdf-extract-03.jpg` |

**Prompt**

Vertical photoreal stage photo. Fire limbo: low bar with controlled flames, East African male acrobat bent extremely far back under the bar, leopard-print performance wraps, kneeling partner holding the bar end, smoke rising. Dark stage, warm key light, dramatic contrast. Controlled theatrical fire only — not a disaster scene. No text.

### A3 — Hoop Diving

| | |
|---|---|
| **Target** | `public/stitch/acts/04.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal theatre still. Acrobat diving mid-air through stacked wooden/rattan hoops, East African performers spotting. Dark stage, mats, warm amber spots and purple haze wash, drums in background. Teal or patterned performance trousers. Sharp action freeze. No text.

### A4 — Hat Juggling

| | |
|---|---|
| **Target** | `public/stitch/acts/03.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal stage photo. East African performer juggling traditional woven hats in a blur of motion, athletic torso, patterned wrap, beads. Stage haze, warm lanterns, dark wings, slight motion blur on hats only. Performance intensity. No text.

### A5 — Tumbling

| | |
|---|---|
| **Target** | `public/stitch/acts/09.jpg` |
| **Aspect** | 3:4 |
| **Reference** | `pdf-extract-05.jpg` |

**Prompt**

Vertical crop of high-velocity tumbling: East African acrobat mid-flip above dark stage mats, companions ready, live percussion visible behind. Warm overhead spots, haze, teal trousers. Photoreal freeze-frame. No text.

### A6 — Chinese Pole

| | |
|---|---|
| **Target** | `public/stitch/acts/07.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal theatre still. Acrobat in a flag or drop pose on a vertical Chinese pole, East African male, athletic, patterned trousers. Dark house, warm rim light, haze, stage mats. Strong geometry, high contrast. No text.

### A7 — Chair Balance

| | |
|---|---|
| **Target** | `public/stitch/acts/08.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal stage photo. Performer balancing atop a precarious stack of wooden chairs, East African acrobat, focused expression, patterned wrap. Warm amber key, magenta wash in background, haze, dark wings. Tension and height. No text.

### A8 — Live Percussion

| | |
|---|---|
| **Target** | `public/stitch/acts/05.jpg` *(or new `10.jpg` if keeping chair comedy)* |
| **Aspect** | 3:4 |
| **Reference** | `pdf-extract-05.jpg` |

**Prompt**

Vertical photoreal theatre still. Live African percussion on stage: djembe / cylindrical drums and a drum kit, East African musicians mid-strike, sweat and energy, warm spots, haze, rustic drapes. Acrobats faintly in soft focus behind. No text.

### A9 — Traditional Dance

| | |
|---|---|
| **Target** | `public/stitch/acts/06.jpg` |
| **Aspect** | 3:4 |
| **Reference** | `pdf-extract-04.jpg` |

**Prompt**

Vertical photoreal stage photo. Ensemble traditional African dance, East African men and women in vibrant orange-red patterned wraps, beads, radial headpiece on lead male, joyful powerful motion. Painted scenic or draped backdrop, warm amber theatrical light. Same language as Tokomile PDF extract. No text.

---

## Shows — Tokomile

### T1 — Hero / flagship *(optional upgrade of extract-04)*

| | |
|---|---|
| **Target** | `public/stitch/shows/tokomile/01.jpg` |
| **Aspect** | 16:9 |
| **Reference** | `pdf-extract-04.jpg` |

**Prompt**

Wide 16:9 photoreal theatre production still — Kingdom of Zaramu. Ensemble of East African dancers in earth-orange patterned costumes; lead male with large radial white stick/feather headpiece; lead female in flowing grey-blue robe, tall headwrap, staff, heavy beads. Painted jungle/waterfall scenic backdrop. Warm gold stage light, reflective dark floor, celebration and mythic theatre energy. No text.

### T2 — Ensemble

| | |
|---|---|
| **Target** | `public/stitch/shows/tokomile/02.jpg` |
| **Aspect** | 16:9 |

**Prompt**

Wide photoreal Tokomile ensemble shot: full cast of East African performers in Zaramu kingdom costumes on stage, mid-celebration or battle-dance, scenic African kingdom flat behind, drums, warm + atmospheric gel lighting, haze. Company scale, theatrical. No text.

### T3 — Story / rivalry

| | |
|---|---|
| **Target** | `public/stitch/shows/tokomile/03.jpg` |
| **Aspect** | 16:9 or 3:4 |

**Prompt**

Photoreal dramatic still: two rival East African princes face-to-face on stage (Zagayo / Zomola energy), athletic, theatrical costume and face paint, intense stare-down, warm rim light, dark kingdom scenic. High contrast storytelling frame. No text.

---

## Shows — Rizombe King

### R1 — Hero *(optional upgrade of extract-02)*

| | |
|---|---|
| **Target** | `public/stitch/shows/rizombe-king/01.jpg` |
| **Aspect** | 16:9 |
| **Reference** | `pdf-extract-02.jpg` |

**Prompt**

Wide 16:9 photoreal theatrical still. Power, rhythm, African storytelling: foreground trio of East African performers — traditional wraps and bead headpieces flanking a contemporary grey-suited singer/actor — mouths open in powerful delivery, ensemble behind, dark stage, truss spots, canvas ancestral backdrop. Saturated textiles, high energy. No text.

### R2 — Portrait

| | |
|---|---|
| **Target** | `public/stitch/shows/rizombe-king/02.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal character portrait on stage: East African lead in royal-myth costume (kente waist, copper cuffs, bead collar), serious powerful expression, warm key + purple haze, dark curtains. Theatre still, not fashion studio. No text.

### R3 — Trailer poster

| | |
|---|---|
| **Target** | `public/stitch/shows/rizombe-king/03.jpg` |
| **Aspect** | 16:9 |

**Prompt**

Wide cinematic trailer still: group dance surge of East African performers, motion and rhythm, warm theatrical light, haze, dark house. Feels like a paused showreel frame. No text.

### R4 — Acrobatics

| | |
|---|---|
| **Target** | `public/stitch/shows/rizombe-king/04.jpg` |
| **Aspect** | 16:9 or 3:4 |

**Prompt**

Photoreal high acrobatics within Rizombe: flyer mid-toss above spotters, East African cast, teal or dark performance wear with royal accents, stage mats, lanterns, haze. No text.

### R5 — Dance

| | |
|---|---|
| **Target** | `public/stitch/shows/rizombe-king/05.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal kinetic dance: East African dancers in patterned wraps, sharp choreography freeze, warm amber and magenta stage wash. No text.

### R6 — Music

| | |
|---|---|
| **Target** | `public/stitch/shows/rizombe-king/06.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal live percussion and vocals on stage: drums, open-mouthed singers, East African cast, theatrical haze and spots. No text.

### R7 — Drama

| | |
|---|---|
| **Target** | `public/stitch/shows/rizombe-king/07.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal dramatic beat: confrontational storytelling pose between two performers, rich costume, face paint, intense lighting. Theatre narrative, not melodrama soap. No text.

---

## Shows — African Pirate

### P1 — Hero

| | |
|---|---|
| **Target** | `public/stitch/shows/african-pirate/01.jpg` |
| **Aspect** | 16:9 |

**Prompt**

Wide 16:9 photoreal family-theatre still: Afrikan Warriors African Pirate production — East African acrobats in playful pirate-meets-African costume (colourful, theatrical, not Hollywood stereotype), mid leap or comedy beat, dark stage, warm spots, haze, joyful high energy for all ages. No skull-logo text, no UI. No text.

### P2 — Trailer / comedy

| | |
|---|---|
| **Target** | `public/stitch/shows/african-pirate/02.jpg` |
| **Aspect** | 16:9 |

**Prompt**

Wide photoreal comedy physical beat from African Pirate: expressive East African performer mid-laugh physical gag, colourful costume, ensemble reacting, theatrical lighting. Family entertainment tone. No text.

---

## Shows — Freedom

### F1 — Hero *(optional upgrade of extract-06)*

| | |
|---|---|
| **Target** | `public/stitch/shows/freedom/01.jpg` |
| **Aspect** | 16:9 |
| **Reference** | `pdf-extract-06.jpg` |

**Prompt**

Wide 16:9 photoreal intense theatrical moment: East African lead with microphone or open-mouthed vocal power, traditional multi-colour wrap, ensemble with shields/staffs beside, dramatic yellow-green stage spots, grand venue atmosphere. Movement, culture, expression. No text.

### F2 — Drum

| | |
|---|---|
| **Target** | `public/stitch/shows/freedom/02.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal close theatrical drum strike: powerful East African hands and torso at a large drum, sweat, warm key light, haze, dark stage. Ancestral rhythm. No text.

### F3 — Trailer

| | |
|---|---|
| **Target** | `public/stitch/shows/freedom/03.jpg` |
| **Aspect** | 16:9 |

**Prompt**

Wide photoreal Freedom spectacle: ensemble leap and dance, East African cast, strong geometry of bodies, warm theatrical light and atmospheric gels, haze. Showreel freeze. No text.

---

## Shows — Afrikan Warriors Live (regular-show)

### L1 — Hero *(optional upgrade of extract-05)*

| | |
|---|---|
| **Target** | `public/stitch/shows/regular-show/01.jpg` |
| **Aspect** | 16:9 |
| **Reference** | `pdf-extract-05.jpg` |

**Prompt**

Wide 16:9 photoreal high-energy core act: mid-air toss / tumble with live band behind, East African acrobats, teal or dark performance trousers, stage mats, rustic drapes, warm overhead spots. Original Afrikan Warriors Live energy. No text.

---

## Gallery (`/gallery`)

### G1 — Human pyramid

| | |
|---|---|
| **Target** | `public/stitch/gallery/01.jpg` |
| **Aspect** | 16:9 |
| **Reference** | `pdf-extract-01.jpg` |

**Prompt**

Wide gallery still: human pyramid formation, full company, teal costumes, drums, purple-magenta haze, side lanterns. Photoreal theatre. No text.

### G2 — Ancestral / cultural

| | |
|---|---|
| **Target** | `public/stitch/gallery/02.jpg` |
| **Aspect** | 16:9 |
| **Reference** | `pdf-extract-04.jpg` |

**Prompt**

Wide gallery still: traditional dance ensemble, vibrant wraps, beads, scenic or draped backdrop, warm gold light. No text.

### G3 — Global arena / touring

| | |
|---|---|
| **Target** | `public/stitch/gallery/03.jpg` |
| **Aspect** | 16:9 |

**Prompt**

Wide photoreal touring-stage still: large venue or circus-theatre scale, Afrikan Warriors ensemble mid-act, truss lights, haze, sense of international touring. No logos or text.

### G4 — Stage spectacle

| | |
|---|---|
| **Target** | `public/stitch/gallery/04.jpg` |
| **Aspect** | 16:9 |
| **Reference** | `pdf-extract-05.jpg` |

**Prompt**

Wide spectacle: acrobatics + live musicians together, mats, drums, warm spots, black wings. No text.

### G5 — Sentinel / portrait energy

| | |
|---|---|
| **Target** | `public/stitch/gallery/05.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical powerful sentinel portrait: East African performer on stage, ornate headpiece or bead collar, strong stance, warm rim light, haze. Theatre still. No text.

---

## Workshops

### W1 — Hero

| | |
|---|---|
| **Target** | `public/stitch/workshops/01.jpg` |
| **Aspect** | 16:9 |

**Prompt**

Wide photoreal workshop moment that still feels premium: East African Afrikan Warriors artists demonstrating acrobatics or dance to a small group in a theatre rehearsal space or hall, warm practical light, mats, drums nearby — educational energy without looking like a stock corporate photo. No text, no logos on clothing.

### W2 — Acro session

| | |
|---|---|
| **Target** | `public/stitch/workshops/02.jpg` |
| **Aspect** | 3:4 |

**Prompt**

Vertical photoreal hands-on acro coaching: instructor spotting a student mid-skill, mats, focused faces, warm light. Same company aesthetic. No text.

---

## Team (`/team`) — 14 portraits

Generate a consistent set. Same lighting and backdrop language for all.

**Shared portrait lock:** Photoreal three-quarter or half-body portrait of an East African Afrikan Warriors artist on a dark stage or charcoal backdrop with a single warm amber key and soft side fill, slight haze optional, performance costume (teal trousers / patterned wrap / beads as fits role). Natural skin texture. Serious or warm professional expression — not stock smile. No text. Aspect **3:4**.

| # | Target | Suggested role cue in prompt |
|---|--------|------------------------------|
| 01 | `public/stitch/team/01.jpg` | Founder / director energy, elder presence |
| 02 | `public/stitch/team/02.jpg` | Assistant director / senior artist |
| 03 | `public/stitch/team/03.jpg` | Senior acrobat |
| 04 | `public/stitch/team/04.jpg` | Actor / comedian energy |
| 05 | `public/stitch/team/05.jpg` | Female acrobat / dancer |
| 06 | `public/stitch/team/06.jpg` | Male tumbler |
| 07 | `public/stitch/team/07.jpg` | Musician / percussionist |
| 08 | `public/stitch/team/08.jpg` | Female dancer |
| 09 | `public/stitch/team/09.jpg` | Contortion / limbo specialist |
| 10 | `public/stitch/team/10.jpg` | Chinese pole / strength |
| 11 | `public/stitch/team/11.jpg` | Young athletic acrobat |
| 12 | `public/stitch/team/12.jpg` | Ensemble artist |
| 13 | `public/stitch/team/13.jpg` | Ensemble artist |
| 14 | `public/stitch/team/14.jpg` | Ensemble artist |

**Prompt template (vary role cue):**

Photoreal 3:4 portrait of an East African adult Afrikan Warriors [ROLE], athletic, on dark theatrical background, warm amber key light, subtle stage haze, costume matching live PDF production stills (teal satin trousers or patterned wrap, beads). Skin texture and fabric detail. Professional performance portrait. No text, no logos.

---

## Checklist summary

| Group | Count to generate | Priority |
|-------|-------------------|----------|
| Home H2–H3 | 2 | High |
| Acts A1–A9 | 9 (A2 optional) | High |
| Tokomile T2–T3 | 2 (+ T1 optional) | High |
| Rizombe R2–R7 | 6 (+ R1 optional) | High |
| African Pirate P1–P2 | 2 | High |
| Freedom F2–F3 | 2 (+ F1 optional) | Medium |
| Live L1 | optional | Medium |
| Gallery G1–G5 | 5 | Medium |
| Workshops W1–W2 | 2 | Medium |
| Team 01–14 | 14 | Medium |

**Rough total:** ~40–46 new stills if regenerating everything still on stitch; fewer if keeping PDF extracts as heroes.

---

## After generation

1. Replace files under `public/stitch/...` (same names) **or** drop into `public/higgsfield/...` and update [`src/constants/images.json`](../../src/constants/images.json).
2. Visually compare against `public/client-updates/pdf-extract-*.jpg` — reject anything that looks like empty black studio or fashion void.
3. Note accepted paths in [`docs/AW_Web_updates_requirements.md`](../AW_Web_updates_requirements.md) Assets section if shipping a client update.
