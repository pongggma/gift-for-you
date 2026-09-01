import BouquetFlower from './BouquetFlower'

const FLOWERS = [
  // greenery
  { type: 'leaf', x: -115, y: 55, size: 78, rotate: 208, z: 1 },
  { type: 'leaf', x: 115, y: 55, size: 78, rotate: -28, z: 1 },
  { type: 'leaf', x: -80, y: 100, size: 65, rotate: 156, z: 1 },
  { type: 'leaf', x: 82, y: 100, size: 65, rotate: 22, z: 1 },

  // baby's breath
  { type: 'baby', x: -100, y: -42, size: 31, z: 2 },
  { type: 'baby', x: 100, y: -34, size: 31, z: 2 },
  { type: 'baby', x: -60, y: -108, size: 28, z: 2 },
  { type: 'baby', x: 60, y: -108, size: 28, z: 2 },
  { type: 'baby', x: 0, y: -125, size: 26, z: 2 },

  // hydrangea
  { type: 'hydrangea', x: -82, y: -60, size: 60, z: 3 },
  { type: 'hydrangea', x: 82, y: -56, size: 60, z: 3 },

  // tulips
  { type: 'tulip', x: -84, y: 0, size: 66, rotate: -12, z: 4 },
  { type: 'tulip', x: 84, y: 4, size: 66, rotate: 12, z: 4 },
  { type: 'tulip', x: -38, y: -98, size: 58, rotate: -8, z: 4 },
  { type: 'tulip', x: 38, y: -100, size: 58, rotate: 8, z: 4 },

  // daisies
  { type: 'daisy', x: -44, y: -54, size: 54, rotate: -8, z: 5 },
  { type: 'daisy', x: 52, y: -52, size: 50, rotate: 8, z: 5 },
  { type: 'daisy', x: -105, y: -76, size: 42, rotate: -15, z: 4 },
  { type: 'daisy', x: 106, y: -72, size: 42, rotate: 15, z: 4 },

  // small blossoms
  { type: 'blossom', x: -28, y: -8, size: 42, z: 6 },
  { type: 'blossom', x: 32, y: -4, size: 38, z: 6 },
  { type: 'blossom', x: 0, y: -72, size: 36, z: 6 },

  // peonies
  { type: 'peony', x: -36, y: -28, size: 70, rotate: -10, z: 7 },
  { type: 'peony', x: 42, y: -25, size: 66, rotate: 10, z: 7 },

  // roses
  { type: 'rose', x: 0, y: -36, size: 92, z: 9 },
  { type: 'rose', x: -64, y: -18, size: 70, rotate: -14, z: 8 },
  { type: 'rose', x: 66, y: -18, size: 70, rotate: 14, z: 8 },
]

export default function Bouquet({
  size = 1,
  open = true,
  className = '',
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: 390 * size,
        height: 390 * size,
      }}
    >
      {/* stems */}
      <svg
        className="absolute left-1/2 top-[55%] -translate-x-1/2"
        width={180 * size}
        height={220 * size}
        viewBox="0 0 180 220"
        aria-hidden="true"
      >
        <path
          d="M90 10C82 75 72 135 58 210"
          fill="none"
          stroke="#8eae91"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M90 10C98 75 108 135 122 210"
          fill="none"
          stroke="#a6c4a7"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M90 15C90 80 90 140 90 215"
          fill="none"
          stroke="#97b99b"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      {/* ribbon */}
      <div className="bouquet-ribbon" aria-hidden="true">
        <span />
        <span />
      </div>

      {FLOWERS.map((flower, index) => (
        <div
          key={`${flower.type}-${index}`}
          className="absolute left-1/2 top-1/2"
          style={{
            zIndex: flower.z,
            transform: `
              translate(
                calc(-50% + ${flower.x * size}px),
                calc(-50% + ${flower.y * size}px)
              )
            `,
          }}
        >
          <div
            className="bouquet-bloom"
            style={{
              '--delay': `${index * 0.045}s`,
              '--float': `${4.8 + (index % 5) * 0.35}s`,
              '--tilt': `${flower.rotate || 0}deg`,
              animationPlayState: open
                ? 'running'
                : 'paused',
            }}
          >
            <BouquetFlower
              type={flower.type}
              size={flower.size * size}
              rotate={flower.rotate || 0}
            />
          </div>
        </div>
      ))}
    </div>
  )
}