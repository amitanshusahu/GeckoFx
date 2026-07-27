# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# react-svg
- For SVG React components, follow the Lock.tsx pattern: DEFAULT_COLORS with `as const`, derived type via mapped type, Props with className/colors/animate, useId() for unique IDs, and useReducedMotion() for accessibility. Confidence: 0.70
- Use `motion/react` for SVG element animations; set `transformBox: "fill-box"` and `transformOrigin` on motion groups, use keyframe arrays for shake effects with `times` array for easing control. Confidence: 0.70
- Use `foreignObject` with `backdropFilter: "blur(Npx)"` and `clipPath` via a `clipPath` SVG element for glassmorphism/backdrop-blur effects within SVGs. Confidence: 0.70
- Use `linearGradient` with `gradientUnits="userSpaceOnUse"` for SVG gradient definitions when colors are configurable via props. Confidence: 0.65
