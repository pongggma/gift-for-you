import { useEffect, useState } from 'react'
import Flower from './Flower'

/**
 * A brief "unwrapping" moment before the gift page appears: a rose blooms
 * from a small bud to full size, then the whole screen fades away.
 * Calls onDone once it's finished so the parent can mount the real page.
 */
export default function LoadingScreen({ onDone, holdMs = 1500, fadeMs = 500 }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const holdTimer = window.setTimeout(() => setLeaving(true), holdMs)
    const doneTimer = window.setTimeout(() => onDone?.(), holdMs + fadeMs)
    return () => {
      window.clearTimeout(holdTimer)
      window.clearTimeout(doneTimer)
    }
  }, [holdMs, fadeMs, onDone])

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--blush)]"
      style={{
        opacity: leaving ? 0 : 1,
        pointerEvents: leaving ? 'none' : 'auto',
        transition: `opacity ${fadeMs}ms ease`,
      }}
      aria-hidden="true"
    >
      <span style={{ display: 'inline-block', animation: 'loading-bloom 1.3s cubic-bezier(.2,1,.3,1) forwards' }}>
        <Flower type="rose" size={64} />
      </span>
      <p className="mt-5 font-display text-lg italic text-[var(--text-soft)]">
        wrapping your gift…
      </p>
    </div>
  )
}
