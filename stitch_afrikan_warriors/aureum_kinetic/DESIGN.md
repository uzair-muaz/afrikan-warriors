---
name: Aureum Kinetic
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#d0cecd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Anybody
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style
The design system embodies "Cinematic Heritage"—a fusion of high-performance athleticism and ancestral prestige. It is designed for a premium live entertainment audience, evoking an emotional response of awe, adrenaline, and cultural pride.

The style is **Luxury Minimalist with Tribal Brutalist accents**. It utilizes heavy whitespace (or "blackspace") to create a stage-like atmosphere where content is treated as a performer under a spotlight. Visuals are grounded in geometric precision, utilizing thin, razor-sharp gold lines and high-contrast photography to achieve a dramatic, high-stakes aesthetic similar to premium sports or global stage productions.

## Colors
The palette is centered on a "Void and Radiance" philosophy. 

- **Primary (Yellow Gold):** Used sparingly for critical calls to action, active states, and decorative line art. It should feel like light piercing through darkness.
- **Surface (Matte Black):** The #0B0B0B background provides the "infinite stage."
- **Container (Charcoal):** #171717 is used for subtle depth separation, defining cards and navigation bars.
- **Typography:** Headlines utilize the primary Gold or pure White for maximum impact, while body text remains a slightly muted Neutral to ensure legibility without breaking the cinematic immersion.

## Typography
Typography is the primary driver of the brand's athletic energy. 

**Anybody** is used for massive, high-impact headings, often set in Italics or Ultra-Bold weights to suggest movement. **Hanken Grotesk** provides a clean, modern contrast for long-form content, maintaining a high-fashion editorial feel. **Space Grotesk** is reserved for metadata and "Tech-Tribal" labels, providing a precise, technical edge to the heritage-focused narrative. Gold text should be used strictly for `label-caps` or specific emphasized words within headlines to act as a "highlight."

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain the feel of a framed cinematic shot. We use a 12-column grid with generous outer margins to pull the eye toward the center.

- **Vertical Rhythm:** Large "Stack" increments (48px, 80px) are used between sections to ensure the UI feels uncrowded and premium.
- **Mobile Adaptivity:** On mobile, the 12-column grid collapses to 4 columns. Hero sections should transition from horizontal layouts to vertical stacks with center-aligned typography to maintain the "iconic" presence of the subjects.
- **Geometric Alignment:** Use strict edge-alignment for images and borders to mimic the precision of tribal patterns.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Luminous Accents** rather than traditional shadows.

1.  **Base (Level 0):** #0B0B0B (The Stage).
2.  **Surface (Level 1):** #171717 (The Platform). Subtle containers for cards.
3.  **Highlights:** Instead of drop shadows, use 1px solid borders in #D4AF37 at 20% opacity to define edges.
4.  **The Glow:** For active elements or key buttons, apply a "Gold Aura"—a very soft, diffused outer glow (20px-40px blur) using the `accent_glow` variable. This creates a sense of light emitting from the element itself.

## Shapes
The shape language is **Sharp and Aggressive**. 

Elements utilize 0px border-radii to convey strength, precision, and a modern architectural feel. Decorative elements should incorporate 45-degree chamfered corners or diagonal slashes, nodding to spearheads and traditional geometric carvings. Icons should be thin-stroke (1px to 1.5px) and strictly geometric.

## Components
- **Primary Buttons:** High-contrast Gold (#D4AF37) fill with black text. Sharp corners. On hover, the button should trigger a subtle `accent_glow` and an inner 1px white border.
- **Ghost Buttons:** 1px Gold border, transparent background. Text in Gold.
- **Cards:** Background #171717 with 0px radius. Use a 1px border on the top or left edge in Gold to denote hierarchy.
- **Input Fields:** Bottom-border only (2px Gold). No background fill or a very dark #050505 fill.
- **Progress Indicators / Sliders:** Use ultra-thin 1px tracks with a bright Gold thumb or fill.
- **Tribal Accents:** Use a component called the "Heritage Divider"—a thin 1px horizontal line that terminates in a small geometric diamond or triangle at one end.
- **Media Containers:** Images should always feature a slight vignette to blend the edges of the photography into the #0B0B0B background.