import { useEffect, useState } from 'react'
import MusicPlayer from './components/MusicPlayer'
import FloatingFlowers from './components/FloatingFlowers'
import PetalTrail from './components/PetalTrail'
import LoadingScreen from './components/LoadingScreen'

import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import Message from './sections/Message'
import FinalSurprise from './sections/FinalSurprise'

function App() {
  const [opened, setOpened] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight

      const t =
        max > 0
          ? window.scrollY / max
          : 0

      const mix = Math.round(
        Math.sin(t * Math.PI) * 45
      )

      document.body.style.backgroundColor =
        `color-mix(in srgb, var(--soft-pink) ${mix}%, #ffffff)`
    }

    onScroll()

    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      )
    }
  }, [])

  return (
    <div className="relative min-h-screen">

      {/* loading */}
      {loading && (
        <LoadingScreen
          onDone={() => setLoading(false)}
        />
      )}

      {/* floating world */}
      <FloatingFlowers
        active={opened}
        count={34}
        withButterfly
      />

      <PetalTrail
        active={opened}
      />

      <MusicPlayer />

      <main className="relative z-10">

        {/* FIRST PAGE */}
        <Hero
          onOpen={() => setOpened(true)}
        />

        {/* AFTER OPEN */}
        <div
          className="transition-opacity duration-700"
          style={{
            opacity: opened ? 1 : 0,
            pointerEvents: opened
              ? 'auto'
              : 'none',
          }}
        >
          <Gallery />

          <Message />

          <FinalSurprise />
        </div>

      </main>
    </div>
  )
}

export default App