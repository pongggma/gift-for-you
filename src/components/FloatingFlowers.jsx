import { useMemo } from 'react'
import Flower from './Flower'

const TYPES = [
  'blossom',
  'daisy',
  'baby',
  'leaf',
  'blossom',
  'daisy',
  'blossom',
]

export default function FloatingFlowers({
  count = 34,
  withButterfly = true,
  active = true,
}) {
  const flowers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: (i * 29 + 7) % 100,
        size: 10 + ((i * 11) % 20),
        delay: (i * 1.35) % 18,
        duration: 12 + ((i * 7) % 12),
        dx:
          (i % 2 === 0 ? 1 : -1) *
          (25 + ((i * 17) % 100)),
        type: TYPES[i % TYPES.length],
        opacity: 0.4 + (i % 5) * 0.1,
      })),
    [count],
  )

  const butterflies = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        top: 10 + i * 15,
        delay: i * 3.2,
        duration: 18 + i * 3.5,
        scale: 0.62 + i * 0.1,
      })),
    [],
  )

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-1000 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute top-[-8%]"
          style={{
            left: `${flower.left}%`,
            opacity: flower.opacity,
            animation: `drift ${flower.duration}s linear ${flower.delay}s infinite`,
            '--dx': `${flower.dx}px`,
            '--dy': '118vh',
          }}
        >
          <Flower
            type={flower.type}
            size={flower.size}
            rotate={flower.id * 37}
          />
        </div>
      ))}

      {withButterfly &&
        butterflies.map((butterfly) => (
          <div
            key={butterfly.id}
            className="absolute left-0"
            style={{
              top: `${butterfly.top}%`,
              animation: `fly-across ${butterfly.duration}s ease-in-out ${butterfly.delay}s infinite`,
              transform: `scale(${butterfly.scale})`,
            }}
          >
            <Butterfly />
          </div>
        ))}
    </div>
  )
}

function Butterfly() {
  return (
    <svg width="48" height="36" viewBox="-24 -18 48 36">
      <g
        style={{
          transformOrigin: '0 0',
          animation: 'wing-flap .52s ease-in-out infinite',
        }}
      >
        <path
          d="M0,0 C-8,-17 -24,-15 -21,-3 C-19,7 -8,8 0,0Z"
          fill="#e79bb8"
          opacity=".78"
        />

        <path
          d="M0,0 C-6,11 -20,14 -20,5 C-20,-3 -9,-5 0,0Z"
          fill="#f8cfdf"
          opacity=".94"
        />
      </g>

      <g
        style={{
          transformOrigin: '0 0',
          animation: 'wing-flap .52s ease-in-out infinite .025s',
        }}
      >
        <path
          d="M0,0 C8,-17 24,-15 21,-3 C19,7 8,8 0,0Z"
          fill="#e79bb8"
          opacity=".78"
        />

        <path
          d="M0,0 C6,11 20,14 20,5 C20,-3 9,-5 0,0Z"
          fill="#f8cfdf"
          opacity=".94"
        />
      </g>

      <path
        d="M0,-7C-1,-1-1,5 0,9C1,5 1,-1 0,-7Z"
        fill="#7f9c83"
      />
    </svg>
  )
}