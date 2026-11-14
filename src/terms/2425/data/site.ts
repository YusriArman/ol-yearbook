import type { TextPart } from './types'

// Site-wide wording: titles, navigation, the About text and the advisor's note.

export const site = {
  title: 'Orientation Leaders Yearbook 24/25',
  logo: 'OL Year Book 24/25',
  motto: 'Lead, Love & Serve.',
  cta: 'Explore now',
  footer: '© Taylors Orientation Leader Term 24/25 | Designed & Published by Yuk Guan',
}

// One entry per section of the page. `id` must match the section's id in App.tsx.
export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Events' },
  { id: 'term', label: 'Our Term 24/25' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'fame', label: 'Wall of Fame' },
]

// Hero slideshow. Slides that are not in public/images yet are skipped.
export const heroSlides = [
  '/images/hero.jpg',
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/hero4.jpg',
  '/images/hero5.jpg',
]

export const sections = {
  events: {
    title: 'Orientation Highlights',
    intro: 'Our signature experiences that welcome and empower new Taylorians.',
  },
  term: {
    title: 'Our Term 24/25',
    intro: 'Meet the EXCO, BOD, and our dedicated senior members.',
  },
  gallery: {
    title: 'Yearbook Gallery',
    intro: 'Snapshots from our internal journey together.',
  },
  fame: {
    title: 'Wall of Fame',
    intro: 'A collection to celebrate achievements done by Orientation Leaders.',
  },
}

export const about: { heading: string; body: TextPart[] } = {
  heading: 'About Us',
  body: [
    { text: 'We are orientation leaders who are here to ' },
    { text: 'lead, love, and serve', strong: true },
    {
      text: '. Together with Taylor’s Student Development (SD), we support every new student as they begin university life—answering questions, building community, and guiding them through their first steps on campus. We believe in lifting one another up, celebrating growth, and creating a welcoming culture where everyone belongs. From the first hello to lasting friendships, we always have each other’s backs.',
    },
  ],
}

export const advisor: {
  heading: string
  name: string
  image: string
  greeting: string
  message: TextPart[]
  signature: string
} = {
  heading: 'Our Advisor',
  name: 'Ms Vithyia',
  image: '/images/members/ms-vithyia.jpg',
  greeting: 'Dear Orientation Leaders,',
  message: [
    {
      text: 'It has been such a joy to watch each of you grow, lead, and support one another throughout this term. You have truly brought ',
    },
    { text: 'Lead, Love, Serve', strong: true },
    {
      text: ' to life in everything you do. Thank you for leading with heart and purpose. Your impact will be remembered long after this term ends.',
    },
  ],
  signature: '— Ms Vithyia',
}
