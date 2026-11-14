import { useEffect, useState } from 'react'
import { heroSlides, site } from '../data/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const SLIDE_INTERVAL = 5000

/** Full-height opening: slideshow behind the yearbook title and motto. */
export function Hero() {
  // Only slides whose files actually exist; the hero falls back to a green wash until then.
  const [slides, setSlides] = useState<string[]>([])
  const [current, setCurrent] = useState(0)
  const reducedMotion = usePrefersReducedMotion()

  // Try each slide; keep the ones that load, in their original order.
  useEffect(() => {
    let cancelled = false
    const loaded = new Set<string>()
    heroSlides.forEach((src) => {
      const image = new Image()
      image.onload = () => {
        if (cancelled) return
        loaded.add(src)
        setSlides(heroSlides.filter((slide) => loaded.has(slide)))
      }
      image.src = src
    })
    return () => {
      cancelled = true
    }
  }, [])

  // Cross-fade to the next slide, unless the visitor prefers reduced motion.
  useEffect(() => {
    if (reducedMotion || slides.length < 2) return
    const timer = setInterval(() => setCurrent((index) => (index + 1) % slides.length), SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [reducedMotion, slides.length])

  return (
    <div className="hero">
      <div className="hero__slides" aria-hidden="true">
        {slides.map((src, index) => (
          <img key={src} src={src} alt="" className={index === current % slides.length ? 'show' : undefined} />
        ))}
      </div>
      <div className="hero__content">
        <h1 className="hero__title">{site.title}</h1>
        <p className="hero__motto">{site.motto}</p>
        <a href="#home-about" className="star-border">
          <span className="star-border__inner">{site.cta}</span>
        </a>
      </div>
    </div>
  )
}
