import { createFileRoute } from '@tanstack/react-router'
import ConnectCube from '../../components/svg/ConnectCube'
import GpuChip from '../../components/svg/GpuChip'
import GpuCluster from '../../components/svg/GpuCluster'
import ServerRack from '../../components/svg/ServerRack'
import ServerStack from '../../components/svg/ServerStack'

export const Route = createFileRoute('/docs/server-rack')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-4'>
      <div className='h-fit w-full'>

        <div className='flex flex-col gap-20 h-full w-full items-center justify-center'>
          <ConnectCube />
          <GpuChip />
          <GpuCluster />
          <ServerRack />
          <ServerStack />
        </div>


      </div>
    </div>
  )
}
