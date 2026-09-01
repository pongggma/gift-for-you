import { useEffect, useRef, useState } from 'react'

// Kept sparse on purpose: throttled spawn rate + a hard cap on how many
// petals can be on screen at once, so this stays a light touch rather than
// a distraction.
const THROTTLE_MS = 90
const MAX_PETALS = 14
const PETAL_LIFETIME_MS = 900

export default function PetalTrail() {
  const [petals, setPetals] = useState([])
  const lastSpawn = useRef(0)
  const nextId = useRef(0)

  useEffect(() => {
    const spawn = (x, y) => {
      const now = Date.now()
      if (now - lastSpawn.current < THROTTLE_MS) return
      lastSpawn.current = now

      const id = nextId.current++
      setPetals((prev) => [
        ...prev.slice(-(MAX_PETALS - 1)),
        { id, x, y, drift: (Math.random() - 0.5) * 44, rotate: Math.random() * 360 },
      ])
      window.setTimeout(() => {
        setPetals((prev) => prev.filter((p) => p.id !== id))
      }, PETAL_LIFETIME_MS)
    }

    const onPointerMove = (e) => {
      if (e.pointerType === 'touch') return // handled by touchmove below
      spawn(e.clientX, e.clientY)
    }
    const onTouchMove = (e) => {
      const t = e.touches[0]
      if (t) spawn(t.clientX, t.clientY)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute block h-2.5 w-1.5 rounded-[80%_20%_80%_20%]"
          style={{
            left: p.x,
            top: p.y,
            background: 'var(--rose-pink)',
            transform: `translate(-50%, -50%) rotate(${p.rotate}deg)`,
            animation: `petal-trail ${PETAL_LIFETIME_MS}ms ease-out forwards`,
            '--tx': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
