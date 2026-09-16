# Afrikan Warriors — Web Updates Requirements Tracker

**Source:** Client PDF `AW_Web_updates.pdf` (12 pages)  
**Purpose:** Exact client requirements vs what was implemented on the site.  
**Status legend:** `Pending` | `Done` | `Partial` | `Deferred`

---

## Priority batch (client’s six “especially prioritize” items)

| # | Priority item | Status |
|---|---------------|--------|
| 1 | Cinematic homepage hero | Done |
| 2 | Remove packages from homepage | Done |
| 3 | Rename Regular Show | Done |
| 4 | Redesign five-show gallery | Done |
| 5 | Make Tokomile the flagship production | Done |
| 6 | Professional promoter/venue booking area | Done |

---

## Assets

| Asset | Status | Notes |
|-------|--------|-------|
| PDF-extracted JPEGs | Done | Six JPEGs live in `public/media/v1/source/` (`01-pyramid` … `06-freedom-vocal`). Wired via `src/constants/images.json`. |
| Hero background video | Deferred | No video file supplied; cinematic still + slow zoom + Watch Showreel overlay (`youtubeVideos.showreel`). |
| Organisation logos for credits | Deferred | No logo assets supplied; black/gold text marquee in `CreditsBar`. |

---

## Requirements (1–14)

### 1. Make the opening screen much more cinematic

**Exact requirement:** Full-screen cinematic first screen. Simple wording: AFRIKAN WARRIORS / THE SPIRIT OF AFRICA. / THE ENERGY OF LIVE PERFORMANCE. / African Acrobatics • Theatre • Dance • Music • Culture. CTAs: EXPLORE OUR SHOWS, BOOK AFRIKAN WARRIORS. Subtle animated line: 30+ YEARS • 5,000+ PERFORMANCES • INTERNATIONAL TOURING • TANZANIA → THE WORLD. Prefer full-screen background video (5–8s clips); otherwise high-quality still. Add ▶ WATCH SHOWREEL.

**Implementation status:** Done

**What we implemented:**
- [`src/features/home/components/HeroSection.tsx`](../src/features/home/components/HeroSection.tsx) — brand-first hero with exact copy lines, three CTAs including `VideoLightbox` Watch Showreel, stats line.
- Hero image from PDF extract-01 via `images.json` → `home[0]`.
- Showreel uses existing YouTube interview ID until a dedicated showreel is supplied (`src/constants/media.ts`).

**Notes / deferred:** Full-screen montage video deferred (no asset).

---

### 2. Five shows should become the centrepiece

**Exact requirement:** Large cinematic show gallery (not stacked descriptions). Five large visual cards with short taglines. Hover: gentle image zoom + Discover the Show →.

**Implementation status:** Done

**What we implemented:**
- [`src/features/home/components/FeaturedShows.tsx`](../src/features/home/components/FeaturedShows.tsx) — full-bleed Tokomile flagship block + large visual cards for other four shows; hover zoom + Discover the Show →.
- Taglines updated in [`src/constants/shows.ts`](../src/constants/shows.ts).

**Notes / deferred:** —

---

### 3. Rename “Regular Show”

**Exact requirement:** Rename Regular Show to AFRIKAN WARRIORS LIVE (preferred). Five productions: TOKOMILE | RIZOMBE KING | AFRICAN PIRATE | FREEDOM | AFRIKAN WARRIORS LIVE.

**Implementation status:** Done

**What we implemented:**
- Display title **AFRIKAN WARRIORS LIVE** in `featuredShows`, nav dropdown, and [`src/app/shows/regular-show/page.tsx`](../src/app/shows/regular-show/page.tsx).
- Route slug kept as `/shows/regular-show` for link stability.

**Notes / deferred:** URL slug intentionally unchanged.

---

### 4. Remove packages from the homepage

**Exact requirement:** Remove Cool Silver / Warm Bronze / Hot Gold from homepage. Replace with: “Every performance is different…” + DISCUSS YOUR EVENT →. Keep tiers for private quoting only.

**Implementation status:** Done

**What we implemented:**
- Removed `PackagesTeaser` from [`src/app/page.tsx`](../src/app/page.tsx).
- Added [`ExperienceDiscuss.tsx`](../src/features/home/components/ExperienceDiscuss.tsx) with brief copy + Discuss Your Event → `#inquiry`.
- Packages removed from main nav; `/packages` redirects to `/#inquiry`.
- [`src/constants/packages.ts`](../src/constants/packages.ts) retained for private quoting / workshops form options.

