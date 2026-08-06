# FAQ Section

## Philosophy

Avoid centered FAQ sections with a heading stacked above an accordion.

Instead, split the section into two columns.

The left column introduces the FAQ.

The right column contains the accordion.

The goal is to create visual balance while giving the questions enough space.

---

## Layout

```txt
┌──────────────────────────────────────────────────────┐
│ FAQ Badge          |  Accordion                      │
│ Large Heading      |  Question                       │
│                    |  Question                       │
│ Short description  |  Question                       │
│                    |  Question                       │
└──────────────────────────────────────────────────────┘
```

Desktop

```
40% | 60%
```

Mobile

```
Stack vertically
```

---

## Left Column

Contains only:

- small badge
- large uppercase heading
- short supporting paragraph

Heading should occupy 2–4 lines.

Keep plenty of empty space.

Do not add buttons or illustrations.

---

## Right Column

Contains only the accordion.

Questions should span nearly the full column width.

Avoid narrow accordions.

Use 5–8 questions.

---

## Accordion

Each item should contain:

- question
- plus icon inside a bordered square
- answer revealed below

Requirements

- rounded-xl
- thin border
- transparent background
- generous horizontal padding (28–32px)
- height around 72–80px when collapsed
- 16px vertical gap between items

Do not use cards with shadows or colored fills.

---

## Typography

Badge

```
12–14px
Uppercase
```

Heading

```
48–64px
Bold
Uppercase preferred
```

Description

```
16–18px
Muted
Maximum 2 lines
```

Question

```
18–20px
Medium
```

Answer

```
16px
Muted
Comfortable line-height
```

---

## Dark Theme

Background

```
#090909
```

Accordion

Transparent surface

Border

```
rgba(255,255,255,.10)
```

Text

White

Muted text

70% opacity

Hover

Slightly brighter border only.

Avoid glow effects.

---

## Motion

Animate only:

- accordion expansion
- icon rotation
- subtle border transition

Avoid bouncing or oversized hover animations.