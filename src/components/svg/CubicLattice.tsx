import { motion, useMotionValue, useSpring } from "motion/react"
import { useId, useRef } from "react"

const DEFAULT_COLORS = {
  primary: "#6CFF3C",
  primaryDark: "#52B133",
  cubeStroke: "#C8C8C8",
  cornerFill: "white",
  cornerSide: "#F3F3F3",
  innerCubeFill: "white",
  innerCubeSide: "#F3F3F3",
}

type CubicLatticeColors = {
  primary: string
  primaryDark: string
  cubeStroke: string
  cornerFill: string
  cornerSide: string
  innerCubeFill: string
  innerCubeSide: string
}

type Props = {
  className?: string
  colors?: Partial<CubicLatticeColors>
  float?: boolean
  floatDistance?: number
  floatDelay?: number
  magnetic?: boolean
}

export default function CubicLattice({
  className,
  colors = DEFAULT_COLORS,
  float = true,
  floatDistance = 20,
  floatDelay = 0,
  magnetic = true,
}: Props) {
  const {
    primary,
    primaryDark,
    cubeStroke,
    cornerFill,
    cornerSide,
    innerCubeFill,
    innerCubeSide,
  } = colors

  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 16, stiffness: 120, mass: 0.5 })
  const springY = useSpring(mouseY, { damping: 16, stiffness: 120, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic) return
    if (!containerRef.current) return
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

  const id = useId()

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={magnetic ? "cursor-pointer" : undefined}
    >
      <motion.div
        initial={float ? { y: floatDistance } : undefined}
        animate={{ y: float ? -floatDistance : 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: floatDelay,
        }}
      >
        <motion.svg
          className={className}
          width="326"
          height="373"
          viewBox="0 0 326 373"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ x: springX, y: springY }}
        >
          <g id={`${id}-cubic-lattice`}>
            <path id={`${id}-cube-lattice-back`} d="M162.5 10.5L317 99V275.5L162.5 364.5L9.5 275.5V99L162.5 10.5ZM9.5 275.5L162.5 188.5M317 275.5L162.5 188.5M162.5 188.5V10.5" stroke={cubeStroke} />
            <g id={`${id}-cube-inside-lattice`}>
              <g id={`${id}-inner-most-cube`}>
                <path id={`${id}-cube-top`} d="M162.5 156.5L136.5 173.5L162.5 188.5L189 173.5L162.5 156.5Z" fill={innerCubeFill} />
                <path id={`${id}-cube-sides`} d="M162.5 217L137.5 203L136.5 173.5L162.5 188.5L189 173.5L188.5 203L162.5 217Z" fill={innerCubeSide} />
              </g>
              <g id={`${id}-inner-cube`} opacity="0.7">
                <path id={`${id}-cube-top_2`} d="M162 111.5L96.5 150L162 188.5L230 150L162 111.5Z" fill={primary} />
                <path id={`${id}-cube-sides_2`} d="M162.5 262L97 225.5L96.5 150L162 188.5L230 150L228.5 225.5L162.5 262Z" fill={primaryDark} />
              </g>
            </g>
            <path id={`${id}-cube-lattice-front`} d="M318 99L162.5 188.5M162.5 188.5L8.5 99M162.5 188.5V364.5" stroke={cubeStroke} />
            <g id={`${id}-vertices`}>
              <g id={`${id}-corner`}>
                <path id={`${id}-cube-top_3`} d="M163.165 354L155 359.339L163.165 364.05L171.488 359.339L163.165 354Z" fill={cornerFill} />
                <path id={`${id}-cube-sides_3`} d="M163.165 373L155.314 368.603L155 359.339L163.165 364.05L171.488 359.339L171.331 368.603L163.165 373Z" fill={cornerSide} />
              </g>
              <g id={`${id}-corner_2`}>
                <path id={`${id}-cube-top_4`} d="M8.16529 266L0 271.339L8.16529 276.05L16.4876 271.339L8.16529 266Z" fill={cornerFill} />
                <path id={`${id}-cube-sides_4`} d="M8.16529 285L0.31405 280.603L0 271.339L8.16529 276.05L16.4876 271.339L16.3306 280.603L8.16529 285Z" fill={cornerSide} />
              </g>
              <g id={`${id}-corner_3`}>
                <path id={`${id}-cube-top_5`} d="M9.16529 92L1 97.3388L9.16529 102.05L17.4876 97.3388L9.16529 92Z" fill={cornerFill} />
                <path id={`${id}-cube-sides_5`} d="M9.16529 111L1.31405 106.603L1 97.3389L9.16529 102.05L17.4876 97.3389L17.3306 106.603L9.16529 111Z" fill={cornerSide} />
              </g>
              <g id={`${id}-corner_4`}>
                <path id={`${id}-cube-top_6`} d="M163.165 0L155 5.33884L163.165 10.0496L171.488 5.33884L163.165 0Z" fill={cornerFill} />
                <path id={`${id}-cube-sides_6`} d="M163.165 19L155.314 14.6033L155 5.33887L163.165 10.0496L171.488 5.33887L171.331 14.6033L163.165 19Z" fill={cornerSide} />
              </g>
              <g id={`${id}-corner_5`}>
                <path id={`${id}-cube-top_7`} d="M317.165 92L309 97.3388L317.165 102.05L325.488 97.3388L317.165 92Z" fill={cornerFill} />
                <path id={`${id}-cube-sides_7`} d="M317.165 111L309.314 106.603L309 97.3389L317.165 102.05L325.488 97.3389L325.331 106.603L317.165 111Z" fill={cornerSide} />
              </g>
              <g id={`${id}-corner_6`}>
                <path id={`${id}-cube-top_8`} d="M317.165 266L309 271.339L317.165 276.05L325.488 271.339L317.165 266Z" fill={cornerFill} />
                <path id={`${id}-cube-sides_8`} d="M317.165 285L309.314 280.603L309 271.339L317.165 276.05L325.488 271.339L325.331 280.603L317.165 285Z" fill={cornerSide} />
              </g>
              <g id={`${id}-corner_7`}>
                <path id={`${id}-cube-top_9`} d="M163.165 177L155 182.339L163.165 187.05L171.488 182.339L163.165 177Z" fill={cornerFill} />
                <path id={`${id}-cube-sides_9`} d="M163.165 196L155.314 191.603L155 182.339L163.165 187.05L171.488 182.339L171.331 191.603L163.165 196Z" fill={cornerSide} />
              </g>
            </g>
          </g>
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
