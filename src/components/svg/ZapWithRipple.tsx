import { motion, useReducedMotion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  zapGradientStart: "#FF4E00",
  zapGradientEnd: "#FFA96C",
  zapStroke: "#FFB97F",
  rippleStrokeStart: "#FFB97F",
  rippleStrokeStartOpacity: "0.4",
  rippleStrokeMid: "#FFB97F",
  rippleStrokeMidOpacity: "0.25",
  rippleStrokeFar: "#FFB97F",
  rippleStrokeFarOpacity: "0.1",
} as const

type ZapWithRippleColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<ZapWithRippleColors>
  animate?: boolean
  beatDuration?: number
  beatDelay?: number
  rippleDuration?: number
  rippleStagger?: number
}

export default function ZapWithRipple({
  className = "h-100",
  colors,
  animate = true,
  beatDuration = 0.9,
  beatDelay,
  rippleDuration = 1.8,
  rippleStagger = 0.15,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const shouldReduceMotion = useReducedMotion()
  const canAnimate = animate && !shouldReduceMotion

  const zapGradientId = `${uid}-paint0`

  const easeOut = [0.16, 1, 0.3, 1] as const
  const waveCycle = rippleDuration + rippleStagger * 3
  const resolvedBeatDelay = beatDelay ?? waveCycle

  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 236 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="zap-with-ripples">
          <motion.g
            id="zap-ripple-4"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
            initial={canAnimate ? { scale: 0.6, opacity: 0 } : undefined}
            animate={
              canAnimate
                ? {
                    scale: [0.6, 1.25, 1.35],
                    opacity: [0, 0.6, 0],
                  }
                : undefined
            }
            transition={
              canAnimate
                ? {
                    duration: rippleDuration,
                    delay: rippleStagger * 3,
                    ease: easeOut,
                    times: [0, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: waveCycle - rippleDuration,
                  }
                : undefined
            }
          >
            <path
              d="M6.84507 160.275L120.95 8.90296C132.527 -3.79936 143.771 -1.81363 148.05 12.9217V94.6359H216.513C232.53 94.6574 243.612 98.6547 227.923 120.088L103.834 274.139C92.2024 287.233 88.1662 287.212 86.7185 270.121V185.727H18.2555C-0.482006 185.382 -4.56556 176.35 6.84507 160.275Z"
              stroke={c.rippleStrokeFar}
              stroke-opacity={c.rippleStrokeFarOpacity}
            />
          </motion.g>
          <motion.g
            id="zap-ripple-3"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
            initial={canAnimate ? { scale: 0.6, opacity: 0 } : undefined}
            animate={
              canAnimate
                ? {
                    scale: [0.6, 1.2, 1.3],
                    opacity: [0, 0.7, 0],
                  }
                : undefined
            }
            transition={
              canAnimate
                ? {
                    duration: rippleDuration,
                    delay: rippleStagger * 2,
                    ease: easeOut,
                    times: [0, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: waveCycle - rippleDuration,
                  }
                : undefined
            }
          >
            <path
              d="M29.9435 152.802L119.771 32.4535C128.884 22.3545 137.736 23.9332 141.105 35.6486V100.616H195.001C207.61 100.633 216.335 103.811 203.984 120.851L106.297 243.331C97.1397 253.741 93.9623 253.724 92.8226 240.135V173.038H38.9263C24.1754 172.763 20.9607 165.583 29.9435 152.802Z"
              stroke={c.rippleStrokeFar}
              stroke-opacity={c.rippleStrokeFarOpacity}
            />
          </motion.g>
          <motion.g
            id="zap-ripple-2"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
            initial={canAnimate ? { scale: 0.6, opacity: 0 } : undefined}
            animate={
              canAnimate
                ? {
                    scale: [0.6, 1.15, 1.25],
                    opacity: [0, 0.8, 0],
                  }
                : undefined
            }
            transition={
              canAnimate
                ? {
                    duration: rippleDuration,
                    delay: rippleStagger,
                    ease: easeOut,
                    times: [0, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: waveCycle - rippleDuration,
                  }
                : undefined
            }
          >
            <path
              d="M46.3013 147.019L119.62 48.5998C127.058 40.3411 134.283 41.6322 137.033 51.2127V104.341H181.024C191.316 104.355 198.437 106.954 188.356 120.89L108.622 221.05C101.148 229.564 98.5544 229.55 97.6242 218.437V163.567H53.6331C41.5933 163.342 38.9694 157.47 46.3013 147.019Z"
              stroke={c.rippleStrokeMid}
              stroke-opacity={c.rippleStrokeMidOpacity}
            />
          </motion.g>
          <motion.g
            id="zap-ripple-1"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
            initial={canAnimate ? { scale: 0.6, opacity: 0 } : undefined}
            animate={
              canAnimate
                ? {
                    scale: [0.6, 1.1, 1.2],
                    opacity: [0, 1, 0],
                  }
                : undefined
            }
            transition={
              canAnimate
                ? {
                    duration: rippleDuration,
                    delay: 0,
                    ease: easeOut,
                    times: [0, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: waveCycle - rippleDuration,
                  }
                : undefined
            }
          >
            <path
              d="M62.632 140.106L118.956 64.6868C124.671 58.3581 130.221 59.3474 132.333 66.6891V107.402H166.128C174.034 107.413 179.504 109.404 171.76 120.083L110.508 196.836C104.766 203.36 102.774 203.35 102.059 194.834V152.787H68.2644C59.0153 152.614 56.9996 148.115 62.632 140.106Z"
              stroke={c.rippleStrokeStart}
              stroke-opacity={c.rippleStrokeStartOpacity}
            />
          </motion.g>
          <motion.path
            id="zap"
            d="M79 137.5L119 81.0003C123.058 76.2592 127 77.0003 128.5 82.5003V113H152.5C158.115 113.008 162 114.5 156.5 122.5L113 180C108.922 184.888 107.508 184.88 107 178.5V147H83C76.4315 146.871 75 143.5 79 137.5Z"
            fill={`url(#${zapGradientId})`}
            stroke={c.zapStroke}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
            initial={canAnimate ? { scale: 1 } : undefined}
            animate={
              canAnimate
                ? {
                    scale: [1, 1.18, 1, 1.12, 1],
                  }
                : undefined
            }
            transition={
              canAnimate
                ? {
                    duration: beatDuration,
                    delay: resolvedBeatDelay,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.3, 0.45, 1],
                    repeat: Infinity,
                    repeatDelay: Math.max(0, waveCycle - beatDuration),
                  }
                : undefined
            }
          />
        </g>
        <defs>
          <linearGradient
            id={zapGradientId}
            x1="117.966"
            y1="77.864"
            x2="117.966"
            y2="183.494"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={c.zapGradientStart} />
            <stop offset="1" stop-color={c.zapGradientEnd} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
