import { useMemo, useState } from 'react'
import { memories, videos } from '../data/gallery'
import { sections } from '../data/site'
import { Lightbox, type Slide } from './Lightbox'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { VideoCard } from './VideoCard'

// How many memories to show before the "Show all" button.
const INITIAL_MEMORIES = 12

/** Yearbook Gallery: recap videos, then members' memories that open in the lightbox. */
export function Gallery() {
  // Which slide the lightbox is showing; null means it is closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  // The lightbox steps through every photo of every memory, so lay them out in one list
  // and note where each memory's first photo sits in it.
  const { slides, firstSlide } = useMemo(() => {
    const slides: Slide[] = []
    const firstSlide: number[] = []
    for (const memory of memories) {
      firstSlide.push(slides.length)
      memory.images.forEach((image, index) =>
        slides.push({
          image,
          alt: `Photo shared by ${memory.author}`,
          caption: memory.caption,
          author: memory.author,
          position: memory.images.length > 1 ? `${index + 1} of ${memory.images.length}` : undefined,
        }),
      )
    }
    return { slides, firstSlide }
  }, [])

  const visible = showAll ? memories : memories.slice(0, INITIAL_MEMORIES)

  return (
    <section id="gallery" className="section section--tint">
      <div className="container">
        <SectionHeading {...sections.gallery} />

        <Reveal className="term-group">
          <h3 className="subtitle">Our Memories</h3>
          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video.embedUrl} video={video} />
            ))}
          </div>
        </Reveal>

        <div className="term-group">
          <ul className="gallery-grid">
            {visible.map((memory, index) => (
              <li key={memory.images[0]}>
                <button type="button" className="card tile" onClick={() => setOpenIndex(firstSlide[index])}>
                  <span className="tile__media">
                    <Photo className="tile__photo" src={memory.images[0]} alt={`Photo shared by ${memory.author}`} />
                    {memory.images.length > 1 && (
                      <span className="tile__count">
                        {memory.images.length}
                        <span className="visually-hidden"> photos</span>
                      </span>
                    )}
                  </span>
                  <span className="tile__text">
                    {memory.caption && <span className="tile__caption">{memory.caption}</span>}
                    <span className="tile__author">– {memory.author}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {memories.length > INITIAL_MEMORIES && (
            <div className="gallery-toggle">
              <button type="button" className="btn btn--outline" aria-expanded={showAll} onClick={() => setShowAll((shown) => !shown)}>
                {showAll ? 'Show fewer memories' : `Show all ${memories.length} memories`}
              </button>
            </div>
          )}
        </div>
      </div>

      <Lightbox slides={slides} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  )
}
