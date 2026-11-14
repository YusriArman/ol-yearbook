import { useState } from 'react'
import { photos, videos } from '../data/gallery'
import { sections } from '../data/site'
import { Lightbox } from './Lightbox'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { VideoCard } from './VideoCard'

/** Yearbook Gallery: recap videos, then photos that open in the lightbox. */
export function Gallery() {
  // Which photo the lightbox is showing; null means it is closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="section section--tint">
      <div className="container">
        <SectionHeading {...sections.gallery} />

        <Reveal className="term-group">
          <h3 className="subtitle">Our Memories</h3>
          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video.src} video={video} />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <ul className="gallery-grid">
            {photos.map((photo, index) => (
              <li key={photo.image}>
                <button type="button" className="card tile" onClick={() => setOpenIndex(index)}>
                  <Photo className="tile__photo" src={photo.image} alt={photo.alt} />
                  <span className="tile__caption">{photo.caption}</span>
                  <span className="visually-hidden"> — view larger</span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Lightbox photos={photos} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  )
}