**Notes / deferred:** —

---

### 5. Turn achievements into a powerful visual strip

**Exact requirement:** Clean black/gold strip with: Britain’s Got Talent Semi-Finalists; Australia’s Got Talent Semi-Finalists; Circus Vegas (UK & Ireland Tour); American Circus (UK & Ireland Tour); Planet Circus (Irish Tour); Durham Festival Street Theatre Champions; Le Cirque Roger Lanzac World Tour; 30+ Years International Entertainment. Logos if rights/assets available.

**Implementation status:** Done

**What we implemented:**
- Expanded `majorCredits` in [`src/constants/home.ts`](../src/constants/home.ts) to match the brief list.
- [`CreditsBar.tsx`](../src/features/home/components/CreditsBar.tsx) — `bg-void` black/gold marquee treatment.

**Notes / deferred:** Logos deferred (no assets/rights).

---

### 6. Make Tokomile look like the flagship production

**Exact requirement:** Label OUR FLAGSHIP THEATRE PRODUCTION. TOKOMILE. Welcome to the Kingdom of Zaramu. Large cinematic photo/video. Meta: 80 MINUTES • THEATRE • LIVE MUSIC • ACROBATICS • DANCE • DRAMA • FAMILY ENTERTAINMENT. CTA: ENTER THE KINGDOM →.

**Implementation status:** Done

**What we implemented:**
- Home flagship block in `FeaturedShows` using `tokomileFlagship` constants.
- Tokomile show page hero updated with flagship label, kingdom welcome, meta strip, Watch Tokomile Trailer CTA.
- Hero image from PDF extract-04.

**Notes / deferred:** —

---

### 7. Add a “Watch Trailer” button everywhere

**Exact requirement:** ▶ WATCH SHOWREEL on homepage hero; ▶ WATCH TOKOMILE TRAILER / ▶ WATCH TRAILER on show pages. Elegant full-screen video overlay preferred over leaving the site.

**Implementation status:** Partial

**What we implemented:**
- New [`VideoLightbox.tsx`](../src/components/ui/VideoLightbox.tsx) — full-screen overlay with YouTube embed.
- Hero Watch Showreel; Tokomile Watch Tokomile Trailer (real Tokomile YouTube ID).
- Rizombe, Freedom, African Pirate, Afrikan Warriors Live — Watch Trailer buttons/overlays wired.
- [`TrailerPlaceholder.tsx`](../src/features/shows/components/TrailerPlaceholder.tsx) supports optional `videoId` lightbox.

**Notes / deferred:** Dedicated trailers for Rizombe / Freedom / Pirate / Live not supplied — currently open the shared showreel/interview ID. Swap IDs in `media.ts` when available.

---

### 8. Change “Our Acts” into a visual experience

**Exact requirement:** Horizontal visual gallery: HUMAN PYRAMIDS | FIRE LIMBO | HOOP DIVING | HAT JUGGLING | TUMBLING | CHINESE POLE | CHAIR BALANCE | LIVE PERCUSSION | TRADITIONAL DANCE. Hover → act name. Short looping video or powerful photograph.

**Implementation status:** Done

**What we implemented:**
- Reordered/renamed acts in [`src/constants/acts.ts`](../src/constants/acts.ts) to match brief list (including Live Percussion + Traditional Dance).
- [`ActsTeaser.tsx`](../src/features/home/components/ActsTeaser.tsx) — horizontal scroll gallery; hover reveals act name + image zoom.
- Fire Limbo uses PDF fire performance still (extract-03).

**Notes / deferred:** Looping act videos not supplied — photographs only.

---

### 9. History section as animated journey

**Exact requirement:** Animated journey (not conventional timeline): Dar es Salaam → United Kingdom → Britain’s Got Talent → Australia → European Touring / UAE / Kuwait / Qatar / Bahrain → Afrikan Warriors Today. Photos as visitor scrolls.

**Implementation status:** Done

**What we implemented:**
- Condensed `storyTimeline` to the journey stops above (Gulf region noted in European Touring body).
- [`StoryTimeline.tsx`](../src/features/home/components/StoryTimeline.tsx) — photo + copy journey rows with hover zoom; path strip at top.
- About page keeps vertical `line` variant of the same data.

**Notes / deferred:** Full map/animation not required beyond scroll journey + photos.

---

