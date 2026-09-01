import PhotoGallery from '../components/PhotoGallery'

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-5 pb-8 pt-20 sm:px-10 sm:pt-28">
      <div className="mx-auto max-w-5xl">
        <PhotoGallery />
      </div>
    </section>
  )
}
