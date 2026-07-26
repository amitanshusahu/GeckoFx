import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  backGradientStart: "#8345ED",
  backGradientEnd: "#AF79FF",
  bubbleFill: "#D8D8D8",
  bubbleFillOpacity: "0.05",
  bubbleStrokeStart: "#B9B9B9",
  bubbleStrokeStartOpacity: "0.44",
  bubbleStrokeEnd: "#626262",
  bubbleStrokeEndOpacity: "0",
  dot1Fill: "white",
  dot2Fill: "white",
  dot3GradientStart: "white",
  dot3GradientEnd: "#D9D9D9",
} as const

type MessageBubbleColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<MessageBubbleColors>
  animate?: boolean
  popDuration?: number
  waveDuration?: number
  waveStagger?: number
}

export default function MessageBubble({
  className,
  colors,
  animate = true,
  popDuration = 0.3,
  waveDuration = 0.2,
  waveStagger = 0.1,
}: Props) {
  const uid = useId()
  const backPathId = `${uid}-back`
  const bubblePathId = `${uid}-bubble`
  const clipPathId = `${uid}-clip`
  const backGradientId = `${uid}-paint0`
  const strokeGradientId = `${uid}-paint1`
  const dot3GradientId = `${uid}-paint2`

  const resolved: MessageBubbleColors = {
    backGradientStart: colors?.backGradientStart ?? DEFAULT_COLORS.backGradientStart,
    backGradientEnd: colors?.backGradientEnd ?? DEFAULT_COLORS.backGradientEnd,
    bubbleFill: colors?.bubbleFill ?? DEFAULT_COLORS.bubbleFill,
    bubbleFillOpacity: colors?.bubbleFillOpacity ?? DEFAULT_COLORS.bubbleFillOpacity,
    bubbleStrokeStart: colors?.bubbleStrokeStart ?? DEFAULT_COLORS.bubbleStrokeStart,
    bubbleStrokeStartOpacity: colors?.bubbleStrokeStartOpacity ?? DEFAULT_COLORS.bubbleStrokeStartOpacity,
    bubbleStrokeEnd: colors?.bubbleStrokeEnd ?? DEFAULT_COLORS.bubbleStrokeEnd,
    bubbleStrokeEndOpacity: colors?.bubbleStrokeEndOpacity ?? DEFAULT_COLORS.bubbleStrokeEndOpacity,
    dot1Fill: colors?.dot1Fill ?? DEFAULT_COLORS.dot1Fill,
    dot2Fill: colors?.dot2Fill ?? DEFAULT_COLORS.dot2Fill,
    dot3GradientStart: colors?.dot3GradientStart ?? DEFAULT_COLORS.dot3GradientStart,
    dot3GradientEnd: colors?.dot3GradientEnd ?? DEFAULT_COLORS.dot3GradientEnd,
  }

  const dot2Opacity = 0.75
  const dot3Opacity = 0.5

  const easeOutBack = [0.34, 1.56, 0.64, 1] as const
  const dotInitial = { scale: 0, opacity: 0 }
  const dotAnimate = { scale: 1, opacity: 1 }

  return (
    <div>
      <svg
        className={className}
        width="342"
        height="315"
        viewBox="0 0 342 315"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="message-bubbles">
          <motion.path
            id={backPathId}
            d="M300.027 294.873C297.256 294.002 295.704 294.085 292.933 294.873C231.843 335.403 169.571 308.252 136.465 266.147C107.299 223.65 115.502 162.65 142.376 129.997C184.154 79.2346 258.056 77.7612 300.027 112.682C333.134 140.227 358.752 188.234 325.645 259.458C324.468 261.991 324.231 263.483 324.463 266.147L333.134 298.021C334.068 303.363 332.822 304.603 327.222 303.53L300.027 294.873Z"
            fill={`url(#${backGradientId})`}
            initial={animate ? { x: 100, y: 50, scale: 0, opacity: 0 } : false}
            animate={animate ? { x: 0, y: 0, scale: 1, opacity: 1 } : { opacity: 1 }}
            transition={animate ? { duration: popDuration, ease: easeOutBack } : undefined}
            style={{ transformOrigin: "300px 260px", transformBox: "fill-box" }}
          />
          <g id="message-bubble-top">
            <foreignObject x="-100" y="-100" width="485.905" height="490.172">
              <div
                {...{ xmlns: "http://www.w3.org/1999/xhtml" }}
                style={{
                  backdropFilter: "blur(50px)",
                  clipPath: `url(#${clipPathId})`,
                  height: "100%",
                  width: "100%",
                }}
              />
            </foreignObject>
            <path
              id={bubblePathId}
              data-figma-bg-blur-radius="100"
              d="M53.5772 263.32C57.0932 262.214 59.0616 262.318 62.5772 263.32C140.077 314.82 219.077 280.321 261.077 226.82C298.077 172.82 287.671 95.3116 253.577 53.8206C200.577 -10.68 106.823 -12.5522 53.5769 31.8201C11.5774 66.8203 -20.9231 127.82 21.0772 218.32C22.571 221.539 22.8711 223.434 22.5772 226.82L11.5775 267.32C10.3916 274.107 11.9728 275.684 19.0772 274.32L53.5772 263.32Z"
              fill={resolved.bubbleFill}
              fillOpacity={resolved.bubbleFillOpacity}
              stroke={`url(#${strokeGradientId})`}
              strokeWidth="3"
            />
            <g id="bubble-text">
              <motion.circle
                id={`${uid}-dot1`}
                cx="77.5769"
                cy="145.32"
                r="19.5"
                fill={resolved.dot1Fill}
                initial={animate ? dotInitial : false}
                animate={animate ? dotAnimate : { opacity: 1 }}
                transition={
                  animate
                    ? { duration: waveDuration, delay: popDuration + waveStagger * 0, ease: easeOutBack }
                    : undefined
                }
                style={{ transformOrigin: "77.5769px 145.32px" }}
              />
              <motion.circle
                id={`${uid}-dot2`}
                cx="143.577"
                cy="145.32"
                r="19.5"
                fill={resolved.dot2Fill}
                fillOpacity={dot2Opacity}
                initial={animate ? dotInitial : false}
                animate={animate ? dotAnimate : { opacity: dot2Opacity }}
                transition={
                  animate
                    ? { duration: waveDuration, delay: popDuration + waveStagger * 1, ease: easeOutBack }
                    : undefined
                }
                style={{ transformOrigin: "143.577px 145.32px" }}
              />
              <motion.circle
                id={`${uid}-dot3`}
                cx="209.577"
                cy="145.32"
                r="19.5"
                fill={`url(#${dot3GradientId})`}
                fillOpacity={dot3Opacity}
                initial={animate ? dotInitial : false}
                animate={animate ? dotAnimate : { opacity: dot3Opacity }}
                transition={
                  animate
                    ? { duration: waveDuration, delay: popDuration + waveStagger * 2, ease: easeOutBack }
                    : undefined
                }
                style={{ transformOrigin: "209.577px 145.32px" }}
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id={clipPathId} transform="translate(100 100)">
            <path d="M53.5772 263.32C57.0932 262.214 59.0616 262.318 62.5772 263.32C140.077 314.82 219.077 280.321 261.077 226.82C298.077 172.82 287.671 95.3116 253.577 53.8206C200.577 -10.68 106.823 -12.5522 53.5769 31.8201C11.5774 66.8203 -20.9231 127.82 21.0772 218.32C22.571 221.539 22.8711 223.434 22.5772 226.82L11.5775 267.32C10.3916 274.107 11.9728 275.684 19.0772 274.32L53.5772 263.32Z" />
          </clipPath>
          <radialGradient
            id={backGradientId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(229.577 201.82) rotate(90) scale(113 111.5)"
          >
            <stop stopColor={resolved.backGradientStart} />
            <stop offset="1" stopColor={resolved.backGradientEnd} />
          </radialGradient>
          <linearGradient
            id={strokeGradientId}
            x1="227.077"
            y1="260.32"
            x2="52.0769"
            y2="19.3199"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={resolved.bubbleStrokeStart} stopOpacity={resolved.bubbleStrokeStartOpacity} />
            <stop offset="1" stopColor={resolved.bubbleStrokeEnd} stopOpacity={resolved.bubbleStrokeEndOpacity} />
          </linearGradient>
          <linearGradient
            id={dot3GradientId}
            x1="191.577"
            y1="144.82"
            x2="228.077"
            y2="144.82"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={resolved.dot3GradientStart} />
            <stop offset="1" stopColor={resolved.dot3GradientEnd} stopOpacity="0.54" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}