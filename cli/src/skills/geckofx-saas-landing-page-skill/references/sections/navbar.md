# Navbar

## Design Philosophy

The navigation should disappear into the page.

It should feel calm, lightweight and premium.

Avoid startup-style navbars with glassmorphism, heavy shadows, gradients or oversized buttons.

The content below the navbar should remain the visual focus.

---

## Layout

Desktop

```txt
Logo

link 1
link 2
link ..

CTA
```

The logo stays left.

Navigation links remain grouped beside the logo instead of being centered.

The CTA stays aligned to the far right.

---

## Structure

```txt
┌──────────────────────────────────────────────────────────────┐
│ Logo   Links................................. CTA            │
└──────────────────────────────────────────────────────────────┘
```

Use flex.

```tsx
justify-between
items-center
```

Maximum width

```
1280-1440px
```

Centered horizontally.

---

## Navigation

Keep navigation minimal.

Prefer 4–6 links. depending on the planing and product

Only the first item should optionally include a chevron.

Avoid dropdown indicators on every item.

---

## Logo

Place the logo flush left.

Do not wrap it inside a pill or card.

Keep generous spacing before the navigation links.

---

## CTA

Place a single primary CTA on the far right.

Examples

- Get Started
- Book Demo
- Start Free
- Contact Sales

Requirements

- rounded-xl
- medium padding
- solid surface
- no gradients
- no glow

Dark theme

```
Background

#FFFFFF or ( decided accent color)

Text

#090909
```

The CTA should feel understated rather than attention-seeking.

---

## Container

Height

```
72-88px
```

Horizontal padding

```
32-48px
```

Use a subtle bottom border.

Avoid shadows.

---

## Responsive

Desktop

```
Logo  Links........................ CTA
```

Tablet

Collapse spacing between links.

Mobile

- Logo
- Hamburger menu
- CTA inside mobile drawer

Never keep desktop navigation on small screens.

---

## Motion

Animate only

- dropdown chevron
- hover opacity
- mobile drawer

Avoid

- floating navbars
- blur transitions
- hover scaling
- animated backgrounds

Navigation should remain stable.

---

## Avoid

- Glassmorphism
- Frosted backgrounds
- Floating pills
- Rounded navigation containers
- Large shadows
- Multiple CTA buttons
- Gradient buttons
- Colored navigation backgrounds
- Centered navigation links