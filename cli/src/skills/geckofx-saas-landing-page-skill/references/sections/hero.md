## Hero

hero must take up a minimum of 100vh.
**Avoid**
- Hero eyebrow / pill chip : A tiny uppercase letter-spaced label sitting immediately above an oversized hero headline, or the same shape rendered as a pill chip, avoid at all cost
- Kicker / eyebrow label above heading : A tracked uppercase label above a heading, avoid at all costs

### Layout

```txt
Headline (max 2 lines)
Subheadline (max 2 lines)
Primary CTA + Secondary CTA
Social proof row
Product image / screenshot / dashboard mockup
```

### Example

if product screenshot exists or user want's to add them later:

```tsx
<section className="pt-24 pb-32">
  <div className="mx-auto max-w-4xl text-center">

    <h1 className="text-[4rem] font-medium tracking-tight">
      The product development system for teams and agentsThe product development system for teams and agents
    </h1>

    <p className="mx-auto mt-8 max-w-2xl text-[0.9rem] text-muted-foreground">
      Purpose-built for planning and building products. Designed for the <StyledUnderLinedSvgSpan> AI era </StyledUnderLinedSvgSpan>
    </p>

    <div className="mt-16 flex justify-center gap-4">
      <Button size="lg">Start free</Button>
      <Button variant="outline" size="lg">Book a demo</Button>
    </div>

    <div className="mt-16">
      <AsyncImage query="minimal SaaS dashboard mockup on light background with soft shadows" aspectRatio="16:10" radius="3xl" width="100%" maxWidth={1120} maxHeight={700} />
    </div>
  </div>
</section>
```

important # Type Scale from design philosohy -> typography

### Alternative layout

If no product screenshot exists and user don't want to add later:

* CTA on the left
* GeckoFX component on the right (h-full, no background or wraper)
* 6-column / 6-column split
* Vertical center alignment

### Hero Checklist
- identify the product in 5 seconds
- communicate one benefit
- one CTA
- one supporting sentence
- one hero visual
- no more than two accent colors
- avoid floating badges everywhere
- avoid feature lists
- avoid multiple visual focal points