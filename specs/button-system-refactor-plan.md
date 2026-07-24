# Button System Audit and Enterprise Refactor Plan

Date: 2026-06-11

## Phase 1: Complete Button Inventory

A full machine-generated inventory is available in:
- button-inventory-raw.md

Coverage includes:
- Fluent UI Button usages
- native button usages
- links styled as button actions
- CTA, hero, marketplace, card action, navigation, filter, tab, form, and icon button patterns

High-level inventory totals:
- Total button-like implementations: 130+ matched button signals
- Fluent UI Button instances: ~90
- native button elements: ~20
- button-like links: ~20
- files with button-like implementations: 40+

Representative inventory table (canonical action-level entries):

| File | Button Purpose | Current Implementation | Reusable? |
|---|---|---|---|
| src/components/Hero.tsx | Hero primary CTA | PrimaryButton (was Fluent Button primary large) | Yes |
| src/components/Hero.tsx | Hero secondary CTA | SecondaryButton (was Fluent Button outline large) | Yes |
| src/components/HeroV2.tsx | Hero CTA pair | Fluent Button primary + secondary + maq-equal-cta | Partial |
| src/components/CTA.tsx | Section CTA | PrimaryButton (was Fluent Button primary large) | Yes |
| src/components/Header.tsx | Mega-menu trigger | Fluent Button subtle with chevron icon | Partial |
| src/components/Header.tsx | Mobile close | native button with custom class | No |
| src/components/Announcement2.tsx | Dismiss action | Fluent Button subtle icon-only | Partial |
| src/components/events/ConferenceEventPage.tsx | Register, read more, contact, case studies | Fluent Button primary/subtle/outline mixed | Partial |
| src/pages/AboutCareers.tsx | Job accordion toggle | native button | No |
| src/pages/AboutCareers.tsx | Apply and view posting actions | Fluent Button primary/subtle | Partial |
| src/pages/AboutCareers.tsx | Region tab filter | native button tab style | No |
| src/pages/AboutNews.tsx | Retry, read article | Fluent Button subtle | Partial |
| src/pages/AboutNews.tsx | Pagination prev/page/next | native button | No |
| src/pages/AboutEvents.tsx | Load previous / show all / show less | Fluent Button subtle | Partial |
| src/pages/InsightsBestPracticeGuides.tsx | Show more/less | Fluent Button subtle | Partial |
| src/pages/InsightsCaseStudies.tsx | Show more/less | Fluent Button subtle | Partial |
| src/pages/InsightsPowerBICustomVisualGuide.tsx | Visual chooser, show more/less, join community | Fluent Button outline/subtle/primary | Partial |
| src/pages/InsightsCustomVisualDetail.tsx | Open/view/compare actions | Fluent Button primary/outline | Partial |
| src/pages/PartnershipMicrosoft.tsx | Learn more/read story | Fluent Button primary with icon-after | Partial |
| src/pages/ProductCertyFAST.tsx | Contact + marketplace pair | Fluent Button primary + outline + maq-equal-cta | Partial |
| src/pages/ProductEmbedFAST.tsx | Contact + marketplace pair, feature CTA | Fluent Button primary/outline/medium | Partial |
| src/pages/ProductLoadFAST.tsx | Contact + marketplace pair, feature CTA | Fluent Button primary/outline/medium | Partial |
| src/pages/ProductFabricAdminAgent.tsx | Contact + marketplace + learn more | Fluent Button primary/outline with icon variants | Partial |
| src/pages/ProductMigrateFAST.tsx | Contact CTA | Fluent Button primary | Partial |
| src/pages/ProductsHome.tsx | Explore product action | Fluent Button primary | Partial |
| src/pages/ServiceBusinessApps.tsx | Capability + related service action | Fluent Button primary/secondary + native button | Partial |
| src/pages/ServiceWorkplaceTransformation.tsx | Capability + related service action | Fluent Button primary/outline + native button | Partial |
| src/pages/TechCon365.tsx | Register/session/read case studies/contact | Fluent Button primary/subtle/outline | Partial |
| src/pages/AboutPrivacyStatement.tsx | Contact support | PrimaryButton (was Fluent Button primary) | Yes |

## Phase 2: Group Similar Buttons into Variants

### Primary Button
Purpose:
- Main CTA (Contact Us, Register, Explore, Book demo)

Why grouped:
- Most use primary prominence, similar dimensions, and same intent level.

Differences observed:
- size large vs medium
- icon before/after variation
- sometimes link mode, sometimes onClick mode

Decision:
- One component with props: variant=primary, size, href/onClick, iconBefore/iconAfter.

### Secondary Button
Purpose:
- Supporting CTA paired with primary action.

Why grouped:
- Similar border-first visual treatment, lower emphasis than primary.

Differences observed:
- outline vs secondary appearances were mixed
- custom class maq-secondary-btn used in places without centralized definition

Decision:
- One component with unified secondary visual token set.

### Tertiary Button
Purpose:
- Outlined low-to-medium emphasis action where text button is too weak.

Why grouped:
- Existing outline-style patterns can be standardized.

