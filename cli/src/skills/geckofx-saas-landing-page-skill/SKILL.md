---
name: geckofx-saas-landing-page-skill
description: Build minimal, premium SaaS landing pages inspired by Linear, Vercel, Stripe, Anova, and other modern AI/product websites using GeckoFX SVG components. Focus on visually calm layouts, generous whitespace, clean typography, and structured bento sections.
---


# GeckoFX SaaS Landing Page Skill Using GeckoFX SVG Components

Build minimal, premium SaaS landing pages inspired by Linear, Vercel, Stripe, Anova, and other modern AI/product websites.

This skill focuses on **visually calm layouts**, **generous whitespace**, **clean typography**, and **structured bento sections**. The goal is to create pages that feel intentional and trustworthy rather than trendy and overdesigned.

---
planning your landing page? Check out the
[planning workflow](references/workflow.md)

---
designing your landing page? Check out the
[design philosophy](references/philosophy.md)

---

# Section Composition Rules

Use this exact order for most SaaS pages:

```txt
Navbar
Hero
Social proof
Bento features
Analytics / dashboard showcase / featured features (storytelling)
Pricing
Testimonials (optional)
FAQ
Final CTA
Footer
```

check of references for each section while making theme:
[navbar](references/sections/navbar.md)
[hero section](references/sections/hero.md)
[bento section](references/sections/bento.md)
[pricing section](references/sections/pricing.md)
[faq section](references/sections/faq.md)
[final cta section](references/sections/final-cta.md)
[footer section](references/sections/footer.md)

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

Motion should reward attention.

It should never demand attention.

The user should notice the motion only after
they notice the content.

Animation exists to reinforce hierarchy,
not create it.

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

---

## Final Design Review

Before finishing, verify:
- Hero fits in one viewport
- One clear CTA
- Headings under two lines
- Plenty of whitespace
- Borders are subtle
- Consistent corner radius
- Only one dominant accent color
- GeckoFX colors match theme
- Motion is subtle
- No unnecessary gradients
- Every section has one purpose
- Product remains the visual focus
- Page feels calm
- all of `# IMPORTANT: Must Avoid Slope` from [philosophy](references/philosophy.md) are avoided

If any answer is "No",
refine before finishing.

---

# Component Registry

use the GeckoFX components for SaaS landing pages:
never use or create custom svg components for SaaS landing pages unless explicitly allowed. Use only the components provided in the GeckoFX component registry.



# How to add GeckoFX components

- add any component from geckofx using name from registry. For example, to add a component named `ConnectCube`, run the following command:
```bash
npx geckofx add ConnectCube
```

- add multiple components at once
```bash
npx geckofx add Component1 Component2 Component3
```

- query components registry like google search
```bash
npx geckofx search <query>
# example
npx geckofx search web3
```
search query could be a component name or a keyword related to the component or description (fan rotating). The search will return a list of components matching the query.

> NOTE: If you are using the `npx geckofx` command, make sure you have installed the `geckofx` package in your project. You can install it using npm or bun or yarn:

```bash
npm install geckofx
# or
bun add geckofx
# or
yarn add geckofx
```

> !IMPORTANT: on adding componets using `npx geckofx add <component-name>` command, it gets added to your project in src/components/fx folder. You can then import and use the component in your code.

**Reference:** : after adding required components using `npx geckofx add <component-name>` command, you can refer to it's documentation in [component reference](./references/components/) `<component-name>.json` file. The reference file will contain the component's props, usage examples, and other relevant information. if the reference file has where to use the component in the landing page, it will be mentioned in the reference file. if the usage does not match your requirements, try out similar components from the registry. 

for example, if GpuCluster is recommended for background hero section, then look for similar components and add them to your project

## GeckoFX Themeing

Every GeckoFX component accepts a `colors` prop.

Example:

```tsx
<ServerStack
    colors={{
        primary: "...",
        secondary: "...",
        accent: "...",
        glow: "...",
        stroke: "...",
    }}
/>
```

Never rely on the default colors.

Always adapt the SVG palette to match the landing page theme.

Before using any component:

1. Open

```
src/components/fx/<ComponentName>.tsx
```

2. Search for

```
const DEFAULT_COLORS
```

3. Override the colors using the page theme.

the `const DEFAULT_COLORS` object contains the default colors used in the component. You can override these colors by passing a `colors` prop to the component.
using the `DEFAULT_COLORS` object as a reference, you can create a new colors object that matches your landing page accent theme.

Dark pages should use darker neutrals with restrained accents.

Light pages should reduce glow intensity and increase contrast between strokes and background.

Many GeckoFX components expose additional props.

Examples:

- float (prfered false)
- rotation
- speed
- opacity
- particle count
- animated
- strokeWidth

Inspect the component source before use and leverage available props. search for `type Props` in the component file to see all available props.

Prefer subtle motion.

Never enable every animation simply because it exists.