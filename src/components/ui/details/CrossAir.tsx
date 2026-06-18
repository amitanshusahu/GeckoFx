export default function CrossAir({
  className,
  color
}: {
  className?: string,
  color?: string
}) {
  return (
    <svg className={className} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5H5V8V10" stroke={color || "white"} />
      <path d="M5 0V5H10" stroke={color || "white"} />
    </svg>
  )
}