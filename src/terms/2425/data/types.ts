// The shape of every piece of content on the site.
// Each data file in this folder exports arrays of these.

export interface OrientationEvent {
  title: string
  image: string
  description: string
}

export interface Member {
  name: string
  role?: string
  image: string
  /** Short note shown when the card is hovered or focused. */
  message?: string
}

export interface Department {
  name: string
  members: Member[]
}

export interface MemoryVideo {
  title: string
  poster: string
  src: string
}

export interface GalleryPhoto {
  image: string
  caption: string
  /** What the photo shows, for people who cannot see it. Leave '' until known. */
  alt: string
}

export interface Achievement {
  name: string
  achievement: string
  summary: string
  description: string
  image: string
  alt: string
  /** Extra words the search box should match. */
  keywords: string
  /** Optional page to open from a “See More” button. */
  link?: string
}

export interface PmapmEvent {
  title: string
  people: string[]
}

export interface PmapmPeriod {
  period: string
  events: PmapmEvent[]
}

export interface ExcobodTerm {
  term: string
  image: string
  alt: string
  roles: { role: string; name: string }[]
}

/** A run of text; `strong: true` renders it in bold. */
export interface TextPart {
  text: string
  strong?: boolean
}
