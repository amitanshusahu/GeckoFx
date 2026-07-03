import { useRouter } from "@tanstack/react-router"
import ServerStack from "./components/svg/ServerStack"
import Edges from "./components/ui/details/Edges"
import Logo from "./components/ui/details/Logo"
import Margin from "./components/ui/details/Margin"

function App() {

  const router = useRouter();

  return (
    <div className="bg-black min-h-screen w-screen overflow-y-auto px-4 lg:px-30 overflow-x-hidden">
      <div className="border border-y-0 border-line w-full max-w-[1300px] mx-auto h-full">
        <div className="flex items-center min-h-screen">
          <div className="w-full h-fit">
            <Margin />
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-15 text-white pl-4 lg:pl-15 py-10 lg:py-20">
              {/* hero left */}
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl lg:text-4xl">Make the Internet Less Slop</h1>
                  <p className="text-base lg:text-lg mt-4 lg:mt-7 max-w-[500px] text-neutral-400">
                    Stop shipping the same gradient, the same hero section, and the same lifeless landing pages
                  </p>
                  <button
                    onClick={() => {
                      router.navigate({ to: "/docs/server-stack" })
                    }}
                    className="mt-8 lg:mt-15 border border-dashed border-primary/40 px-6 lg:px-10 py-4 lg:py-5 relative bg-primary/15 text-[#FF86AC] text-base lg:text-lg cursor-pointer hover:bg-primary/20 transition-all duration-300"
                  >
                    Premium SVG Components
                    <Edges color="#FF4C85" opacity={100} />
                  </button>
                </div>
                <div className="mt-10 lg:mt-20">
                  <Logo />
                </div>
              </div>
              {/* hero right */}
              <div className="pl-0 lg:pl-15 flex justify-center items-center">
                <div className="w-full max-w-[420px] scale-90 lg:scale-100 origin-top flex justify-center items-center sm:block">
                  <ServerStack className="h-80 sm:h-100"/>
                </div>
              </div>
            </div>
            <Margin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App