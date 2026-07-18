import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  boxBgStart: "#E3E3E3",
  boxBgEnd: "#F8F8F8",
  fileBgStart: "#B3AAFF",
  fileBgMid: "#7076FE",
  fileBgEnd: "#8CA3FF",
  fileFoldStart: "white",
  fileFoldMid: "#C3C3E9",
  fileFoldEnd: "white",
  boxFrontStart: "#E9EBEA",
  boxFrontEnd: "white",
  boxFront2Start: "#E9EBEA",
  boxFront2Mid: "#E4E5E7",
  boxFront2End: "white",
  boxTopStart: "white",
  boxTopEnd: "#D2D2D2",
  buttonStart: "#B9C7FF",
  buttonMid: "#7076FE",
  buttonMid2: "#8586FE",
  buttonEnd: "#B3AAFF",
  file2Fill: "white",
  file2Stroke: "#E4E5E7",
} as const

type FileUploadColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<FileUploadColors>
  animate?: boolean
  text?: string
  arrowUp?: boolean
}

export default function FileUpload({
  className = "w-80",
  colors,
  animate = true,
  text = "CSV",
  arrowUp = false,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const paint0Id = `${uid}-paint0`
  const paint1Id = `${uid}-paint1`
  const paint2Id = `${uid}-paint2`
  const paint3Id = `${uid}-paint3`
  const paint4Id = `${uid}-paint4`
  const paint5Id = `${uid}-paint5`
  const paint6Id = `${uid}-paint6`
  const filter0Id = `${uid}-filter0`
  const filter1Id = `${uid}-filter1`
  const filter2Id = `${uid}-filter2`
  const filter3Id = `${uid}-filter3`

  const fileAnim = animate
    ? { initial: { scale: 0.5, y: 40, opacity: 0 }, animate: { scale: 1, y: 0, opacity: 1 } }
    : { initial: {}, animate: {} }
  const fileTransition = animate
    ? { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] as const }
    : undefined

  const buttonAnim = animate
    ? {
      initial: { scaleY: 0.5, y: -30, opacity: 0 },
      animate: { scaleY: 1, y: 0, opacity: 1 },
    }
    : { initial: {}, animate: {} }
  const buttonTransition = animate
    ? { duration: 0.3, ease: "easeOut" as const, delay: 0 }
    : undefined

  return (
    <div>
      <svg
        className={className}
        width="327"
        height="349"
        viewBox="0 0 327 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="FileInput">
          <path
            id="box-background"
            d="M266.925 125.5H60.9252C49.0847 124.967 43.4879 126.736 35.4252 133.5L4.92519 162C0.266182 167.466 -0.696009 171.203 0.425192 179L18.4252 323.5C21.3918 335.491 26.0823 339.118 38.9252 341H285.925C296.702 340.394 300.364 336.599 302.425 323.5L325.425 184.5C327.305 172.704 325.324 167.373 317.925 159.5L285.925 130C280.599 125.845 276.514 124.78 266.925 125.5Z"
            fill={`url(#${paint0Id})`}
          />
          <motion.path
            id="file-2"
            d="M256.425 185V37.5C254.436 21.887 249.028 17.6908 233.925 16H86.925C73.1315 18.1978 69.1491 23.8551 68.425 41.5V185H256.425Z"
            fill={c.file2Fill}
            stroke={c.file2Stroke}
            strokeWidth="2"
            {...fileAnim}
            transition={fileTransition}
          />
          <motion.g
            id="file"
            filter={`url(#${filter0Id})`}
            {...fileAnim}
            transition={animate ? { ...fileTransition, delay: 0.1 } : undefined}
          >
            <path
              id="Vector 5"
              d="M57.925 195V48.5C58.2799 36.5902 62.1089 33.4329 73.425 32.5L201.925 32C207.735 33.4556 209.567 35.4634 209.925 41.5L210.925 72C211.354 83.9454 214.85 87.9841 227.425 90H258.425C265.322 90.1875 267.517 91.8305 267.925 98L266.925 197L57.925 195Z"
              fill={`url(#${paint1Id})`}
            />
            <path
              id="Vector 6"
              d="M208.143 35.206L207.425 34.5C207.69 34.712 207.929 34.9498 208.143 35.206L264.925 91C261.943 89.0663 244.536 90.0298 226.925 90C215.693 87.6657 211.98 84.4295 210.925 74.5L209.925 40.5C209.925 39.3434 209.549 36.8824 208.143 35.206Z"
              fill={`url(#${paint2Id})`}
            />
            <rect
              id="Rectangle 1"
              x="81.425"
              y="109"
              width="73"
              height="12"
              rx="6"
              fill="white"
              fillOpacity="0.21"
            />
            <foreignObject
              id="text"
              x="78"
              y="60"
              width="64"
              height="24"
            >
              <span
                style={{
                  color: "white",
                  fontSize: "24px",
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                {text}
              </span>
            </foreignObject>
          </motion.g>
          <g id="box" filter={`url(#${filter1Id})`}>
            <g id="box-front">
              <path
                id="Vector 1"
                d="M301.925 176H22.925L39.425 318C42.731 324.938 45.9205 327.324 53.925 329H266.925C273.814 326.885 277.019 324.633 281.425 318.5L301.925 176Z"
                fill={`url(#${paint3Id})`}
              />
              <path
                id="Vector 2"
                d="M55.425 329L35.925 176H286.925L266.925 329H55.425Z"
                fill={`url(#${paint4Id})`}
              />
            </g>
            <path
              id="box-top"
              d="M57.425 143.5L22.925 176H301.925L267.925 145.5V157L276.425 167H48.925L57.425 157V143.5Z"
              fill={`url(#${paint5Id})`}
            />
          </g>
          <g
            id="upload-button"
            style={{ transformOrigin: "162.925px 329px" }}
          >
            <g id="Ellipse 1">
              <g filter={`url(#${filter2Id})`}>
                <circle
                  cx="162.925"
                  cy="287.5"
                  r="61.5"
                  fill={`url(#${paint6Id})`}
                />
              </g>
              <circle
                cx="162.925"
                cy="287.5"
                r="63.5"
                stroke={c.buttonMid}
                strokeWidth="4"
              />
            </g>
            <motion.g
              id="Arrow 1"
              filter={`url(#${filter3Id})`}
              style={{
                transformOrigin: "162.925px 287.5px",
                rotate: arrowUp ? 180 : 0,
              }}
              {...buttonAnim}
              transition={buttonTransition}
            >
              <path
                d="M164.5 266.974C164.486 265.593 163.355 264.486 161.974 264.5C160.593 264.514 159.486 265.645 159.5 267.026L162 267L164.5 266.974ZM160.676 309.786C161.662 310.752 163.245 310.736 164.211 309.749L179.955 293.675C180.921 292.689 180.905 291.106 179.919 290.14C178.932 289.174 177.349 289.19 176.383 290.177L162.388 304.465L148.1 290.47C147.114 289.504 145.531 289.52 144.565 290.507C143.599 291.493 143.615 293.076 144.602 294.042L160.676 309.786ZM162 267L159.5 267.026L159.925 308.026L162.425 308L164.925 307.974L164.5 266.974L162 267Z"
                fill="white"
              />
            </motion.g>
          </g>
        </g>
        <defs>
          <filter
            id={filter0Id}
            x="27.925"
            y="0"
            width="270"
            height="225"
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
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id={filter1Id}
            x="12.925"
            y="137.5"
            width="299"
            height="205.5"
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
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id={filter2Id}
            x="97.425"
            y="222"
            width="131"
            height="141"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.764706 0 0 0 0 0.764706 0 0 0 0 0.913725 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow"
            />
          </filter>
          <filter
            id={filter3Id}
            x="139.851"
            y="264.5"
            width="44.8181"
            height="54"
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
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id={paint0Id}
            x1="163.045"
            y1="125.292"
            x2="160.425"
            y2="274.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.boxBgStart} />
            <stop offset="1" stopColor={c.boxBgEnd} stopOpacity="0.51" />
          </linearGradient>
          <linearGradient
            id={paint1Id}
            x1="60.425"
            y1="35.5"
            x2="267.425"
            y2="197"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.fileBgStart} />
            <stop offset="0.49644" stopColor={c.fileBgMid} />
            <stop offset="1" stopColor={c.fileBgEnd} />
          </linearGradient>
          <linearGradient
            id={paint2Id}
            x1="236.425"
            y1="63"
            x2="213.925"
            y2="87.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.fileFoldStart} />
            <stop offset="0.165932" stopColor={c.fileFoldMid} />
            <stop offset="1" stopColor={c.fileFoldEnd} />
          </linearGradient>
          <linearGradient
            id={paint3Id}
            x1="162.425"
            y1="176"
            x2="162.425"
            y2="329"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.boxFrontStart} />
            <stop offset="1" stopColor={c.boxFrontEnd} />
          </linearGradient>
          <linearGradient
            id={paint4Id}
            x1="161.425"
            y1="176"
            x2="161.425"
            y2="329"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.boxFront2Start} />
            <stop offset="0.48329" stopColor={c.boxFront2Mid} />
            <stop offset="1" stopColor={c.boxFront2End} />
          </linearGradient>
          <linearGradient
            id={paint5Id}
            x1="158.425"
            y1="176"
            x2="157.925"
            y2="143"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.boxTopStart} />
            <stop offset="1" stopColor={c.boxTopEnd} />
          </linearGradient>
          <linearGradient
            id={paint6Id}
            x1="131.5"
            y1="216.5"
            x2="188"
            y2="355"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.buttonStart} />
            <stop offset="0.370192" stopColor={c.buttonMid} />
            <stop offset="0.668269" stopColor={c.buttonMid2} />
            <stop offset="1" stopColor={c.buttonEnd} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
