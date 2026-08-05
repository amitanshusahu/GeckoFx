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

if product screenshot exists or user want's to add them later:

```tsx
<section className="pt-24 pb-32">
  <div className="mx-auto max-w-4xl text-center\">

    <h1 className="mt-6 text-[4rem] font-[510] tracking-tight">
      The product development system for teams and agentsThe product development system for teams and agents
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-[0.9rem] text-muted-foreground">
      Purpose-built for planning and building products. Designed for the <StyledUnderLinedSvgSpan> AI era </StyledUnderLinedSvgSpan>
    </p>

    <div className="mt-10 flex justify-center gap-4">
      <Button size="lg">Start free</Button>
      <Button variant="outline" size="lg">Book a demo</Button>
    </div>

    <div className="mt-16">
      <AsyncImage query="minimal SaaS dashboard mockup on light background with soft shadows" aspectRatio="16:10" radius="3xl" width="100%" maxWidth={1120} maxHeight={700} />
    </div>
  </div>
</section>
```

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