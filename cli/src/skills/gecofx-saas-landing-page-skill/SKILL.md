---
name: gecofx-saas-landing-page-skill
description: Build minimal, premium SaaS landing pages inspired by Linear, Vercel, Stripe, Anova, and other modern AI/product websites using GeckoFX SVG components. Focus on visually calm layouts, generous whitespace, clean typography, and structured bento sections.
---


# GeckoFX SaaS Landing Page Skill Using GeckoFX SVG Components

Build minimal, premium SaaS landing pages inspired by Linear, Vercel, Stripe, Anova, and other modern AI/product websites.

This skill focuses on **visually calm layouts**, **generous whitespace**, **clean typography**, and **structured bento sections**. The goal is to create pages that feel intentional and trustworthy rather than trendy and overdesigned.


## Design Philosophy

### Core principles

* **More than enough space** — every section should breathe.
* **Minimal by default** — remove anything that does not improve clarity.
* **Visually calm** — avoid loud gradients, neon glows, and excessive motion.
* **Readable first** — typography should carry the hierarchy.
* **One visual focus per section** — do not compete for attention.
* **Premium over playful** — think enterprise AI startup, not indie launch page.

### Avoid slope

Do **not** use:

* Purple gradient overload
* Multiple glowing borders
* Bounce animations everywhere
* Cards inside cards inside cards
* Excessive shadows
* Floating particles
* Random glassmorphism
* Centered text blocks with no width constraints

If a component feels like a Dribbble shot, simplify it by **30–50%**.

---

## Typography

### Primary font

Use **DM Sans** (preferred) or **Poppins**.

```html
<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">
<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>
<link href=\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap\" rel=\"stylesheet\">
```

### Mono font

Use **IBM Plex Mono** for technical labels, metrics, and badges.

```html
<link href=\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap\" rel=\"stylesheet\">
```

### Type scale

| Element       | Size    | Weight  |
| ------------- | ------- | ------- |
| Hero title    | 64–80px | 700–800 |
| Section title | 40–48px | 700     |
| Card title    | 20–24px | 600–700 |
| Body          | 16–18px | 400–500 |
| Caption       | 14px    | 400–500 |
| Mono label    | 13–14px | 500     |

Line height should be **1.05–1.15** for large headings and **1.6–1.8** for body text.

---

## Layout System

### Container

```txt
max-width: 1280px
padding-inline: 24px (mobile)
padding-inline: 32px (tablet)
padding-inline: 48px (desktop)
```

### Vertical rhythm

```txt
Section spacing: 120px desktop / 88px tablet / 72px mobile
Card padding: 28–32px
Grid gap: 24px
Hero top padding: 96px
Hero bottom padding: 120px
```

Whitespace is a feature, not empty space.

---

## Color Tokens

### Light theme (default)

```txt
Background: #FAFAF8
Surface: #FFFFFF
Surface secondary: #F5F5F2
Border: #E7E7E2
Text primary: #111827
Text secondary: #6B7280
Accent: #2563EB
Accent soft: #EFF6FF
```

### Dark theme (tech websites)

```txt
Background: #070707
Surface: #111111
Border: #1F1F1F
Text primary: #F3F4F6
Text secondary: #A1A1AA
Accent: #FF5A2C
```

Use dark theme only when the product positioning is **developer tooling, infrastructure, or security**.

---

# Section Composition Rules

## Hero

Preferred structure: **center CTA + product image below**.

### Layout

```txt
Badge (optional)
Headline (max 2 lines)
Subheadline (max 2 lines)
Primary CTA + Secondary CTA
Social proof row
Product image / screenshot / dashboard mockup
```

### Example

```tsx
<section className=\"pt-24 pb-32\">
  <div className=\"mx-auto max-w-4xl text-center\">
    <Badge label=\"Powered by AI agents\" />

    <h1 className=\"mt-6 text-7xl font-bold tracking-tight\">
      One platform for all of growth.
    </h1>

    <p className=\"mx-auto mt-6 max-w-2xl text-lg text-muted-foreground\">
      Agents for every metric, working 24/7 without dashboards, exports, or manual analysis.
    </p>

    <div className=\"mt-10 flex justify-center gap-4\">
      <Button size=\"lg\">Start free</Button>
      <Button variant=\"outline\" size=\"lg\">Book a demo</Button>
    </div>

    <div className=\"mt-16\">
      <AsyncImage query=\"minimal SaaS dashboard mockup on light background with soft shadows\" aspectRatio=\"16:10\" radius=\"3xl\" width=\"100%\" maxWidth={1120} maxHeight={700} />
    </div>
  </div>
</section>
```

### Alternative layout

If no product screenshot exists:

* CTA on the left
* GeckoFX component on the right
* 6-column / 6-column split
* Vertical center alignment

Use components such as:

* `ServerStack`
* `CloudMesh`
* `SignalFlow`
* `DataWave`
* `OrbitalNodes`

---

## Bento Section

### Header layout

Always use a **2-line heading aligned left** with a button on the right.

```tsx
<div className=\"flex items-end justify-between gap-6\">
  <div className=\"max-w-2xl\">
    <h2 className=\"text-5xl font-bold tracking-tight\">
      Not a generic agency.
      <br />
      A studio with contractual performance.
    </h2>
  </div>

  <Button variant=\"outline\">Book a strategy call</Button>
</div>
```

### Grid structure

Desktop: **12 columns**.

```txt
Large card: span 7–8
Medium card: span 5
Small card: span 4
```

Mobile: stack vertically with 20px gaps.

---

## Bento Card Creation Process

### Step 1 — Background

Choose **one**:

* Subtle grid (`bg-grid`)
* Product screenshot
* Soft gradient
* Technical blueprint pattern
* Empty surface with border

