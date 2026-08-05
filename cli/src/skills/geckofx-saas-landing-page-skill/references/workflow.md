# Planning Workflow

Never begin implementation immediately.

Before writing JSX:

1. Understand the product.
2. Identify the primary CTA.
3. Determine the user's first impression.
4. Decide which GeckoFX component best communicates the product.
5. Determine whether screenshots exist.
6. Build a section outline.
7. Only then implement.

The visual story always comes before the code.

# Required Planning Output

Before writing JSX, produce an internal plan containing:

- Product summary
- Target audience
- Primary CTA
- Hero strategy
- Visual theme
- Selected GeckoFX components
- Screenshot availability
- Section order
- Accent colors
- Motion strategy

Only after the plan is complete should implementation begin.

# AI Decision Tree

Ask the following questions to determine the best layout for your landing page. (do tool calls to ask question)

Does the product have screenshots?
YES (recommed user to have screenshots)
↓
Hero = Center CTA
↓
Screenshot below
↓
GeckoFX inside Bento cards


NO
↓
Split Hero
↓
Text left
↓
Large h-full GeckoFX right

ADD-LATER
↓
Hero = Center CTA
↓
Empty screenshot placeholder (black div)
↓
GeckoFX inside Bento cards

────────────────────────

Is this a developer product?
YES
↓
Dark
↓
IBM Plex Mono labels
↓
Server/Network GeckoFX

────────────────────────

Is this B2B SaaS?
YES
↓
Minimal
↓
Few colors
↓
Real screenshots
↓
Large whitespace

────────────────────────

Is the page starting to feel busy?
↓
Remove elements until it feels calm.

---