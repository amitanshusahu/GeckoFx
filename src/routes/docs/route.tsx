import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { List, X } from '@phosphor-icons/react'
import Logo from '../../components/ui/details/Logo'
import Margin from '../../components/ui/details/Margin'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SideBar from '../../components/ui/layout/SideBar'
import RightSideBar from '../../components/ui/layout/RightSideBar'
import SponsorButton from '../../components/ui/SponsorButton'

export const Route = createFileRoute('/docs')({
  component: DocsLayoutComponent,
})

function DocsLayoutComponent() {

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useLayoutEffect(() => {
    if (elementRef.current) {
      // clientHeight includes padding but excludes borders and margins
      setHeight(elementRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        setHeight(elementRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bg-black w-screen h-screen flex flex-col text-white overflow-hidden'>

      {/* top bar */}
      <div className='grid grid-cols-[auto_1fr_auto] lg:grid-cols-[20%_60%_20%]'>
        <div className='p-4 pl-4 lg:pl-8 flex items-center gap-3'>
          <button
            className='lg:hidden text-white p-1 cursor-pointer'
            onClick={() => setMobileNavOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? <X size={22} /> : <List size={22} />}
          </button>
          <Logo />
        </div>
        <div className='hidden lg:grid lg:grid-cols-[--spacing(10)_1fr_--spacing(10)]'>
        </div>
        <div className='p-4 px-4 lg:px-8 flex items-center justify-end'>
          <SponsorButton />
        </div>
      </div>

      {/* margin */}
      <div className='grid grid-cols-1 lg:grid-cols-[20%_60%_20%]'>
        <div></div>
        <div className='grid grid-cols-1 lg:grid-cols-[--spacing(10)_1fr_--spacing(10)]'>
          <div></div>
          <div>
            <Margin className='h-6' edges={false} />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>

      {/* content */}
      <div className='grid grid-cols-1 lg:grid-cols-[20%_60%_20%] h-full'>
        <div className='hidden lg:block pt-4'>
          <div className='w-full overflow-y-auto px-8 scrollbar-none' style={{ height: `${height}px` }}>
            <SideBar />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-[--spacing(10)_1fr_--spacing(10)]'>
          <Margin className='h-full w-full hidden lg:block' vertical edgesWidth={7} />
          <div ref={elementRef} className='relative h-full w-full '>
            <div className='w-full overflow-y-auto scrollbar-thin px-4 lg:px-0' style={{ height: `${height}px` }}>
              <Outlet />
            </div>
          </div>
          <Margin className='h-full w-full hidden lg:block' vertical edgesWidth={7} />
        </div>
        <div className='hidden lg:block px-4 pt-4 pl-8'>
          <RightSideBar />
        </div>
      </div>

      {/* margin */}
      <div className='grid grid-cols-1 lg:grid-cols-[20%_60%_20%]'>
        <div></div>
        <div className='grid grid-cols-1 lg:grid-cols-[--spacing(10)_1fr_--spacing(10)]'>
          <div></div>
          <div>
            <Margin className='h-6' edges={false} />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>

      {/* footer */}
      <div className='grid grid-cols-1 lg:grid-cols-[20%_60%_20%] h-10'>
        <div className='p-4' />
        <div className='p-4' />
      </div>

      {/* mobile nav drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <motion.div
              className='fixed inset-0 bg-black/60 z-40 lg:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileNavOpen(false)}
            />
            <motion.div
              className='fixed top-0 left-0 h-full w-[80vw] max-w-[320px] bg-black border-r border-line z-100 lg:hidden overflow-y-auto px-6 py-6 scrollbar-none'
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <SideBar onNavigate={() => setMobileNavOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  )
}