Differences observed:
- outline hover/focus behavior not always consistent.

Decision:
- Dedicated variant with consistent border and hover states.

### Text Button
Purpose:
- Low-emphasis actions (show more/show less, read more style actions).

Why grouped:
- High frequency in insights and content-heavy pages.

Differences observed:
- subtle buttons used as text-like controls with inconsistent padding.

Decision:
- One text variant with compact size default.

### Card Button
Purpose:
- Buttons inside card components.

Why grouped:
- Card actions require stronger border and spacing consistency.

Differences observed:
- repeated primary/secondary calls in service and product capability cards.

Decision:
- One card variant with card-appropriate radius and spacing.

### Icon Button
Purpose:
- Dismiss, close, nav chevrons, icon-only controls.

Why grouped:
- Icon-only controls need strict width/height and accessible labels.

Differences observed:
- native close buttons and subtle icon buttons mixed.

Decision:
- One icon variant requiring ariaLabel.

## Phase 3: Unified Component Architecture

Adopted architecture:

- src/components/buttons/Button.tsx
- src/components/buttons/PrimaryButton.tsx
- src/components/buttons/SecondaryButton.tsx
- src/components/buttons/TextButton.tsx
- src/components/buttons/CardButton.tsx
- src/components/buttons/IconButton.tsx
- src/components/buttons/tokens.ts
- src/components/buttons/index.ts

Why this architecture:
- Single polymorphic base component minimizes style drift.
- Thin wrappers preserve semantic intent and simplify migration.
- Supports both href and onClick without duplicate button definitions.
- Enables enterprise token-driven state control.

## Phase 4: Actual Refactor Code

