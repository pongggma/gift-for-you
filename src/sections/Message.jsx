import { useState } from 'react'
import Flower from '../components/Flower'
import { useInView } from '../hooks/useInView'

export default function Message() {
  const [ref, isVisible] = useInView()
  const [revealed, setRevealed] = useState(false)

  return (
    <section ref={ref} className="px-6 py-24 sm:py-32">
      <div
        className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto flex max-w-md flex-col items-center text-center`}
      >
        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            aria-label="Open the hidden message"
            className="flex flex-col items-center gap-3 text-[var(--deep-rose)] transition-transform duration-500 hover:scale-105"
          >
            <span style={{ display: 'inline-block', animation: 'float-y 3.5s ease-in-out infinite' }}>
              <Flower type="blossom" size={40} />
            </span>
            <span className="font-display text-lg italic">♡ tap the flower</span>
          </button>
        ) : (
          <p
            className="font-display text-2xl italic leading-relaxed text-[var(--text)] sm:text-3xl"
            style={{ animation: 'fade-up 0.9s ease' }}
          >
            A small gift, for a little friend. I hope you like it. 🤍
          </p>
        )}
      </div>
    </section>
  )
}
