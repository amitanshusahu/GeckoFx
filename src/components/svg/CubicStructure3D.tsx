import { motion, useMotionValue, useSpring } from "motion/react"
import { useId, useRef } from "react"

const DEFAULT_COLORS = {
  cubeFaceDark: "#151515",
  cubeFaceLight: "#7E7E7E",
  cubeFaceLightOpacity: 0.4,
  centerHexFill: "#151515",
  glowColor: "white",
  wireframeG1Start: "#555555",
  wireframeG1Mid: "#393939",
  wireframeG1End: "#585858",
  wireframeG2Start: "#6E6E6E",
  wireframeG2End: "#BCBCBC",
  wireframeG3Start: "#737373",
  wireframeG3End: "#BCBCBC",
  wireframeG4Start: "#BCBCBC",
  wireframeG4End: "#626262",
  wireframeSecondary: "#D9D9D9",
} as const

type CubicStructure3DColors = {
  [K in keyof typeof DEFAULT_COLORS]: (typeof DEFAULT_COLORS)[K]
}

type Props = {
  className?: string
  colors?: Partial<CubicStructure3DColors>
  float?: boolean
  floatDistance?: number
  magnetic?: boolean
}

export default function CubicStructure3D({
  className,
  colors,
  float = true,
  floatDistance = 8,
  magnetic = true,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const id = useId()
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX1 = useSpring(mouseX, { damping: 16, stiffness: 120, mass: 0.5 })
  const springY1 = useSpring(mouseY, { damping: 16, stiffness: 120, mass: 0.5 })
  const springX2 = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 0.6 })
  const springY2 = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 0.6 })
  const springX3 = useSpring(mouseX, { damping: 14, stiffness: 140, mass: 0.4 })
  const springY3 = useSpring(mouseY, { damping: 14, stiffness: 140, mass: 0.4 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const offsetX = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 10
    const offsetY = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * 10
    mouseX.set(offsetX)
    mouseY.set(offsetY)
  }

  const handleMouseLeave = () => {
    if (!magnetic) return
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={float ? { y: [floatDistance, -floatDistance] } : undefined}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <svg
        className={className}
        width="501"
        height="504"
        viewBox="0 0 501 504"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id={`${id}-3d-cubic-structure`}>
          <g id={`${id}-glow`}>
            <g id={`${id}-Ellipse-1`} filter={`url(#${id}-filter0)`}>
              <ellipse cx="174" cy="374" rx="31" ry="30" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-2`} filter={`url(#${id}-filter1)`}>
              <ellipse cx="131" cy="271" rx="31" ry="30" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-3`} filter={`url(#${id}-filter2)`}>
              <ellipse cx="188" cy="150" rx="31" ry="30" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-4`} filter={`url(#${id}-filter3)`}>
              <ellipse cx="296" cy="130" rx="31" ry="30" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-5`} filter={`url(#${id}-filter4)`}>
              <ellipse cx="370" cy="254" rx="31" ry="30" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-6`} filter={`url(#${id}-filter5)`}>
              <ellipse cx="316" cy="363" rx="31" ry="30" fill={c.glowColor} />
            </g>
          </g>
          <g id={`${id}-connected-cube-structure`}>
            <g id={`${id}-connected-cube`}>
              <rect id={`${id}-Rectangle-1`} width="64.3479" height="64.3479" transform="matrix(0.866025 -0.5 0.866025 0.5 194 128.174)" fill={`url(#${id}-paint0)`} />
              <rect id={`${id}-Rectangle-4`} width="97.0427" height="64.3479" transform="matrix(0.866025 -0.5 0.866025 0.5 111 272.521)" fill={`url(#${id}-paint1)`} />
              <rect id={`${id}-Rectangle-12`} width="97.0427" height="64.3479" transform="matrix(-0.866025 -0.5 -0.866025 0.5 388.768 274.521)" fill={`url(#${id}-paint2)`} />
              <path id={`${id}-Rectangle-9`} d="M249 160.174L304.727 128V225.459L249 257.633V160.174Z" fill={`url(#${id}-paint3)`} />
              <rect id={`${id}-Rectangle-13`} width="64.3479" height="97.4591" transform="matrix(-0.866025 -0.5 0 1 249.727 160.174)" fill={`url(#${id}-paint4)`} />
              <rect id={`${id}-Rectangle-5`} width="96.9949" height="64.3479" transform="matrix(0.866025 -0.5 0 1 166 304.174)" fill={`url(#${id}-paint5)`} />
              <rect id={`${id}-Rectangle-10`} width="98.1495" height="64.3479" transform="matrix(-0.866025 -0.5 0 1 333 306.497)" fill={`url(#${id}-paint6)`} />
              <rect id={`${id}-Rectangle-2`} width="64.3479" height="64.3479" transform="matrix(0.866025 0.5 0 1 111 272)" fill={`url(#${id}-paint7)`} />
              <rect id={`${id}-Rectangle-11`} width="64.3479" height="64.3479" transform="matrix(-0.866025 0.5 0 1 388.727 274)" fill={`url(#${id}-paint8)`} />
            </g>
            <g id={`${id}-connected-cube-2`} opacity="0.29">
              <g id={`${id}-Group-3`}>
                <rect id={`${id}-Rectangle-3`} width="34.641" height="99.0329" transform="matrix(0.866025 -0.5 0 1 250 160.321)" fill={c.wireframeSecondary} />
                <rect id={`${id}-Rectangle-10-2`} width="36.1751" height="97.9789" transform="matrix(0.866025 0.5 0 1 219 143)" fill={c.wireframeSecondary} />
              </g>
              <g id={`${id}-Group-1`}>
                <rect id={`${id}-Rectangle-7`} width="35.8117" height="94.9733" transform="matrix(0.866025 -0.5 0.866025 0.5 250 258.906)" fill={c.wireframeSecondary} />
                <rect id={`${id}-Rectangle-6`} width="95.3744" height="31.42" transform="matrix(0.866025 0.5 0 1 250 259.03)" fill={c.wireframeSecondary} />
              </g>
              <g id={`${id}-Group-2`}>
                <rect id={`${id}-Rectangle-7-2`} width="35.8117" height="94.9733" transform="matrix(-0.866025 -0.5 -0.866025 0.5 249.263 256.906)" fill={c.wireframeSecondary} />
                <rect id={`${id}-Rectangle-6-2`} width="95.3744" height="31.42" transform="matrix(-0.866025 0.5 0 1 249.263 257.03)" fill={c.wireframeSecondary} />
              </g>
            </g>
          </g>
          <motion.g
            id={`${id}-cube`}
            style={magnetic ? { x: springX1, y: springY1 } : undefined}
          >
            <rect id={`${id}-Rectangle-1-2`} width="64.3479" height="64.3479" transform="matrix(0.866025 -0.5 0.866025 0.5 111 176.174)" fill={c.cubeFaceDark} />
            <rect id={`${id}-Rectangle-3-2`} width="64.3479" height="64.3479" transform="matrix(0.866025 -0.5 0 1 166 208.174)" fill={c.cubeFaceLight} fillOpacity={c.cubeFaceLightOpacity} />
            <rect id={`${id}-Rectangle-2-2`} width="64.3479" height="64.3479" transform="matrix(0.866025 0.5 0 1 111 176)" fill={c.cubeFaceDark} />
          </motion.g>
          <motion.g
            id={`${id}-cube-2`}
            style={magnetic ? { x: springX2, y: springY2 } : undefined}
          >
            <rect id={`${id}-Rectangle-1-3`} width="64.3479" height="64.3479" transform="matrix(0.866025 -0.5 0.866025 0.5 278 176.174)" fill={c.cubeFaceDark} />
            <rect id={`${id}-Rectangle-3-3`} width="64.3479" height="64.3479" transform="matrix(0.866025 -0.5 0 1 333 208.174)" fill={c.cubeFaceDark} />
            <rect id={`${id}-Rectangle-2-3`} width="64.3479" height="64.3479" transform="matrix(0.866025 0.5 0 1 278 176)" fill={c.cubeFaceLight} fillOpacity={c.cubeFaceLightOpacity} />
          </motion.g>
          <motion.g
            id={`${id}-cube-3`}
            style={magnetic ? { x: springX3, y: springY3 } : undefined}
          >
            <rect id={`${id}-Rectangle-1-4`} width="64.3479" height="64.3479" transform="matrix(0.866025 -0.5 0.866025 0.5 193 321.174)" fill={c.cubeFaceLight} fillOpacity={c.cubeFaceLightOpacity} />
            <rect id={`${id}-Rectangle-3-4`} width="64.3479" height="64.3479" transform="matrix(0.866025 -0.5 0 1 248 353.174)" fill={c.cubeFaceDark} />
            <rect id={`${id}-Rectangle-2-4`} width="64.3479" height="64.3479" transform="matrix(0.866025 0.5 0 1 193 321)" fill={c.cubeFaceDark} />
          </motion.g>
          <g id={`${id}-glow-2`}>
            <g id={`${id}-Ellipse-1-2`} filter={`url(#${id}-filter6)`}>
              <ellipse cx="199" cy="330.5" rx="14" ry="13.5" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-2-2`} filter={`url(#${id}-filter7)`}>
              <ellipse cx="157.5" cy="251" rx="15.5" ry="15" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-3-2`} filter={`url(#${id}-filter8)`}>
              <ellipse cx="203.5" cy="173" rx="15.5" ry="15" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-4-2`} filter={`url(#${id}-filter9)`}>
              <circle cx="294" cy="173" r="13" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-5-2`} filter={`url(#${id}-filter10)`}>
              <circle cx="340.5" cy="257.5" r="13.5" fill={c.glowColor} />
            </g>
            <g id={`${id}-Ellipse-6-2`} filter={`url(#${id}-filter11)`}>
              <circle cx="297.5" cy="331.5" r="12.5" fill={c.glowColor} />
            </g>
          </g>
          <motion.path id={`${id}-Polygon-1`} d="M250.5 192L307.225 224V288L250.5 320L193.775 288V224L250.5 192Z" fill={c.centerHexFill} style={magnetic ? { x: springX1, y: springY1 } : undefined}/>
        </g>
        <defs>
          <filter id={`${id}-filter0`} x="43" y="244" width="262" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter1`} x="0" y="141" width="262" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter2`} x="57" y="20" width="262" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter3`} x="165" y="0" width="262" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter4`} x="239" y="124" width="262" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter5`} x="185" y="233" width="262" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter6`} x="135" y="267" width="128" height="127" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter7`} x="92" y="186" width="131" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter8`} x="138" y="108" width="131" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter9`} x="231" y="110" width="126" height="126" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter10`} x="277" y="194" width="127" height="127" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur" />
          </filter>
          <filter id={`${id}-filter11`} x="235" y="269" width="125" height="125" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient id={`${id}-paint0`} x1="-0.79446" y1="34.8581" x2="30.0815" y2="64.0596" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG1Start} />
            <stop offset="0.496347" stopColor={c.wireframeG1Mid} />
            <stop offset="1" stopColor={c.wireframeG1End} />
          </linearGradient>
          <linearGradient id={`${id}-paint1`} x1="48.5213" y1="-3.16906e-07" x2="44.7028" y2="45.6236" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG2Start} />
            <stop offset="1" stopColor={c.wireframeG2End} />
          </linearGradient>
          <linearGradient id={`${id}-paint2`} x1="48.5213" y1="-3.16906e-07" x2="44.7028" y2="45.6236" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG2Start} />
            <stop offset="1" stopColor={c.wireframeG2End} />
          </linearGradient>
          <linearGradient id={`${id}-paint3`} x1="302.628" y1="186.152" x2="273.608" y2="188.981" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG3Start} />
            <stop offset="1" stopColor={c.wireframeG3End} />
          </linearGradient>
          <linearGradient id={`${id}-paint4`} x1="61.9248" y1="56.9405" x2="30.259" y2="60.3155" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG3Start} />
            <stop offset="1" stopColor={c.wireframeG3End} />
          </linearGradient>
          <linearGradient id={`${id}-paint5`} x1="28.8675" y1="19.7598" x2="31.2969" y2="66.4083" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG4Start} />
            <stop offset="1" stopColor={c.wireframeG4End} />
          </linearGradient>
          <linearGradient id={`${id}-paint6`} x1="29.2112" y1="19.7598" x2="31.6121" y2="66.4112" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG4Start} />
            <stop offset="1" stopColor={c.wireframeG4End} />
          </linearGradient>
          <linearGradient id={`${id}-paint7`} x1="-1.74429e-07" y1="33.5" x2="32.41" y2="68.2499" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG1End} />
            <stop offset="0.496899" stopColor={c.wireframeG1Mid} />
            <stop offset="1" stopColor={c.wireframeG1Start} />
          </linearGradient>
          <linearGradient id={`${id}-paint8`} x1="-1.74429e-07" y1="33.5" x2="32.41" y2="68.2499" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.wireframeG1End} />
            <stop offset="0.496899" stopColor={c.wireframeG1Mid} />
            <stop offset="1" stopColor={c.wireframeG1Start} />
          </linearGradient>
        </defs>
        </svg>
      </motion.div>
    </motion.div>
  )
}
