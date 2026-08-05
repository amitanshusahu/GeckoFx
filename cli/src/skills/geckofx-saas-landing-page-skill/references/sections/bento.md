## Bento Section

### Header layout

Always use a **2-line heading aligned left** with a button on the right.

```tsx
<div className="flex items-end justify-between gap-6">
  <div className="max-w-2xl">
    <h2 className="text-5xl font-bold tracking-tight">
      Not a generic agency.
      <br />
      A studio with contractual performance.
    </h2>
  </div>

  <Button variant="outline">Book a strategy call</Button>
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