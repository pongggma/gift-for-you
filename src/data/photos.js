// 13 photos for the gallery. Drop your images into
// public/images/photos/ using these exact filenames (photo-01.jpg … photo-13.jpg),
// or edit `src` below to point anywhere else. Until a photo exists, its spot
// shows a soft placeholder so the layout still looks intentional.

const aspect = ['tall', 'square', 'wide']
const rotate = [-2, 1.5, -1, 2, -1.5, 1, 0, -2.5, 1.5, -1, 2, -1.5, 1]

export const photos = Array.from({ length: 13 }).map((_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    id: n,
    src: `/images/photos/photo-${n}.jpg`,
    alt: `A moment, ${n}`,
    aspect: aspect[i % aspect.length],
    rotate: rotate[i % rotate.length],
  }
})
