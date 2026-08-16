# AQUA Modernization — Revision 02

## Requested refinements implemented

1. Slide-out navigation is vertically scrollable with sticky top/close controls and a sticky contact row.
2. Added Sadman Bin Rashid — Assistant Manager, Brands & Communications — using the supplied portrait.
3. Removed visible Insights/blog navigation and replaced it with a dedicated Testimonials / Client Reviews route. `/blog` remains only as a backward-compatible redirect.
4. Corporate Summit is last in the shared project dataset, which makes it last on both the homepage portfolio and Work page (including the Events filter).
5. Reduced oversized empty spacing across homepage sections, destination-page heroes, Work grids, service rows, contact pages and footer. The Work page stagger was removed to keep the grid visually organized.
6. SEO/AEO strengthened with route metadata, dynamic canonicals, Organization + WebSite JSON-LD, FAQPage JSON-LD, sitemap updates, descriptive alt text and stronger internal links.
7. Replaced Nawaz's previous team portrait with the supplied image and updated the displayed name to Nawaz Sharief Khan.

## Validation note

The project preserves the existing dependency lockfile. If dependencies are not installed locally, run `npm install`, then `npm run lint` and `npm run build` before deployment.

## Milestone 03 refinements
- Renamed the primary navigation label from **Index** to **Home**.
- Reworked the menu transition so the currently viewed page remains visible and scales/slides to the left instead of disappearing into the black stage. The transform origin is calculated from the user's current viewport position, preventing large pages from visually jumping when the menu opens.
- The homepage Team section now includes every team member in a continuous right-to-left automatic carousel. It pauses on hover/focus and becomes a manual horizontal rail when reduced motion is enabled.
- The full `/team` destination remains a static editorial grid for easy reading.

## Milestone 04 — Persistent corner navigation
- AQUA Home control now remains fixed at the viewport top-left on every route.
- Menu control now remains fixed at the viewport top-right on every route.
- On scroll, both controls morph into translucent dark-glass pills with backdrop blur, keeping photography visible while preserving contrast.
- Home and Menu text labels reveal in the docked state on desktop; mobile retains compact icon-only controls.
- Header was moved outside the transformable page wrapper so the controls are not scaled or displaced by the spatial menu animation.
- Clicking the AQUA Home control while already on `/` smoothly returns to the top through Lenis.

## Milestone 05 — Minimal Persistent Corner Navigation
- Removed the floating pill backgrounds, borders and visible HOME/MENU labels from the persistent corner navigation.
- Top-left now shows only the canonical AQUA mark and remains a Home control.
- Top-right now shows only the menu bars.
- Both controls use `mix-blend-mode: difference` with white artwork so they automatically invert against light/dark/colour content and remain visible while scrolling.
- Invisible interaction areas remain comfortably sized for accessibility; keyboard focus rings appear only during keyboard navigation.

## Milestone 06 — Fixed black corner controls
- Replaced the top-left corner mark with the supplied black AQUA logo, processed to transparent PNG for web use.
- Menu bars are now fixed black with no blend-mode inversion.
- Kept the minimal no-pill/no-label corner navigation and existing accessibility hit areas.

## Final content / SEO / AEO refinements — 2026-08-16

- Preserved the minimal fixed black AQUA corner navigation from Milestone 06: AQ logo at top-left and black menu bars at top-right.
- Removed the Four-Layer / Our Approach section from the homepage.
- Moved the Four-Layer system into `/about`, between the core About content and Why AQUA.
- Rebuilt the homepage Client Reviews section around six named client-work summaries: JTI, MARKS Full Cream Milk Powder, BIPPA, Huawei, Unilever and ACI Limited.
- Rebuilt `/testimonials` as an answer-first Client Reviews & Testimonials page with question-style headings, concise semantic answers and service tags for stronger AEO readability.
- Did not mark agency-written summaries as schema.org `Review` objects or invent named spokesperson quotations. Direct client quotes should only be published after client approval.
- Added `CollectionPage` + `ItemList` structured data for the testimonials page.
- Updated the AQUA office location throughout the Contact page, Footer and Organization structured data to Level 5, Flat-B, House 15, Road 7, Block C, Niketan, Gulshan, Dhaka 1212, Bangladesh.
- Added the supplied Google Maps location, office `Place`, geo coordinates, full `PostalAddress`, semantic service topics (`knowsAbout`) and updated contact-page structured data.
- Updated Home/About/Testimonials/Contact metadata and sitemap last-modified dates.
- Source-level checks completed for JSON-LD, XML sitemap, local import resolution, Approach placement, office-map references and minimal black corner navigation.
- A clean npm production build was not executed in this environment because package installation could not complete within the available sandbox network/runtime constraints. Run `npm ci`, `npm run lint`, and `npm run build` locally before deployment.
