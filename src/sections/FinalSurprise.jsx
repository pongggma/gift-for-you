import { useState } from 'react'
import Bouquet from '../components/Bouquet'
import { useInView } from '../hooks/useInView'

const PETAL_COUNT = 64
const SPARKLE_COUNT = 30

export default function FinalSurprise() {
  const [ref, isVisible] = useInView()
  const [bloomed, setBloomed] = useState(false)
  const [showText, setShowText] = useState(false)

  const handleBloom = () => {
    if (bloomed) return

    setBloomed(true)

    window.setTimeout(() => {
      setShowText(true)
    }, 1200)
  }

  return (
    <section
      ref={ref}
      className={`
        reveal
        ${isVisible ? 'is-visible' : ''}
        final-garden
        relative
        flex
        min-h-svh
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-4
        py-24
        text-center
      `}
    >
      {/* background */}
      <div
        className="final-garden-stars"
        aria-hidden="true"
      />

      <div
        className="final-glow"
        aria-hidden="true"
      />

      <div
        className="final-orbit final-orbit-one"
        aria-hidden="true"
      />

      <div
        className="final-orbit final-orbit-two"
        aria-hidden="true"
      />

      <div
        className="final-orbit final-orbit-three"
        aria-hidden="true"
      />

      {/* sparkles */}
      <div
        className={`final-sparkles ${
          bloomed ? 'is-active' : ''
        }`}
        aria-hidden="true"
      >
        {Array.from({
          length: SPARKLE_COUNT,
        }).map((_, i) => {
          const angle =
            (i / SPARKLE_COUNT) *
            Math.PI *
            2

          const radius =
            180 + (i % 5) * 42

          return (
            <span
              key={i}
              style={{
                '--sx': `${Math.cos(angle) * radius}px`,
                '--sy': `${Math.sin(angle) * radius}px`,
                '--sd': `${i * 0.025}s`,
              }}
            >
              {i % 3 === 0
                ? '✦'
                : '·'}
            </span>
          )
        })}
      </div>

      {/* bouquet */}
      <button
        type="button"
        onClick={handleBloom}
        aria-label="Bloom the final bouquet"
        className={`
          final-bouquet-button
          ${bloomed ? 'is-bloomed' : ''}
        `}
      >
        <span className="final-bouquet-halo" />

        <span className="final-bouquet">
          <Bouquet
            size={1.55}
            open
          />
        </span>

        {/* petals */}
        {bloomed &&
          Array.from({
            length: PETAL_COUNT,
          }).map((_, i) => {
            const angle =
              (i / PETAL_COUNT) *
              Math.PI *
              2

            const radius =
              150 + (i % 7) * 25

            return (
              <span
                key={i}
                className="final-petal"
                style={{
                  '--px': `${Math.cos(angle) * radius}px`,
                  '--py': `${Math.sin(angle) * radius}px`,
                  '--delay': `${i * 0.012}s`,
                  '--rot': `${i * 31}deg`,
                }}
              />
            )
          })}
      </button>

      <p
        className="mt-1 font-display text-sm italic tracking-[0.22em] text-[var(--text-soft)]"
        style={{
          opacity: bloomed ? 0 : 1,
        }}
      >
        tap the bouquet
      </p>

      <p
        className="mt-5 max-w-xl font-display text-3xl italic leading-relaxed text-[var(--deep-rose)] sm:text-5xl"
        style={{
          opacity: showText ? 1 : 0,
          transform: showText
            ? 'translateY(0)'
            : 'translateY(20px)',
          transition:
            'opacity 1.4s ease, transform 1.4s ease',
        }}
      >
        Thank you for be my new friend ;D 🤍
      </p>
    </section>
  )
}