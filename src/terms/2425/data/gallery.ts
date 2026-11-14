import type { GalleryPhoto, MemoryVideo } from './types'

// Recap videos under “Our Memories”.
export const videos: MemoryVideo[] = [
  {
    "title": "TOL 24/25 Recap Video",
    "poster": "/images/gallery/tol-2425-poster.jpg",
    "src": "/tol_2425_recap.mp4"
  },
  {
    "title": "TOL 2025 Apprentices Recap Video",
    "poster": "/images/gallery/apprentices-2024-poster.jpg",
    "src": "/tol_2024_apprentices_recap.mp4"
  }
]

// Gallery photos. Replace each caption with the real event name and fill in `alt`
// with a short description of what the photo shows once the photos are supplied.
export const photos: GalleryPhoto[] = [
  {
    "image": "/images/gallery/internal-1.jpg",
    "caption": "Internal Event 1",
    "alt": ""
  },
  {
    "image": "/images/gallery/internal-2.jpg",
    "caption": "Internal Event 2",
    "alt": ""
  },
  {
    "image": "/images/gallery/internal-3.jpg",
    "caption": "Internal Event 3",
    "alt": ""
  },
  {
    "image": "/images/gallery/internal-4.jpg",
    "caption": "Internal Event 4",
    "alt": ""
  },
  {
    "image": "/images/gallery/internal-5.jpg",
    "caption": "Internal Event 5",
    "alt": ""
  }
]
