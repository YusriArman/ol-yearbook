import { lazy } from 'react'

// Every yearbook on the site. To add a year: create its folder, then add one entry here.
// `lazy` means a year's code is only downloaded when someone opens it.
export const terms = [
  {
    slug: '24-25', // the address: /24-25
    label: '24/25', // the text on the switcher button
    Yearbook: lazy(() => import('./2425/Yearbook')),
  },
  {
    slug: '25-26',
    label: '25/26',
    Yearbook: lazy(() => import('./2526/Yearbook')),
  },
]

// The year visitors land on when they open the site without choosing one.
export const defaultTerm = '24-25'
