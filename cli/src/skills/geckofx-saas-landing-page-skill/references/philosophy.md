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
* generic geometric icon centered or left-aligned right above the text Feature Card
* Generic Card CTA above footer
* Massive Icon tile stacked above heading
* A thick colored border on one side of a rounded card
* Neon glows

---

## GeckoFX Design Language

Our visual language values restraint over decoration.

The interface should feel:

• engineered
• calm
• intentional
• confident
• premium
• timeless

rather than

• trendy
• flashy
• loud
• crowded
• over-animated
• decorative

---

## One Star Rule
Every section should have one star.
Examples
Heading
or
Screenshot
or
GeckoFX Component
Never create two competing stars.

---

## Theme Selection

Default to **dark mode**.
Background

```
#090909
```

Dark interfaces better showcase GeckoFX SVG components,
reduce visual noise, and produce stronger visual hierarchy.

Only use light mode when:

- the brand explicitly uses light colors
- marketing assets are predominantly light
- screenshots are captured on light backgrounds
- the product targets enterprise/business users where lighter interfaces improve familiarity

When using light mode, update every GeckoFX component's color palette.

---

## Typography

### Primary font

Use **Satoshi** for heading

```html
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap">

<!- or use a tailwind @theme to add --font-primary ->
<style>
  * {
    font-family: 'Satoshi', sans-serif;
  }
</style>

```

### Secondary font

use **DM Sans** for content

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">

  <!- or use a tailwind @theme to add --font-secondary ->
<style>
  p {
     font-family: "DM Sans", sans-serif;
  }
</style>
```

### Mono font

Use **IBM Plex Mono** for technical labels, metrics, and badges.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

<!- or use a tailwind @theme to add --font-mono ->
<style>
  p {
    font-family: "IBM Plex Mono", monospace;
  }
</style>
```

### Type scale

| Element       | Size    | Weight  |
| ------------- | ------- | ------- |
| Hero title    | 4rem    | 510     |
| Section title | 3rem    | 510     |
| Card title    | 1rem    | 500     |
| Body          | 16–18px | 400     |
| Caption       | 14px    | 400     |
| Mono label    | 11–14px | 400     |

Line height should be **1.05–1.15** for large headings and **1.6–1.8** for body text.

---

## Spacing Philosophy

When uncertain, increase spacing.
Prefer too much whitespace over slightly crowded layouts.
Every section should feel isolated enough to have its own breathing room.
Whitespace creates hierarchy.

---

## Border Philosophy

Use borders to separate.
Not shadows.
Preferred
1px border
subtle background difference 
minimal shadow
Avoid heavy drop shadows.
If the card looks elevated without the shadow,remove the shadow.

---

## Component Scale

Hero

Large
40–60% viewport width

Bento

50–70% card width

Feature section

40–50%

Avoid oversized SVGs that touch card edges.

Allow generous internal padding.

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

## Visual Hierarchy rules
Every section should have ONE visual priority.
1
Heading
↓
2
Artwork
↓
3
Description
↓
4
CTA

Never allow two equally dominant elements.

The eye should know where to look first.

---

## Content Hierarchy

Each section should answer one question.

Hero
"What is this?"

Features
"Why should I care?"

Bento
"How does it work?"

Pricing
"How much?"

FAQ
"What concerns remain?"

Final CTA
"What should I do now?"
