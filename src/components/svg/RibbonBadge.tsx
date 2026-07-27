import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  ribbonGradientStart: "#FCB810",
  ribbonGradientMiddle: "#DF773C",
  ribbonGradientEnd: "#FC9A10",
  ribbonGradientMiddleOffset: "0.516916",
  ribbonGradientEndOffset: "0.956731",
  badgeFill: "#FF8A57",
  badgeFillOpacity: "0.11",
  badgeStroke: "white",
  badgeStrokeOpacity: "0.27",
  circleFill: "#FF7D45",
  circleFillOpacity: "0.11",
  circleStroke: "white",
  circleStrokeOpacity: "0.27",
  centerDotFill: "white",
} as const

type RibbonBadgeColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<RibbonBadgeColors>
  animate?: boolean
  popDuration?: number
}

export default function RibbonBadge({
  className = "h-80",
  colors,
  animate = true,
  popDuration = 0.4,
}: Props) {
  const uid = useId()
  const filterId = `${uid}-filter0`
  const clip0Id = `${uid}-clip0`
  const clip1Id = `${uid}-clip1`
  const paint0Id = `${uid}-paint0`
  const paint1Id = `${uid}-paint1`

  const resolved: RibbonBadgeColors = {
    ribbonGradientStart: colors?.ribbonGradientStart ?? DEFAULT_COLORS.ribbonGradientStart,
    ribbonGradientMiddle: colors?.ribbonGradientMiddle ?? DEFAULT_COLORS.ribbonGradientMiddle,
    ribbonGradientEnd: colors?.ribbonGradientEnd ?? DEFAULT_COLORS.ribbonGradientEnd,
    ribbonGradientMiddleOffset: colors?.ribbonGradientMiddleOffset ?? DEFAULT_COLORS.ribbonGradientMiddleOffset,
    ribbonGradientEndOffset: colors?.ribbonGradientEndOffset ?? DEFAULT_COLORS.ribbonGradientEndOffset,
    badgeFill: colors?.badgeFill ?? DEFAULT_COLORS.badgeFill,
    badgeFillOpacity: colors?.badgeFillOpacity ?? DEFAULT_COLORS.badgeFillOpacity,
    badgeStroke: colors?.badgeStroke ?? DEFAULT_COLORS.badgeStroke,
    badgeStrokeOpacity: colors?.badgeStrokeOpacity ?? DEFAULT_COLORS.badgeStrokeOpacity,
    circleFill: colors?.circleFill ?? DEFAULT_COLORS.circleFill,
    circleFillOpacity: colors?.circleFillOpacity ?? DEFAULT_COLORS.circleFillOpacity,
    circleStroke: colors?.circleStroke ?? DEFAULT_COLORS.circleStroke,
    circleStrokeOpacity: colors?.circleStrokeOpacity ?? DEFAULT_COLORS.circleStrokeOpacity,
    centerDotFill: colors?.centerDotFill ?? DEFAULT_COLORS.centerDotFill,
  }

  const easeOutBack = [0.34, 1.56, 0.64, 1] as const

  const ribbonPath1 =
    "M25.6192 375.347L106.619 363.847L138.619 438.347L243.619 246.347L138.619 188.347L25.6192 375.347Z"
  const ribbonPath2 =
    "M352.119 375.347L271.119 363.847L239.119 438.347L134.119 246.347L239.119 188.347L352.119 375.347Z"
  const badgePath =
    "M196.619 339.347C194.536 342.773 183.554 343.794 179.619 339.347L169.119 328.347C163.652 324.62 160.587 324.566 155.119 328.347L144.119 334.347C137.292 337.827 134.335 336.799 130.119 331.347L123.619 318.847C120.374 310.312 117.205 309.658 110.619 311.347L95.6192 312.847C89.5447 313.112 87.2517 311.222 85.6192 303.347L83.1192 290.347C81.5679 282.675 78.9804 281.043 72.6192 280.847L60.6192 278.347C53.3416 276.832 52.2903 273.501 53.1192 265.347V253.347C54.7093 244.511 52.02 242.226 45.6192 239.347L33.6192 232.847C25.8848 229.12 25.6224 225.829 30.6192 218.347L36.1192 208.347C41.2332 201.468 40.7799 198.401 36.1192 193.847L25.1192 183.347C18.9708 175.627 19.7608 171.721 27.1192 165.347L36.1192 155.347C41.1803 150.661 39.811 148.033 36.1192 143.347L30.6192 133.847C26.4899 125.826 27.0611 122.507 33.6192 118.847L47.1192 112.847C55.1478 108.799 56.6197 105.047 54.1192 95.847L51.6192 84.847C49.3961 77.5844 50.5494 75.1741 57.6192 74.3471L73.6192 71.8471C81.8172 70.9697 84.43 68.858 85.1192 61.8471L87.1192 48.3471C88.2868 40.9019 90.5593 39.0505 97.1192 39.347L111.619 41.847C121.352 42.9214 124.653 40.4915 127.119 31.347L131.619 21.347C134.584 14.7027 137.489 14.5258 144.119 18.347L156.119 24.347C162.477 26.3926 165.85 25.5163 171.619 21.347L180.619 14.347C186.868 9.61577 190.371 10.1612 196.619 14.347L207.119 22.847C213.368 27.6879 216.871 27.2778 223.119 22.847L231.119 18.347C237.682 13.6488 240.948 15.1451 246.119 24.347L252.619 34.347C255.669 39.8231 258.855 40.326 265.619 39.347H279.619C286.143 39.4392 288.524 41.4525 290.619 48.3471L292.619 61.8471C294.658 68.6733 296.734 71.4709 304.619 71.8471L319.619 74.3471C324.396 77.0258 326.06 79.1203 325.619 84.847L322.619 95.847C321.152 103.12 323.13 106.854 332.119 112.847L344.619 120.347C349.387 122.997 349.472 125.38 346.119 130.847L341.119 140.847C336.82 148.227 336.958 152.504 341.119 160.347L351.119 168.847C357.369 173.819 357.448 176.986 351.119 183.347L341.119 193.847C337.098 198.112 337.147 201.304 341.119 208.347L346.119 219.847C348.721 225.41 348.037 228.3 341.119 232.847L329.619 239.347C323.21 242.631 322.215 245.803 324.119 253.347V266.847C324.116 273.854 322.568 276.366 317.119 278.347L301.619 280.847C295.552 282.508 293.103 284.422 292.619 291.847L290.119 304.847C289.574 312.301 286.617 313.571 278.619 312.847L265.119 311.347C258.563 309.821 255.565 311.319 251.619 318.847L246.119 331.347C241.416 337.544 237.9 337.745 230.619 334.347L221.119 328.347C213.204 325.143 209.287 325.921 203.119 331.347L196.619 339.347Z"

  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 377 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ribbon-badge">
          <g id="ribbons">
            <motion.path
              id="Vector 1"
              d={ribbonPath1}
              fill={`url(#${paint0Id})`}
              initial={animate ? { scale: 0, opacity: 0 } : false}
              animate={animate ? { scale: 1, opacity: 1 } : { opacity: 1 }}
              transition={animate ? { duration: popDuration, ease: easeOutBack } : undefined}
              style={{ transformOrigin: "134.619px 313.347px", transformBox: "fill-box" }}
            />
            <motion.path
              id="Vector 3"
              d={ribbonPath2}
              fill={`url(#${paint1Id})`}
              initial={animate ? { scale: 0, opacity: 0 } : false}
              animate={animate ? { scale: 1, opacity: 1 } : { opacity: 1 }}
              transition={
                animate
                  ? { duration: popDuration, ease: easeOutBack, delay: 0.08 }
                  : undefined
              }
              style={{ transformOrigin: "243.119px 313.347px", transformBox: "fill-box" }}
            />
          </g>
          <g id="badge">
            <foreignObject x="-80" y="-90" width="536.836" height="533.312">
              <div
                {...{ xmlns: "http://www.w3.org/1999/xhtml" }}
                style={{
                  backdropFilter: "blur(50px)",
                  clipPath: `url(#${clip0Id})`,
                  height: "100%",
                  width: "100%",
                }}
              />
            </foreignObject>
            <g id="Vector 3_2" filter={`url(#${filterId})`} data-figma-bg-blur-radius="100">
              <path
                d={badgePath}
                fill={resolved.badgeFill}
                fillOpacity={resolved.badgeFillOpacity}
                shapeRendering="crispEdges"
              />
              <path
                d={badgePath}
                stroke={resolved.badgeStroke}
                strokeOpacity={resolved.badgeStrokeOpacity}
                strokeWidth="2"
                shapeRendering="crispEdges"
              />
            </g>
            <foreignObject x="-22.8808" y="-33.653" width="421" height="421">
              <div
                {...{ xmlns: "http://www.w3.org/1999/xhtml" }}
                style={{
                  backdropFilter: "blur(50px)",
                  clipPath: `url(#${clip1Id})`,
                  height: "100%",
                  width: "100%",
                }}
              />
            </foreignObject>
            <g id="Ellipse 1" data-figma-bg-blur-radius="100">
              <circle
                cx="187.619"
                cy="176.847"
                r="110.5"
                fill={resolved.circleFill}
                fillOpacity={resolved.circleFillOpacity}
              />
              <circle
                cx="187.619"
                cy="176.847"
                r="109.5"
                stroke={resolved.circleStroke}
                strokeOpacity={resolved.circleStrokeOpacity}
                strokeWidth="2"
              />
            </g>
            <circle id="Ellipse 2" cx="187.619" cy="176.847" r="15.5" fill={resolved.centerDotFill} />
          </g>
        </g>
        <defs>
          <filter
            id={filterId}
            x="-80"
            y="-90"
            width="536.836"
            height="533.312"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <clipPath id={clip0Id} transform="translate(80 90)">
            <path d={badgePath} />
          </clipPath>
          <clipPath id={clip1Id} transform="translate(22.8808 33.653)">
            <circle cx="187.619" cy="176.847" r="110.5" />
          </clipPath>
          <linearGradient
            id={paint0Id}
            x1="55.1191"
            y1="330.347"
            x2="166.119"
            y2="406.847"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={resolved.ribbonGradientStart} />
            <stop offset={resolved.ribbonGradientMiddleOffset} stopColor={resolved.ribbonGradientMiddle} />
            <stop offset={resolved.ribbonGradientEndOffset} stopColor={resolved.ribbonGradientEnd} />
          </linearGradient>
          <linearGradient
            id={paint1Id}
            x1="322.619"
            y1="330.347"
            x2="211.619"
            y2="406.847"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={resolved.ribbonGradientStart} />
            <stop offset={resolved.ribbonGradientMiddleOffset} stopColor={resolved.ribbonGradientMiddle} />
            <stop offset={resolved.ribbonGradientEndOffset} stopColor={resolved.ribbonGradientEnd} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
