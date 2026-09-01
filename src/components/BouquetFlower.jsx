import { useState } from 'react'
import Flower from './Flower'

const ASSET_FILE = {
  rose: 'rose.png',
  tulip: 'tulip.png',
  peony: 'peony.png',
  hydrangea: 'hydrangea.png',
  leaf: 'greenery.png',
}

// These photos were supplied as cut-out style images with a checkerboard baked
// into the file. The cleaned versions live in /images/bouquet/clean/.
export default function BouquetFlower({ type = 'blossom', size = 40, rotate = 0 }) {
  const [broken, setBroken] = useState(false)
  const file = ASSET_FILE[type]

  if (broken || !file) {
    return <Flower type={type} size={size} rotate={rotate} />
  }

  return (
    <img
      src={`/images/bouquet/clean/${file}`}
      alt=""
      aria-hidden="true"
      draggable={false}
      onError={() => setBroken(true)}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        transform: `rotate(${rotate}deg)`,
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  )
}
