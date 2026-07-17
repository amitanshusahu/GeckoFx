# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# svg-components
- SVG components should accept `className`, `colors` (with DEFAULT_COLORS pattern and partial override), `animate`, and animation-related props (e.g. `blinkSpeed`). Confidence: 0.70
- Use `useId()` from React to generate unique IDs for SVG `<defs>` elements (gradients, filters, clip paths) so multiple component instances don't conflict. Confidence: 0.75
- When animating SVG elements with `motion` that have existing SVG `transform` attributes, wrap the element in a `<motion.g>` parent instead of making the element itself a motion component — this prevents motion's `scale`/`rotate` from overriding the SVG's static transform. Confidence: 0.70

