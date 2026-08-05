# Bento Section

Header should follow the -> ## Section Header from # Design Philosophy
[section header](../philosophy.md)

The Bento section showcases multiple product capabilities through editorial cards.

Avoid repetitive feature grids.

Every card should feel like a miniature landing page.

---

## Design Philosophy

The illustration is the primary focus.

The text introduces the feature.

Never center an icon beneath a heading.

Instead, the artwork should dominate the card while the copy quietly supports it.

Cards should feel intentionally composed rather than filled.

---

## Section Layout

Follow the shared Section Introduction.

Below it create an asymmetric Bento grid.

Desktop

```txt
┌──────────────────────┬──────────────────────┐
│                      │                      │
│      Large           │      Large           │
│                      │                      │
├───────────┬──────────┼──────────────────────┤
│ Small     │ Small    │ Medium               │
└───────────┴──────────┴──────────────────────┘
```

Avoid perfectly symmetrical layouts.

Cards should have different visual weights.

---

## Grid

Desktop

12 columns

Example

```
8 + 4

4 + 4 + 4

7 + 5

5 + 7
```

Mix widths naturally.

Never repeat the same layout row after row.

---

## Card Philosophy

Every card should answer one product capability.

Do not duplicate layouts.

Each card should have a different composition.

Examples

• Illustration dominant

• Screenshot dominant

• Dashboard dominant

• Floating UI elements

• Technical diagram

---

## Card Composition

Every card is composed of two areas.

```txt
Heading

Illustration
```

The illustration should occupy roughly

```
70–80%
```

of the available height.

Text should never compete with the visual.

---

## Heading

Place the heading near the top-left.

Maximum

```
2 lines
```

Supporting text

```
1 line
```

Prefer lightweight descriptions.

---

## Illustration

The illustration should become the hero.

Preferred options

- GeckoFX SVG
- Product screenshot
- Dashboard
- Browser mockup
- Floating metrics
- Graphs
- Workflow diagram
- Abstract visualization

Illustrations may overflow the card.

Avoid keeping every asset perfectly centered.

---

## Layering

Create depth using overlapping elements.

Examples

- floating metric cards
- notification badges
- browser windows
- charts
- modal dialogs
- analytics widgets

Layer UI naturally.

Avoid flat compositions.

---

## Background

Choose one primary treatment.

Examples

- clean surface
- subtle grid
- soft radial gradient
- blueprint lines
- dashboard canvas

Never combine multiple strong backgrounds.

The illustration should remain the focus.

---

## Card Styling

- rounded-3xl
- thin border
- overflow-hidden
- generous padding (32–40px)
- no heavy shadows

Cards should feel like product canvases.

---

## Typography

Heading

```
34–42px
Bold
Maximum 2 lines
```

Description

```
18px
Muted
Maximum 1–2 lines
```

---

## Motion

Animate only the product.

Examples

- graph movement
- floating metrics
- dashboard updates
- SVG animation

Cards themselves should remain stationary.

Avoid hover lifts.

Avoid rotating cards.

---

## Avoid

- Centered icons
- Generic feature cards
- Equal-height illustrations
- Tiny screenshots
- Excessive text
- Identical card layouts
- Empty whitespace beneath illustrations
- Icons floating alone in the middle of the card

Every card should look like a premium product showcase rather than a feature tile.

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

### Step 2 — Heading Fade

```tsx
<div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent" />
```

### Step 3 — Content

```tsx
<div className="relative z-10 p-8">
  <h3 className="text-2xl font-semibold">Revenue opportunities</h3>
  <p className="mt-2 text-muted-foreground">
    AI agents identify conversion wins automatically.
  </p>
</div>
```

### Step 4 — GeckoFX SVG

Place the SVG in the lower portion of the card.

```tsx
<div className="mt-auto flex items-end justify-center p-6">
  <DataWave className="h-56 w-full" />
</div>
```

### Final card template

```tsx
<Card className="group relative overflow-hidden rounded-3xl border bg-surface">
  <div className="absolute inset-0 bg-grid opacity-40" />
  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent" />

  <div className="relative flex h-full min-h-[420px] flex-col p-8">
    <div>
      <h3 className="text-2xl font-semibold">Revenue opportunities</h3>
      <p className="mt-2 text-muted-foreground">
        AI agents identify conversion wins automatically.
      </p>
    </div>

    <div className="mt-auto">
      <DataWave className="h-56 w-full" />
    </div>
  </div>
</Card>
```