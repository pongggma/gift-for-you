import { useState } from 'react'
import Flower from './Flower'

const ASSET_FILE = {
  rose: 'rose.png',
  tulip: 'tulip.png',
  daisy: 'daisy.png',
  peony: 'peony.png',
  hydrangea: 'hydrangea.png',
  baby: 'baby-breath.png',
  leaf: 'greenery.png',
}

export default function BouquetFlower({
  type = 'blossom',
  size = 40,
  rotate = 0,
}) {
  const [broken, setBroken] = useState(false)

  const file = ASSET_FILE[type]

  if (broken || !file) {
    return (
      <Flower
        type={type}
        size={size}
        rotate={rotate}
      />
    )
  }

  const src =
    `${import.meta.env.BASE_URL}` +
    `images/bouquet/clean/${file}`

  return (
    <img
      src={src}
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