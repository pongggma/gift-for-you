const aspect = [
  'tall',
  'square',
  'wide',
]

const rotate = [
  -2,
  1.5,
  -1,
  2,
  -1.5,
  1,
  0,
  -2.5,
  1.5,
  -1,
  2,
  -1.5,
  1,
]

const flowerAccent = [
  'blossom',
  null,
  'baby',
  null,
  null,
  'leaf',
  null,
  'daisy',
  null,
  null,
  'blossom',
  null,
  'baby',
]

const BASE = import.meta.env.BASE_URL

export const photos = Array.from({
  length: 13,
}).map((_, i) => {
  const n = String(i + 1).padStart(2, '0')

  return {
    id: n,

    src: `${BASE}images/photos/photo-${n}.jpg`,

    alt: `A moment, ${n}`,

    aspect:
      aspect[i % aspect.length],

    rotate:
      rotate[i % rotate.length],

    flower:
      flowerAccent[
        i % flowerAccent.length
      ],
  }
})