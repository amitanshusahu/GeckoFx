import { createFileRoute } from '@tanstack/react-router'
import RadarScan from '../components/svg/RadarScan'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <RadarScan />
    </div>
  )
}
