import { createLazyFileRoute } from '@tanstack/react-router'
import ServerStack from '../../components/svg/ServerStack'

export const Route = createLazyFileRoute('/docs/server-stack')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-4'>
    <div className='h-fit w-full'>

      <div className='flex flex-col gap-20 h-full w-full items-center justify-center'>
        <ServerStack />
      </div>


    </div>
  </div>
}
