import { useEffect, useRef } from 'react'
import type { GalleryPhoto } from '../data/types'
import { Photo } from './Photo'

interface LightboxProps {
  photos: GalleryPhoto[]
  /** Position of the photo on show, or null when the lightbox is closed. */
  index: number | null
  onChange: (index: number) => void
  onClose: () => void
}

/**
 * Full-screen photo viewer built on the browser's <dialog>, which keeps
 * keyboard focus inside while open, closes on Escape, and hands focus back
 * to the thumbnail that opened it. Left and right arrow keys change photo.
 */
export function Lightbox({ photos, index, onChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const open = index !== null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const step = (change: number) => {
    if (index !== null) onChange((index + change + photos.length) % photos.length)
  }

  const photo = index !== null ? photos[index] : null

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Photo viewer"
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') step(-1)
        if (event.key === 'ArrowRight') step(1)
      }}
    >
      {photo && index !== null && (
        <figure className="lightbox__figure">
          <Photo className="lightbox__photo" src={photo.image} alt={photo.alt || photo.caption} eager />
          <figcaption>
            <span>{photo.caption}</span>
            <span className="lightbox__count" aria-live="polite">
              {index + 1} / {photos.length}
            </span>
          </figcaption>
        </figure>
      )}
      <button type="button" className="lightbox__button lightbox__close" onClick={onClose} aria-label="Close photo viewer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <button type="button" className="lightbox__button lightbox__prev" onClick={() => step(-1)} aria-label="Previous photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button type="button" className="lightbox__button lightbox__next" onClick={() => step(1)} aria-label="Next photo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </dialog>
  )
}
