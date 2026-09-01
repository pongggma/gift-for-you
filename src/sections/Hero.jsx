import { useState } from 'react'
import RoomScene from '../components/RoomScene'
import GiftButton from '../components/GiftButton'

export default function Hero({ onOpen }) {
  const [leaving, setLeaving] = useState(false)

  const handleOpen = () => {
    if (leaving) return

    setLeaving(true)

    window.setTimeout(() => {
      onOpen()
    }, 550)

    window.setTimeout(() => {
      document.getElementById('gallery')?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 850)
  }

  return (
    <section className="hero-room relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-10 text-center">
      {/* ROOM */}
      <div className={`hero-room-wrap ${leaving ? 'is-leaving' : ''}`}>
        <RoomScene />
      </div>

      {/* TEXT */}
      <div className={`hero-copy ${leaving ? 'is-leaving' : ''}`}>
        <p className="font-display text-[2.8rem] italic leading-none text-[var(--deep-rose)] sm:text-5xl">
          NumThip <span aria-hidden="true">♡</span>
        </p>

        <p className="mt-3 font-display text-sm italic tracking-[0.18em] text-[var(--text-soft)] sm:text-base">
          a little place made with care
        </p>

        <div className="mt-7">
          <GiftButton onClick={handleOpen}>
            Open it
          </GiftButton>
        </div>
      </div>
    </section>
  )
}