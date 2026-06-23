import { cn } from "../../../lib/utils";
import Edges from "../details/Edges";

type ButtonProps = {
  children: React.ReactNode,
  edgeColor?: string,
  edgeOpacity?: number,
  edgeWidth?: number,
  className?: string,
  style?: React.CSSProperties,
  onClick?: () => void,
}

export default function Button({
  children,
  edgeColor,
  edgeOpacity,
  edgeWidth,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        'text-sm px-4 py-2 bg-primary/10 text-white relative cursor-pointer',
        'border border-dashed border-primary/50',
        'hover:bg-primary/20',
        'transition-all transition-duration-300',
        className
      )}
      onClick={onClick}
    >
      <Edges width={edgeWidth} color={edgeColor} opacity={edgeOpacity} />
      {children}
    </button>
  )
}