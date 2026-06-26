import { createFileRoute } from '@tanstack/react-router'
import AudioChip from '../components/svg/AudioChip'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <AudioChip />      
    </div>
  )
}
