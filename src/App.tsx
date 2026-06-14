import ConnectCube from "./components/ConnectCube"

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#0D1117]">
      <ConnectCube
        float={true}
        floatDistance={20}
        beam={true}
      />
      <ConnectCube colors={["#FF6B6B", "#1A1A2E", "#2D2D44", "#4A3D5C", "#FFE66D"]} />
      <ConnectCube colors={["#00D9FF", "#0A0E27", "#1A1F3A", "#2A3F5C", "#FFFFFF"]} />
    </div>
  )
}

export default App
