# Design Philosophy

### Core principles

* **More than enough space** — every section should breathe.
* **Minimal by default** — remove anything that does not improve clarity.
* **Visually calm** — avoid loud gradients, neon glows, and excessive motion.
* **Readable first** — typography should carry the hierarchy.
* **One visual focus per section** — do not compete for attention.
* **Premium over playful** — think enterprise AI startup, not indie launch page.
* no eybrow, perfer oklch for soft gradients 
example, for hilighted pricing card bottom section
```
bg-[radial-gradient(in_oklch_120%_120%_at_50%_120%,#12283F_0%,#1B1430_45%,#14140F_100%)]
```

### IMPORTANT: Must Avoid Slope

Do **not** use these:

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
* Dark mode with glowing accents
* Hero eyebrow / pill chip : A tiny uppercase letter-spaced label sitting immediately above an oversized hero headline, or the same shape rendered as a pill chip
* Kicker / eyebrow label above heading : A tracked uppercase label above a heading
* Italic serif display headline
* Oversized hero headline
* Single font for everything
* Hairline border with wide shadow
* Radial-gradient background halo
* Em-dash overuse
* Marketing buzzword
* Pulsing status dot

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

### IMPORTANT: Type scale

| Element       | Size    | Weight  |
| ------------- | ------- | ------- |
| Hero title    | 3.5rem  | 500     |
| Section title | 2.5rem  | 500     |
| Card title    | 1.5rem  | 500     |
| Body          | 16–18px | 400     |
| Caption       | 14px    | 400     |
| Mono label    | 11–14px | 400     |

Line height should be **1.05–1.15** for large headings and **1.6–1.8** for body text.
max-w-prose for all content paragraph, no text content should be more thatn 65ch , i.e max-w-prose

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

---

## Section Header

### Section Header Philosophy

Avoid placing the CTA beside the heading.
Instead, create a balanced two-column introduction.
The left column contains only the heading.
The right column contains:
- supporting paragraph
- CTA

This creates a calmer visual hierarchy and gives the heading more impact.
On smaller screens, stack everything vertically.
The paragraph and CTA should appear directly beneath the heading.

use this component for section headings:-

```tsx
import { ArrowUpRightIcon } from "lucide-react"

type SectionHeaderProps = {
  title: string
  description: string
  cta: { label: string; href: string }
}
// important to have pb-12, pt-6 or more for better spacing more spacing becase section heading should distict itself with it's child elements
export default function SectionHeader({ title, description, cta={label: "Learn more", href: "#" } }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-24 pb-12 w-[50%] lg:w-full">
      <h2 className="max-w-xl text-4xl font-display font-medium tracking-tight md:text-5xl w-full">
        {title}
      </h2>
      <div className="flex flex-col items-start justify-start gap-8 w-full">
        <p className="text-xl leading-relaxed text-slate-200 h-full max-w-prose">{description}</p>
        {cta && (
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-opacity hover:opacity-80"
          >
            {cta.label}
            <ArrowUpRightIcon size={16} />
          </a>
        )}
      </div>
    </div>
  )
}

```

---

### Section Header Responsive Behavior

Desktop

```
Heading            Paragraph

                   CTA
```

Tablet & Mobile

```
Heading

Paragraph

CTA
```

Never keep the CTA aligned beside the heading on smaller screens.

Always stack vertically.

---

**Avoid** in section headers

- Centered headings
- Buttons aligned beside the heading
- Multiple CTAs
- Paragraph beneath the heading on desktop
- Overly narrow content widths
- Hero eyebrow / pill chip : A tiny uppercase letter-spaced label sitting immediately above an oversized hero headline, or the same shape rendered as a pill chip
- Kicker / eyebrow label above heading : A tracked uppercase label above a heading

---

## Button Philosophy
- make the action or cta buttons have detailing, sutel smooth detailing , like thin inset shadow etc

example cta button style only for hero
```tsx
<button
  className={cn(
    "relative text-white font-semibold text-base leading-[22px] tracking-[0.02em]",
    "px-9 py-3 rounded-xl cursor-pointer transition-all duration-200 ease-out",
    "border border-[#54A1FD] bg-[radial-gradient(95%_60%_at_50%_75%,#005FD6_0%,#209BFF_100%)]",
    "shadow-[0px_4px_48px_-12px_#1187FF,inset_0px_1px_8px_-4px_#FFFFFF]",
    "active:scale-95 active:rotate-1",
    "after:absolute after:top-[1px] after:right-[10%] after:w-[60%] after:h-[1px]",
    "after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent",
    "hover:brightness-110",
    className
  )}
  {...props}
>
  {children}
</button>
```

nav buttons are simpler, dont use these kinds of attention seeking buttons