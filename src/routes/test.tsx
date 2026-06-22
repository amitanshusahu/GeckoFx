import { createFileRoute } from '@tanstack/react-router'
import Gpu from '../components/svg/Gpu'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <Gpu />
    </div>
  )
}
