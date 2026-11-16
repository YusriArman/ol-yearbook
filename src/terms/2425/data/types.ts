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
  /** The member's own note, shown when their card is opened. */
  message?: string
}

export interface Department {
  name: string
  members: Member[]
}

export interface MemoryVideo {
  title: string
  /** Google Drive preview address, shown in an embedded player. */
  embedUrl: string
}

/** A memory shared by a member: one or more photos with their own words. */
export interface Memory {
  author: string
  caption: string
  images: string[]
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
  /** Where the “See More” button goes. Leave out to hide the button. */
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
