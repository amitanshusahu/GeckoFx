# Pricing Section

## Philosophy

Pricing should feel like a premium product showcase—not a comparison table.

Avoid generic SaaS pricing grids with three identical cards.

Instead:

- Large amount of whitespace
- Only 2 plans unless the product genuinely requires more
- One visually dominant "recommended" plan
- Focus attention on price and CTA first
- Features become supporting information

The section should immediately communicate:

> "This is the obvious plan to buy."

---

## Layout

```txt
Section heading following -> ## Section Header from # Design Philosoply
[section header](../philosophy.md)

Billing toggle ( left alligned )
(Monthly / Yearly)

2 pricing cards
    left = Individual
    right = Team / Business

Large breathing space

Small guarantee or FAQ below
```

Maximum width:

```
1280px
```

Cards should almost fill the width.

Avoid narrow centered pricing cards.

---

## Overall spacing

Top padding:

```
120-160px
```

Gap between heading and cards:

```
64px
```

Gap between cards:

```
24-32px
```

---

## Billing Toggle

Place above the cards.

Aligned left.

Floating segmented control.

```
┌──────────────┐
│ Monthly Year │
└──────────────┘
```

Requirements

- rounded-full
- subtle border
- glass/dark surface
- selected option slightly brighter
- animated pill slider
- never use bright gradients

---

# Pricing Cards

Exactly TWO cards.

Not three.

Each card fills roughly half the container.

```txt
┌─────────────────────────────┐
│ Product information         │
│                             │
│ Huge Price                  │
│ Large CTA                   │
│                             │
├─────────────────────────────┤
│ Feature list                │
│                             │
│ check feature               │
│ check feature               │
│ check feature               │
└─────────────────────────────┘
```

The card itself is composed of two visual sections.

---

## Upper Section

Solid elevated surface.

Contains:

- plan label
- optional badge
- short value proposition
- massive price
- CTA
- optional enterprise/custom callout

This section should visually float above the lower section.

Requirements

- rounded-3xl
- generous padding (40-48px)
- thin border
- slightly brighter than page background
- no heavy shadows
- use spacing instead of decoration

---

## Lower Section

Contains only feature list.

This section visually anchors the card.

For dark theme:

Use a subtle premium gradient.

Example direction

```
deep navy
↓

purple

↓

orange glow
```

The gradient must stay dark.

Never use neon.

Never use rainbow gradients.

Opacity should remain low enough that white text is perfectly readable.

---

# Plan Hierarchy

One plan should feel obviously recommended.

Do NOT rely on "Most Popular" badges.

Instead use hierarchy.

Increase:

- visual weight
- border contrast
- background richness

The recommended plan should naturally attract the eye first.

---

# Typography

Plan label

```
14-16px
Medium
Upper hierarchy
```

Value proposition

```
42-52px
Bold
2 lines maximum
```

Price

```
72-96px
Bold
```

Billing period

```
24px
Muted
```

Features

```
16-18px
Medium
```

---

# CTA

The CTA is one of the largest interactive elements on the page.

Requirements

- full width
- height 56-64px
- rounded-xl
- high contrast
- bold text

Never use outlined buttons.

The CTA should feel impossible to miss.

---

# Feature List

Use two balanced columns.

Each feature has:

✓ icon

Short text

No paragraphs.

Maximum 8 features.

Example

✓ Unlimited projects

✓ Commercial license

✓ Team collaboration

✓ Figma plugin

✓ Priority support

✓ AI generation

✓ Version history

✓ API access

---

# Enterprise Callout

Optionally place a compact card beside the CTA.

Example

```
Need custom licensing?

Enterprise

Contact Sales
```

This element should feel secondary.

Do not compete with the main CTA.

---

# Visual Style

Dark theme defaults

Background

```
#0A0A0A
```

Card surface

```
#111111
```

Border

```
rgba(255,255,255,.08)
```

Text

```
White
```

Muted text

```
70% opacity
```

Accent

Very subtle.

No glowing borders.

No glassmorphism.

No excessive blur.

Premium through spacing—not effects.

---

# Motion

Animate only:

- billing toggle
- CTA hover
- card entrance
- subtle gradient movement (optional)

Avoid:

- bouncing cards
- rotating elements
- floating pricing cards
- exaggerated hover transforms

Motion should feel calm and premium.

---

# Avoid

- Three identical pricing cards
- Generic comparison tables
- Huge "Most Popular" ribbons
- Heavy drop shadows
- Gradient text
- Neon colors
- Overly dense feature lists
- Tiny CTA buttons
- Cards with identical visual weight

The pricing section should resemble a premium product launch page rather than a traditional SaaS pricing table.