import { useEffect, useRef, useState } from 'react'

interface PhotoProps {
  src: string
  /** Describe the photo, or pass '' when it is purely decorative. */
  alt: string
  className?: string
  /** 'portrait' shows initials while the photo is missing; 'photo' shows a small frame icon. */
  variant?: 'photo' | 'portrait'
  /** Name used to work out the initials for a portrait placeholder. */
  name?: string
  /** Load straight away instead of waiting until it is near the screen. */
  eager?: boolean
}

function initialsOf(name: string) {
  return name
    .replace(/\(.*?\)/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

/**
 * An image that degrades gracefully: until the file exists in public/,
 * a quiet placeholder in the yearbook palette is shown in its place.
 */
export function Photo({ src, alt, className = '', variant = 'photo', name, eager = false }: PhotoProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'missing'>('loading')
  const imageRef = useRef<HTMLImageElement>(null)

  // Start again whenever the image address changes (the lightbox reuses one Photo).
  useEffect(() => {
    const image = imageRef.current
    // An image served from the browser's cache can be ready before React is listening.
    // (Don't treat "complete but empty" as missing: lazy images report that before they start.)
    setStatus(image?.complete && image.naturalWidth > 0 ? 'loaded' : 'loading')
  }, [src])

  return (
    <span className={`photo photo--${variant} photo--${status} ${className}`}>
      <span className="photo__placeholder" aria-hidden="true">
        {variant === 'portrait' && name ? (
          <span className="photo__initials">{initialsOf(name)}</span>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10" r="1.6" />
            <path d="M3.5 17l5-4.5 3.5 3 3-2.5 5.5 4.5" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {status !== 'missing' && (
        <img
          ref={imageRef}
          key={src}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('missing')}
        />
      )}
    </span>
  )
}