### 10. Add a “For Promoters & Venues” section

**Exact requirement:** BOOKING AFRIKAN WARRIORS for Festivals, Theatres, Circuses, Theme Parks, Corporate Events, Television, Private Events. Links: Download Press Kit, Technical Requirements, Risk & Safety Information, Request Availability.

**Implementation status:** Done

**What we implemented:**
- New homepage [`ForPromotersSection.tsx`](../src/features/home/components/ForPromotersSection.tsx) (`#promoters`) with venue types + four action links.
- Existing About `#promoters` asset checklist retained.
- Nav includes For Promoters → `/#promoters`.

**Notes / deferred:** Press kit / tech / risk links currently point to About promoters section until downloadable files are provided.

---

### 11. Upgrade the booking form

**Exact requirement:** Short booking journey: show interest (Tokomile / Rizombe King / African Pirate / Freedom / Afrikan Warriors Live / Not Sure) → event type → date → location → expected audience → indoor/outdoor → tell us about event → contact details → REQUEST AVAILABILITY.

**Implementation status:** Done

**What we implemented:**
- Multi-step home variant in [`InquiryForm.tsx`](../src/features/inquiry/InquiryForm.tsx).
- Server action reads new fields in [`inquiry.ts`](../src/lib/actions/inquiry.ts).
- [`HomeInquirySection.tsx`](../src/features/home/components/HomeInquirySection.tsx) retitled Request Availability.

**Notes / deferred:** Form still validates name/email only and does not persist to an external CRM (same as before).

---

### 12. Controlled movement

**Exact requirement:** Premium motion only: slow image zoom, text fade-up, smooth scrolling, cinematic page transitions, show cards reacting to mouse, counters, short silent background video, parallax, elegant hover. Not flashy.

**Implementation status:** Partial

**What we implemented:**
- Extended existing CSS: `hover-media` / `hover-media-slow`, new `animate-fade-up`, show-card hover reveals, marquees, page-enter, smooth scroll (existing).
- No new motion library.

**Notes / deferred:** Mouse-tilt parallax, animated counters, and background video not added (would need assets / more scope).

---

### 13. Simplify the navigation

**Exact requirement:** Main nav: SHOWS | ABOUT | MEDIA | WORKSHOPS | FOR PROMOTERS | CONTACT. BOOK US as distinctive button on the right. Acts, AW-Team, FAQ, Press Kit live in sections/footer.

**Implementation status:** Done

**What we implemented:**
- [`src/constants/nav.ts`](../src/constants/nav.ts) simplified to the six items + Book Us in Header (visible from `lg`).
- Acts, AW-Team, FAQ, Press Kit in footer.

**Notes / deferred:** —

---

### 14. Verify dates

**Exact requirement:** Current history says 2016 Street Theatre Champions; prior client info said 2015 Durham Festival. Verify every year/award/tour name before launch.

**Implementation status:** Done

**What we implemented:**
- Client confirmed the award year is **2015**. Live copy in the journey timeline now reads Durham Street Theatre Champions (2015).

**Notes / deferred:** —

---

## Overall direction

**Exact requirement:** Think Africa + Theatre + Cinema + International Touring — not Acrobatics + Event Entertainment Website. Visitor should feel this is an established African production company bookable for major theatre, festival, or international event.

**Implementation status:** Done

**What we implemented:** Homepage hierarchy now leads with cinematic hero → credits → shows (Tokomile flagship centrepiece) → experience discuss (no packages) → acts gallery → journey → promoters → structured booking. Visual language uses client performance photography from the PDF.

**Notes / deferred:** —

---

## File change summary

| Area | Files |
|------|--------|
| Tracker | `docs/AW_Web_updates_requirements.md` |
| Extracted images | `public/media/v1/`, `src/constants/images.json` |
| Home | `src/app/page.tsx`, `src/features/home/components/*` |
| Content | `src/constants/{home,shows,acts,nav,media}.ts` |
| Booking | `src/features/inquiry/InquiryForm.tsx`, `src/lib/actions/inquiry.ts` |
| Video overlay | `src/components/ui/VideoLightbox.tsx`, `TrailerPlaceholder.tsx` |
| Show pages | `tokomile`, `regular-show`, `rizombe-king`, `freedom`, `african-pirate` |
| Chrome | `Header.tsx`, `nav.ts`, `globals.css` |
| Packages redirect | `src/app/packages/page.tsx` → `/#inquiry` |