Never combine more than **two** background treatments.

### Step 2 — Heading Fade (optional)

Use when the background is visually busy.

```tsx
<div className=\"absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent\" />
```

### Step 3 — Content

```tsx
<div className=\"relative z-10 p-8\">
  <h3 className=\"text-2xl font-semibold\">Revenue opportunities</h3>
  <p className=\"mt-2 text-muted-foreground\">
    AI agents identify conversion wins automatically.
  </p>
</div>
```

### Step 4 — GeckoFX SVG

Place the SVG in the lower portion of the card.

```tsx
<div className=\"mt-auto flex items-end justify-center p-6\">
  <DataWave className=\"h-56 w-full\" />
</div>
```

### Final card template

```tsx
<Card className=\"group relative overflow-hidden rounded-3xl border bg-surface\">
  <div className=\"absolute inset-0 bg-grid opacity-40\" />
  <div className=\"absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent\" />

  <div className=\"relative flex h-full min-h-[420px] flex-col p-8\">
    <div>
      <h3 className=\"text-2xl font-semibold\">Revenue opportunities</h3>
      <p className=\"mt-2 text-muted-foreground\">
        AI agents identify conversion wins automatically.
      </p>
    </div>

    <div className=\"mt-auto\">
      <DataWave className=\"h-56 w-full\" />
    </div>
  </div>
</Card>
```

---

## Pricing Section

### Structure

```txt
Centered badge
2-line heading
Short description
3 pricing cards
Highlighted middle plan
Guarantee / note below
```

### Card rules

* Radius: `rounded-3xl`
* Padding: `32px`
* Border visible at all times
* No heavy shadows
* Highlight with border color + soft accent background

### Example tiers

| Plan       | Price   | CTA              |
| ---------- | ------- | ---------------- |
| Starter    | $0      | Get started      |
| Growth     | $49     | Start free trial |
| Enterprise | Contact | Book demo        |

---

## FAQ Section

### Layout

Use a centered heading with a narrow accordion width.

```tsx
<section className=\"py-32\">
  <div className=\"mx-auto max-w-3xl\">
    <div className=\"text-center\">
      <Badge label=\"FAQ\" />
      <h2 className=\"mt-4 text-5xl font-bold\">
        Questions, answered simply.
      </h2>
    </div>

    <Accordion className=\"mt-12\" />
  </div>
</section>
```

### Spacing

* 16px between items
* 24px internal padding
* Thin border only
* No colored backgrounds

---

## Footer

### Structure

```txt
Logo + short sentence
4 link columns
Divider
Bottom row with copyright + social links
```

### Visual style

* Background slightly darker than page
* 80–96px vertical padding
* Muted text
* 14px font size for secondary links

---

## Motion Guidelines

### Allowed

* Fade in (`200–400ms`)
* Subtle translateY (`4–8px`)
* Gentle opacity transitions
* Slow SVG path animations
* Hover elevation of `2–4px`

### Forbidden

* Bounce
* Elastic springs
* Continuous floating
* Rotating gradients
* Cursor-following effects
* Excessive blur animations

Motion should feel **expensive**, not attention-seeking.

---

## Section Order

Use this exact order for most SaaS pages:

```txt
Navbar
Hero
Social proof
Bento features
Analytics / dashboard showcase
Pricing
Testimonials (optional)
FAQ
Final CTA
Footer
```

---

## AI Composition Rules

When generating a landing page:

1. Keep the hero under **2 headline lines**.
2. Use **one primary CTA**.
3. Limit each bento card to **one idea**.
4. Maintain **24px minimum gaps** between cards.
5. Never exceed **3 accent colors** on the page.
6. Prefer screenshots over abstract illustrations.
7. Use GeckoFX SVGs only as supporting visuals.
8. Keep paragraphs under **18 words per sentence**.
9. Ensure the first viewport has **one clear conversion goal**.
10. If uncertain, remove an element rather than adding one.

---

## Visual Reference Checklist

The final page should feel like the provided references:

* Large breathing margins
* Soft off-white background
* Thin neutral borders
* Rounded 24–32px surfaces
* Bold but restrained typography
* Calm blue accents
* Clean bento geometry
* Minimal shadows
* Centered product imagery
* Enterprise-level visual polish

A good test: **if the page still looks premium after removing every gradient, the design is successful.**


## IMPORTANT: Component Registry

use the following GeckoFX components for SaaS landing pages:
never use or create custom svg components for SaaS landing pages unless explicitly allowed. Use only the components provided in the GeckoFX component registry.

See [the reference guide for all available components](references/REFERENCE.md) for component registry.

# How to add GeckoFX components

- add any component from geckofx using name from registry. For example, to add a component named `ConnectCube`, run the following command:
```bash
npx geckofx add ConnectCube
```

- add multiple components at once

```bash
# opes a search multiselect prompt to select components from the registry (esc to exit, space to select, enter to confirm)
npx geckofx
```

- search and add a component from the registry

```bash
# opens a search prompt to select a component from the registry (doubel esc to exit, space to select, enter to confirm -> loop search and add multiple components -> double esc to exit)
npx geckofx search ConnectCube
```

> NOTE: If you are using the `npx geckofx` command, make sure you have installed the `geckofx` package in your project. You can install it using npm or bun or yarn:

```bash
npm install geckofx
# or
bun add geckofx
# or
yarn add geckofx
```

> !IMPORTANT: on adding componets using `npx geckofx add <component-name>` command, it gets added to your project in src/components/fx folder. You can then import and use the component in your code.

> NOTE: check the components in `@src/components/fx/<component-name>` to adjust colors, sizes, and other props to match your design.