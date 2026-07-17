# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# svg-components
- SVG components should accept `className`, `colors` (with DEFAULT_COLORS pattern and partial override), `animate`, and animation-related props (e.g. `blinkSpeed`). Confidence: 0.70
- Use `useId()` from React to generate unique IDs for SVG `<defs>` elements (gradients, filters, clip paths) so multiple component instances don't conflict. Confidence: 0.75

