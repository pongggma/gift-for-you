/**
 * A small library of hand-drawn, minimal-line flower illustrations.
 * Every flower in the bouquet, the floating background petals, and the
 * final surprise are all built from this one component so the whole site
 * shares one consistent, elegant drawing style.
 */
function Rose({ color, core }) {
  return (
    <g>
      <circle r="9" fill={core} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <path
          key={deg}
          d="M0,0 C7,-3 14,-9 10,-17 C6,-11 0,-8 0,0 Z"
          fill={color}
          opacity="0.92"
          transform={`rotate(${deg})`}
        />
      ))}
      {[30, 90, 150, 210, 270, 330].map((deg) => (
        <path
          key={deg}
          d="M0,0 C9,-4 18,-12 13,-23 C7,-15 0,-11 0,0 Z"
          fill={color}
          opacity="0.75"
          transform={`rotate(${deg})`}
        />
      ))}
    </g>
  )
}

function Tulip({ color }) {
  return (
    <g>
      <path
        d="M0,20 C-13,20 -13,-2 -13,-8 C-13,-18 -6,-24 0,-24 C6,-24 13,-18 13,-8 C13,-2 13,20 0,20 Z"
        fill={color}
      />
      <path
        d="M0,18 C-6,18 -8,4 -8,-6 C-6,-2 -2,2 0,2 C2,2 6,-2 8,-6 C8,4 6,18 0,18 Z"
        fill="#ffffff"
        opacity="0.35"
      />
    </g>
  )
}

function Daisy({ color, core }) {
  return (
    <g>
      {Array.from({ length: 10 }).map((_, i) => (
        <ellipse
          key={i}
          rx="3.4"
          ry="10.5"
          cy="-11"
          fill={color}
          transform={`rotate(${i * 36})`}
        />
      ))}
      <circle r="6.5" fill={core} />
    </g>
  )
}

function Blossom({ color, core }) {
  return (
    <g>
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          d="M0,-3 C6,-8 6,-16 0,-19 C-6,-16 -6,-8 0,-3 Z"
          fill={color}
          transform={`rotate(${deg})`}
        />
      ))}
      <circle r="3.6" fill={core} />
    </g>
  )
}

function Baby({ color }) {
  return (
    <g fill={color}>
      <circle cx="0" cy="0" r="2.6" />
      <circle cx="7" cy="-3" r="2" />
      <circle cx="-6" cy="-4" r="1.8" />
      <circle cx="3" cy="6" r="1.8" />
      <circle cx="-4" cy="5" r="1.6" />
    </g>
  )
}

function Leaf({ color }) {
  return (
    <g fill={color}>
      <path d="M0,0 C10,-4 20,-2 26,8 C16,10 6,8 0,0 Z" />
      <path
        d="M2,1 C10,0 17,3 23,8"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="0.8"
      />
    </g>
  )
}

// Fallback drawing for 'peony' — a fuller, rounder bloom of layered petals,
// used until a real peony.png is dropped into public/flowers/bouquet/.
function Peony({ color, core }) {
  return (
    <g>
      <circle r="7" fill={core} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path
          key={`in-${deg}`}
          d="M0,0 C5,-4 9,-10 6,-15 C3,-11 0,-7 0,0 Z"
          fill={color}
          opacity="0.85"
          transform={`rotate(${deg})`}
        />
      ))}
      {[22, 67, 112, 157, 202, 247, 292, 337].map((deg) => (
        <path
          key={`out-${deg}`}
          d="M0,0 C7,-6 13,-15 9,-22 C4,-16 0,-10 0,0 Z"
          fill={color}
          opacity="0.65"
          transform={`rotate(${deg})`}
        />
      ))}
    </g>
  )
}

// Fallback drawing for 'hydrangea' — a small cluster of tiny four-petal
// blooms, used until a real hydrangea.png is dropped in.
function Hydrangea({ color, core }) {
  const florets = [
    { x: 0, y: 0, s: 1 },
    { x: -8, y: -5, s: 0.85 },
    { x: 8, y: -4, s: 0.85 },
    { x: -6, y: 7, s: 0.8 },
    { x: 6, y: 8, s: 0.8 },
    { x: 0, y: -10, s: 0.75 },
  ]
  return (
    <g>
      {florets.map((f, i) => (
        <g key={i} transform={`translate(${f.x}, ${f.y}) scale(${f.s})`}>
          {[0, 90, 180, 270].map((deg) => (
            <path
              key={deg}
              d="M0,0 C2.5,-2 2.5,-5.5 0,-6.5 C-2.5,-5.5 -2.5,-2 0,0 Z"
              fill={color}
              transform={`rotate(${deg})`}
            />
          ))}
          <circle r="1.4" fill={core} />
        </g>
      ))}
    </g>
  )
}

const RENDERERS = {
  rose: Rose,
  tulip: Tulip,
  daisy: Daisy,
  blossom: Blossom,
  baby: Baby,
  leaf: Leaf,
  peony: Peony,
  hydrangea: Hydrangea,
}

const PALETTES = {
  rose: { color: '#eb9cba', core: '#f6d3e2' },
  tulip: { color: '#f2b6cf' },
  daisy: { color: '#ffffff', core: '#f6d9a8' },
  blossom: { color: '#f7c9dc', core: '#f2a6c4' },
  baby: { color: '#ffffff' },
  leaf: { color: '#a9c9ac' },
  peony: { color: '#f6c3d8', core: '#fbe4ee' },
  hydrangea: { color: '#f9d7e6', core: '#fdeef5' },
}

export default function Flower({
  type = 'blossom',
  size = 40,
  rotate = 0,
  color,
  className = '',
  style = {},
}) {
  const Renderer = RENDERERS[type] || RENDERERS.blossom
  const palette = { ...PALETTES[type], ...(color ? { color } : {}) }

  return (
    <svg
      viewBox="-24 -24 48 48"
      width={size}
      height={size}
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, overflow: 'visible', ...style }}
      aria-hidden="true"
    >
      <Renderer {...palette} />
    </svg>
  )
}
