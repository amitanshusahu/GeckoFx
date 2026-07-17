import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  dartPath: "black",
  disc1: "#FCFDFC",
  disc2: "#191919",
  disc3: "#DBDBDB",
  disc4: "#222222",
  disc5: "#CFCFCF",
  disc6: "#121212",
  discGlow: "#AAFF89",
  dartPoint: "black",
  shaftGradientStart: "#237B00",
  shaftGradientMid: "#7CFF48",
  shaftGradientEnd: "white",
  shaftInnerGradientEnd: "#666666",
  flightTop: "#97F877",
  flightBottom: "#90F572",
  flightGradientStart1: "#298D01",
  flightGradientMid1: "#6EFF3D",
  flightGradientEnd1: "#8DFF69",
  flightGradientStart2: "#289100",
  flightGradientMid2: "#45FF00",
  flightGradientEnd2: "#A8FF8C",
} as const

type DartInBullseyeColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<DartInBullseyeColors>
  animate?: boolean
  animationDuration?: number
}

export default function DartInBullseye({
  className = "w-80",
  colors,
  animate = true,
  animationDuration = 0.8,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()

  const filter0Id = `${uid}-filter0`
  const filter1Id = `${uid}-filter1`
  const filter2Id = `${uid}-filter2`
  const clipPathId = `${uid}-clipPath`
  const paint0Id = `${uid}-paint0`
  const paint1Id = `${uid}-paint1`
  const paint2Id = `${uid}-paint2`
  const paint3Id = `${uid}-paint3`
  const paint4Id = `${uid}-paint4`
  const paint5Id = `${uid}-paint5`

  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 1106 1130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="dart-in-bullseye">
          <path id="dart-path" d="M502.124 789.304L1105.12 0.303619" stroke={c.dartPath} />
          <g id="aim-discs" opacity="0.74">
            <ellipse id="Ellipse 6" cx="482.251" cy="810.856" rx="167.607" ry="452.222" transform="rotate(-69 482.251 810.856)" fill={c.disc6} />
            <ellipse id="Ellipse 5" cx="485.229" cy="806.444" rx="132.497" ry="364.458" transform="rotate(-69 485.229 806.444)" fill={c.disc5} />
            <ellipse id="Ellipse 4" cx="495.687" cy="801.842" rx="98.9941" ry="256.717" transform="rotate(-69 495.687 801.842)" fill={c.disc4} />
            <ellipse id="Ellipse 3" cx="502.711" cy="792.655" rx="55.4821" ry="160.644" transform="rotate(-69 502.711 792.655)" fill={c.disc3} />
            <ellipse id="Ellipse 2" cx="504.142" cy="790.404" rx="21.7539" ry="70.5558" transform="rotate(-69 504.142 790.404)" fill={c.disc2} />
            <ellipse id="Ellipse 1" cx="504.068" cy="789.046" rx="10.6697" ry="30.0852" transform="rotate(-69 504.068 789.046)" fill={c.disc1} />
          </g>
          <g id="disc-glow">
            <g id="Rectangle 1" filter={`url(#${filter0Id})`}>
              <rect x="522.674" y="702.366" width="58.4094" height="192.018" transform="rotate(40 522.674 702.366)" fill={c.discGlow} />
            </g>
            <g id="Rectangle 2" opacity="0.6" filter={`url(#${filter1Id})`}>
              <rect x="164.96" y="688.466" width="58.4094" height="699.045" transform="rotate(-67 164.96 688.466)" fill={c.discGlow} />
            </g>
          </g>
          <motion.g
            id="dart"
            initial={animate ? { x: 350, y: -250, rotate: 20, scale: 0.2 } : undefined}
            animate={animate ? { x: 0, y: 0, rotate: 0, scale: 1 } : undefined}
            transition={animate ? { duration: animationDuration, ease: "easeOut" } : undefined}
          >
            <path id="point" d="M518.154 762.754L549.023 718.309L556.198 724.693L521.519 765.434L501.236 789.406L518.154 762.754Z" fill={c.dartPoint} />
            <g id="shaft">
              <path id="Vector 1" d="M537.928 687.304L934.928 218.804L937.928 220.804L589.928 728.804C589.928 728.804 562.428 739.304 548.428 728.804C534.732 718.531 534.595 696.47 537.928 687.304Z" fill={`url(#${paint0Id})`} />
              <g id="Vector 5" filter={`url(#${filter2Id})`}>
                <path d="M596.928 617.304L934.928 218.304L938.928 221.304L641.428 654.304C641.428 654.304 620.428 648.804 611.428 639.804C611.428 639.804 602.428 629.804 596.928 617.304Z" fill={`url(#${paint1Id})`} />
              </g>
              <foreignObject x="516.124" y="198.304" width="442.804" height="555.167"><div style={{ backdropFilter: "blur(10px)", clipPath: `url(#${clipPathId})`, height: "100%", width: "100%" }} /></foreignObject>
              <path id="Vector 4" data-figma-bg-blur-radius="20" d="M537.928 687.304L935.428 218.304L938.928 220.304L589.928 728.804C589.928 728.804 562.428 739.304 548.428 728.804C534.732 718.531 534.595 696.47 537.928 687.304Z" fill={`url(#${paint2Id})`} />
              <path id="Vector 3" d="M537.928 687.304L596.928 617.804C596.928 617.804 605.318 633.944 613.928 641.304C623.023 649.077 640.928 654.304 640.928 654.304L589.928 728.804C589.928 728.804 562.428 739.304 548.428 728.804C534.732 718.531 534.595 696.47 537.928 687.304Z" fill={`url(#${paint3Id})`} />
            </g>
            <g id="flight">
              <path id="Vector 9" d="M919.117 190.903L775.368 407.804C737.428 218.804 858.561 155.304 897.428 155.304C909.679 155.304 913.095 156.804 913.928 163.804L919.117 190.903Z" fill={c.flightTop} />
              <path id="Vector 8" d="M958.928 218.125L793.928 426.304C1014.87 385.001 1007.5 249.426 1006.44 229.898L1006.43 229.625C1005.63 214.825 991.762 213.459 984.928 214.625L958.928 218.125Z" fill={c.flightBottom} />
              <path id="Vector 6" d="M937.428 217.804L793.428 425.304C984.428 381.804 985.928 247.804 984.928 229.304C984.128 214.504 970.262 213.137 963.428 214.304L937.428 217.804Z" fill={`url(#${paint4Id})`} />
              <path id="Vector 7" d="M935.928 218.804L779.428 414.804C772.928 266.804 895.428 182.304 916.428 175.804C929.199 171.851 931.095 179.304 931.928 186.304L935.928 218.804Z" fill={`url(#${paint5Id})`} />
            </g>
          </motion.g>
        </g>
        <defs>
          <filter id={filter0Id} x="299.247" y="602.366" width="368.171" height="384.639" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
          <filter id={filter1Id} x="64.9602" y="534.7" width="866.297" height="526.905" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
          </filter>
          <filter id={filter2Id} x="576.928" y="198.304" width="382" height="476" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur" />
          </filter>
          <clipPath id={clipPathId} transform="translate(-516.124 -198.304)">
            <path d="M537.928 687.304L935.428 218.304L938.928 220.304L589.928 728.804C589.928 728.804 562.428 739.304 548.428 728.804C534.732 718.531 534.595 696.47 537.928 687.304Z" />
          </clipPath>
          <linearGradient id={paint0Id} x1="944.928" y1="207.304" x2="717.641" y2="492.734" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.shaftGradientStart} />
            <stop offset="0.513245" stopColor={c.shaftGradientMid} />
            <stop offset="1" stopColor={c.shaftGradientEnd} />
          </linearGradient>
          <linearGradient id={paint1Id} x1="944.929" y1="207.304" x2="717.641" y2="492.735" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.shaftGradientStart} />
            <stop offset="0.513245" stopColor={c.shaftGradientMid} />
            <stop offset="1" stopColor={c.shaftGradientEnd} />
          </linearGradient>
          <linearGradient id={paint2Id} x1="944.928" y1="207.304" x2="717.641" y2="492.734" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.shaftGradientStart} />
            <stop offset="0.513245" stopColor={c.shaftGradientMid} />
            <stop offset="1" stopColor={c.shaftGradientEnd} />
          </linearGradient>
          <linearGradient id={paint3Id} x1="551.928" y1="733.304" x2="640.928" y2="602.304" gradientUnits="userSpaceOnUse">
            <stop stopColor="black" />
            <stop offset="1" stopColor={c.shaftInnerGradientEnd} />
          </linearGradient>
          <linearGradient id={paint4Id} x1="952.428" y1="270.304" x2="793.928" y2="425.304" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.flightGradientStart1} />
            <stop offset="0.588955" stopColor={c.flightGradientMid1} />
            <stop offset="1" stopColor={c.flightGradientEnd1} />
          </linearGradient>
          <linearGradient id={paint5Id} x1="923.928" y1="174.304" x2="778.928" y2="415.304" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.flightGradientStart2} />
            <stop offset="0.46039" stopColor={c.flightGradientMid2} />
            <stop offset="1" stopColor={c.flightGradientEnd2} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
