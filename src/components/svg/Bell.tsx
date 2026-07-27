import { motion, useReducedMotion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  clapperGradientStart: "#4A266A",
  clapperGradientEnd: "#B258FF",
  clapperReflectionStart: "white",
  clapperReflectionEnd: "white",
  bellFill: "#DAC9FF",
  bellFillOpacity: "0.3",
  bellStrokeGradientStart: "#E5D9FF",
  bellStrokeGradientEnd: "#E6DAFF",
  bellStrokeOpacity: "0.3",
  glareFill: "white",
} as const

type BellColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<BellColors>
  animate?: boolean
  shakeDuration?: number
}

export default function Bell({
  className,
  colors,
  animate = true,
  shakeDuration = 0.3,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const shouldReduceMotion = useReducedMotion()
  const canAnimate = animate && !shouldReduceMotion

  const filterId = `${uid}-filter0`
  const bgBlurClipId = `${uid}-bgblur-clip`
  const clapperGradientId = `${uid}-paint0`
  const clapperReflectionGradientId = `${uid}-paint1`
  const bellStrokeGradientId = `${uid}-paint2`

  return (
    <div>
      <svg
        className={className}
        width="428"
        height="406"
        viewBox="0 0 428 406"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="bell">
          <motion.g
            id="clapper"
            style={{
              transformBox: "fill-box",
              transformOrigin: "215.5px 241px",
            }}
            initial={canAnimate ? { x: 0, rotate: 0 } : undefined}
            animate={
              canAnimate
                ? {
                    x: [0, -5, 5, -5, 5, -2.5, 2.5, 0],
                    rotate: [0, -4, 4, -4, 4, -2, 2, 0],
                  }
                : undefined
            }
            transition={
              canAnimate
                ? {
                    duration: shakeDuration,
                    delay: 0.1,
                    ease: "easeOut",
                    times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
                  }
                : undefined
            }
          >
            <circle id="Ellipse 3" cx="215.519" cy="322.5" r="81.5" fill={`url(#${clapperGradientId})`} />
            <path id="Vector 5" d="M243.019 399.5L138.519 295C138.519 295 120.519 345.75 159.519 381.5C198.519 417.25 243.019 399.5 243.019 399.5Z" fill={`url(#${clapperReflectionGradientId})`} fill-opacity="0.35" />
          </motion.g>
          <foreignObject x="-80" y="-90" width="587.048" height="521.5">
            <div style={{ backdropFilter: "blur(50px)", clipPath: `url(#${bgBlurClipId})`, height: "100%", width: "100%" }} />
          </foreignObject>
          <g id="bell-top" filter={`url(#${filterId})`} data-figma-bg-blur-radius="100">
            <path d="M349.019 136V236C349.019 236 379.519 270 397.019 290C414.519 310 405.019 330 369.019 330H50.019C17.019 330 14.019 313 34.019 290C54.0191 267 77.019 236 77.019 236V136C83.019 53.4999 145.519 11.4999 210.519 11.5C275.519 11.5001 338.019 48.9999 349.019 136Z" fill={c.bellFill} fill-opacity={c.bellFillOpacity} shape-rendering="crispEdges" />
            <path d="M349.019 136V236C349.019 236 379.519 270 397.019 290C414.519 310 405.019 330 369.019 330H50.019C17.019 330 14.019 313 34.019 290C54.0191 267 77.019 236 77.019 236V136C83.019 53.4999 145.519 11.4999 210.519 11.5C275.519 11.5001 338.019 48.9999 349.019 136Z" stroke={`url(#${bellStrokeGradientId})`} stroke-opacity={c.bellStrokeOpacity} stroke-width="3" shape-rendering="crispEdges" />
          </g>
          <g id="glare">
            <circle id="Ellipse 4" cx="234.519" cy="166.5" r="24.5" fill={c.glareFill} />
            <circle id="Ellipse 5" cx="185.519" cy="123.5" r="14.5" fill={c.glareFill} />
          </g>
        </g>
        <defs>
          <filter id={filterId} x="-80" y="-90" width="587.048" height="521.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2234_37" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2234_37" result="shape" />
          </filter>
          <clipPath id={bgBlurClipId} transform="translate(80 90)">
            <path d="M349.019 136V236C349.019 236 379.519 270 397.019 290C414.519 310 405.019 330 369.019 330H50.019C17.019 330 14.019 313 34.019 290C54.0191 267 77.019 236 77.019 236V136C83.019 53.4999 145.519 11.4999 210.519 11.5C275.519 11.5001 338.019 48.9999 349.019 136Z" />
          </clipPath>
          <linearGradient id={clapperGradientId} x1="215.019" y1="298" x2="215.019" y2="404" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.clapperGradientStart} />
            <stop offset="1" stop-color={c.clapperGradientEnd} />
          </linearGradient>
          <linearGradient id={clapperReflectionGradientId} x1="159.519" y1="375.5" x2="187.519" y2="350" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.clapperReflectionStart} />
            <stop offset="1" stop-color={c.clapperReflectionEnd} stop-opacity="0" />
          </linearGradient>
          <linearGradient id={bellStrokeGradientId} x1="213.522" y1="11.5" x2="213.522" y2="330" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.bellStrokeGradientStart} stop-opacity="0" />
            <stop offset="1" stop-color={c.bellStrokeGradientEnd} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
