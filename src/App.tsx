import ConnectCube from "./components/ConnectCube"
import GpuChip from "./components/GpuChip"
import GpuCluster from "./components/GpuCluster"
import ServerRack from "./components/ServerRack"

function App() {
  return (
    <div className="flex flex-col gap-20 items-center p-20 h-screen w-screen bg-black bg-[radial-gradient(#ffffff34_1px,transparent_2px)] bg-size-[24px_24px] overflow-y-auto">
      <ConnectCube
        float={false}
        floatDistance={20}
        beam={true}
      // ping={true}
      />
      <ServerRack
        float={false}
      />
      <GpuChip />
      <GpuCluster />
    </div>
  )
}

export default App