Implemented now:
- Shared token set in src/components/buttons/tokens.ts
- Enterprise base button in src/components/buttons/Button.tsx
- Variant wrappers and exports in src/components/buttons/*
- Backward-compatible bridge in src/components/MaqPrimaryButton.tsx
- Initial migration in:
  - src/components/Hero.tsx
  - src/components/CTA.tsx
  - src/pages/AboutPrivacyStatement.tsx

### TypeScript API

Button props support:
- variant
- size
- href / target / rel
- onClick
- iconBefore / iconAfter
- disabled
- fullWidth
- ariaLabel

### Design Tokens

From src/components/buttons/tokens.ts:
- Small: height 32, padding-inline 14, radius 8, font 13
- Medium: height 36, padding-inline 16, radius 8, font 14
- Large: height 40, padding-inline 18, radius 8, font 14
- Focus ring: 0 0 0 3px rgba(200, 16, 46, 0.22)
- Motion transition: background/color/border/shadow/transform

States implemented in base system:
- hover
- active
- focus-visible
- disabled

## Phase 5: Codebase Migration Plan (File-by-File)

| File | Current Button | Replace With | Complexity |
|---|---|---|---|
| src/components/HeroV2.tsx | Fluent Button primary/secondary pair | PrimaryButton + SecondaryButton | Low |
| src/components/Header.tsx | subtle menu trigger + native close | IconButton for icon-only controls, TextButton/SecondaryButton for nav controls | Medium |
| src/components/Announcement2.tsx | subtle icon dismiss | IconButton | Low |
| src/components/events/ConferenceEventPage.tsx | mixed primary/subtle/outline button set | PrimaryButton + TextButton + SecondaryButton | Medium |
| src/components/insights/GuideArticle.tsx | primary CTA | PrimaryButton | Low |
| src/components/insights/InsightsFilterBar.tsx | subtle filter chip buttons | TextButton or Button variant text with active class | Medium |
| src/pages/AboutCareers.tsx | mixed native + Fluent buttons | TextButton/IconButton/PrimaryButton; replace native tabs with shared filter buttons | High |
| src/pages/AboutNews.tsx | subtle + native pagination buttons | TextButton for actions + shared PaginationButton pattern | High |
| src/pages/AboutEvents.tsx | subtle load/toggle buttons | TextButton | Low |
| src/pages/Contact.tsx | Fluent primary for directions | PrimaryButton | Low |
| src/pages/InsightsBestPracticeGuides.tsx | subtle show more/less | TextButton | Low |
| src/pages/InsightsCaseStudies.tsx | subtle show more/less | TextButton | Low |
| src/pages/InsightsCustomVisualDetail.tsx | primary + outline mix | PrimaryButton + SecondaryButton | Medium |
| src/pages/InsightsPowerBICustomVisualGuide.tsx | outline/subtle/primary mix | SecondaryButton + TextButton + PrimaryButton | Medium |
| src/pages/PartnershipMicrosoft.tsx | primary icon-after actions | PrimaryButton iconAfter | Low |
| src/pages/ProductAIDataLens.tsx | primary CTA | PrimaryButton | Low |
| src/pages/ProductCertyFAST.tsx | primary + outline pair | PrimaryButton + SecondaryButton | Low |
| src/pages/ProductEmbedFAST.tsx | primary + outline + medium button | PrimaryButton + SecondaryButton + CardButton | Medium |
| src/pages/ProductFabricAdminAgent.tsx | mixed CTA patterns | PrimaryButton + SecondaryButton + CardButton | Medium |
| src/pages/ProductLoadFAST.tsx | primary + outline + medium button | PrimaryButton + SecondaryButton + CardButton | Medium |
| src/pages/ProductMigrateFAST.tsx | primary CTA | PrimaryButton | Low |
| src/pages/ProductsHome.tsx | primary explore | PrimaryButton | Low |
| src/pages/ServiceBusinessApps.tsx | primary/secondary + native buttons | CardButton + SecondaryButton + TextButton | High |
| src/pages/ServiceWorkplaceTransformation.tsx | primary/outline + native buttons | CardButton + SecondaryButton + TextButton | High |
| src/pages/TechCon365.tsx | event mixed button patterns | PrimaryButton + SecondaryButton + TextButton | Medium |

## Phase 6: Duplication Elimination Map

### Duplicate style usage locations

Current locations:
- Hero/Product/Event CTA pairs using repeated primary + outline large patterns
  - src/components/HeroV2.tsx
  - src/components/events/ConferenceEventPage.tsx
  - src/pages/ProductCertyFAST.tsx
  - src/pages/ProductEmbedFAST.tsx
  - src/pages/ProductLoadFAST.tsx
  - src/pages/ProductFabricAdminAgent.tsx
  - src/pages/TechCon365.tsx

Refactor into:
- Shared component: PrimaryButton + SecondaryButton
- Shared tokens: src/components/buttons/tokens.ts

Current locations:
- Subtle text-action toggles (show more/show less/load previous)
  - src/pages/InsightsBestPracticeGuides.tsx
  - src/pages/InsightsCaseStudies.tsx
  - src/pages/InsightsPowerBICustomVisualGuide.tsx
  - src/pages/AboutEvents.tsx

Refactor into:
- Shared component: TextButton
- Shared state styling: text variant in src/components/buttons/Button.tsx

Current locations:
- native pagination/tab buttons
  - src/pages/AboutNews.tsx
  - src/pages/AboutCareers.tsx
  - src/pages/ServiceBusinessApps.tsx
  - src/pages/ServiceWorkplaceTransformation.tsx

Refactor into:
- Shared component: TextButton or dedicated PaginationButton wrapper on top of Button
- Shared style token: button size tokens small/medium

Current locations:
- icon-only dismiss/close implementations
  - src/components/Announcement2.tsx
  - src/components/Header.tsx

Refactor into:
- Shared component: IconButton
- Shared accessibility rule: required ariaLabel

## Phase 7: Final Design System Compliance Definition

### Primary Button
Purpose:
- Highest-emphasis CTA
Usage:
- Contact, Register, Explore, Submit
Styles:
- red background, white text, 8 radius, explicit hover/active/focus ring

### Secondary Button
Purpose:
- Supporting CTA
Usage:
- Case studies, marketplace, alternate path
Styles:
- white background, neutral text, border, soft red hover tint

### Tertiary Button
Purpose:
- Medium-emphasis outlined action
Usage:
- Compare, View details
Styles:
- transparent background, red border/text, tinted hover

### Text Button
Purpose:
- Low-emphasis inline action
Usage:
- Show more/less, load more, read more
Styles:
- no heavy container, compact horizontal padding, subtle background on hover

### Icon Button
Purpose:
- Icon-only interaction
Usage:
- Close, dismiss, nav icon controls
Styles:
- fixed square target, subtle hover tint, focus ring, aria label required

## Phase 8: Final Deliverables

### 1) Button Inventory
- Full raw machine inventory: button-inventory-raw.md
- Structured action-level inventory: this document, Phase 1 section

### 2) Button Variants
- Primary, Secondary, Tertiary, Text, Card, Icon

### 3) Shared Components
Implemented:
- src/components/buttons/Button.tsx
- src/components/buttons/PrimaryButton.tsx
- src/components/buttons/SecondaryButton.tsx
- src/components/buttons/TextButton.tsx
- src/components/buttons/CardButton.tsx
- src/components/buttons/IconButton.tsx
- src/components/buttons/tokens.ts
- src/components/buttons/index.ts

### 4) Migration Checklist
1. Replace all primary CTA Fluent Button usages with PrimaryButton.
2. Replace all outline/secondary supporting CTAs with SecondaryButton.
3. Replace subtle text-like actions with TextButton.
4. Replace icon-only controls with IconButton and enforce ariaLabel.
5. Convert native pagination/tab buttons to shared components.
6. Remove ad-hoc inline button styling and map to variant props.
7. Keep maq-equal-cta only for pair-width alignment until pair component is added.
8. Add lint rule or code review gate: no direct Fluent Button in page-level files unless justified.

### 5) Estimated Reduction
- Button implementations today: ~90 direct Fluent Button usages + ~20 native button usages + ~20 button-like links
- Button components after refactor: 1 base + 5 wrappers
- Estimated duplicate-code reduction: 65% to 75%
- Estimated migration touchpoints: 35 to 45 files
