import { useEffect, useRef, useState } from 'react'
import { photos } from '../data/photos'
import { useInView } from '../hooks/useInView'

const ASPECT_CLASS = {
  tall: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[4/3]',
}

const STEP_MS = 480 // gap between one photo appearing and the next — unhurried, one at a time

function PhotoFrame({ photo, onError, broken }) {
  return (
    <div className={`${ASPECT_CLASS[photo.aspect]} relative overflow-hidden bg-[var(--light-pink)]`}>
      {!broken ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          onError={onError}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--text-soft)]">
          <Flower type="blossom" size={30} />
          <span className="font-display text-sm italic">a memory, waiting</span>
        </div>
      )}
    </div>
  )
}

function PhotoCard({ photo, delay, visible, onOpen }) {
  const [broken, setBroken] = useState(false)

  return (
    <figure
      className="relative mb-6 break-inside-avoid"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `rotate(${photo.rotate}deg) translateY(0) scale(1)`
          : 'translateY(30px) scale(0.95)',
        transition: 'opacity 0.9s ease, transform 0.9s ease',
        transitionDelay: `${delay}ms`,
      }}
    >
      <button
        type="button"
        onClick={() => !broken && onOpen()}
        aria-label="View photo full size"
        className="block w-full rounded-[3px] bg-white p-2.5 pb-5 text-left shadow-[0_10px_30px_-14px_rgba(74,65,69,0.3)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_-14px_rgba(74,65,69,0.4)]"
      >
        <PhotoFrame photo={photo} broken={broken} onError={() => setBroken(true)} />
      </button>

    </figure>
  )
}

const SWIPE_THRESHOLD_PX = 40

function Lightbox({ photo, index, total, onClose, onPrev, onNext }) {
  const touchStartX = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current
    touchStartX.current = null
    if (dx > SWIPE_THRESHOLD_PX) onPrev()
    else if (dx < -SWIPE_THRESHOLD_PX) onNext()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2a2226]/88 px-4 backdrop-blur-sm"
      style={{ animation: 'fade-up 0.35s ease' }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl text-white transition-colors hover:bg-white/25"
      >
        ×
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl text-white transition-colors hover:bg-white/25 sm:left-6"
      >
        ‹
      </button>

      <div
        className="max-h-[86vh] max-w-[90vw] rounded-[3px] bg-white p-3 pb-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[76vh] max-w-[82vw] rounded-[1px] object-contain"
        />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl text-white transition-colors hover:bg-white/25 sm:right-6"
      >
        ›
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 font-display text-sm italic text-white">
        {index + 1} / {total}
      </div>
    </div>
  )
}

export default function PhotoGallery() {
  const [ref, isVisible] = useInView({ threshold: 0.05 })
  const [activeIndex, setActiveIndex] = useState(null)

  const close = () => setActiveIndex(null)
  const step = (dir) =>
    setActiveIndex((i) => (i === null ? null : (i + dir + photos.length) % photos.length))

  return (
    <div ref={ref} className="columns-2 gap-5 sm:columns-3">
      {photos.map((photo, i) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          delay={i * STEP_MS}
          visible={isVisible}
          onOpen={() => setActiveIndex(i)}
        />
      ))}

      {activeIndex !== null && (
        <Lightbox
          photo={photos[activeIndex]}
          index={activeIndex}
          total={photos.length}
          onClose={close}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </div>
  )
}
