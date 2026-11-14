# 25/26 yearbook

This folder is the 25/26 site. It starts as a single placeholder page at `/25-26`.
The 24/25 site next door (`../2425`) is a complete working example to read alongside.

## Rules of the folder

- Everything you render goes inside `<div className="term-2526">` in `Yearbook.tsx`.
- Every CSS rule goes inside `.term-2526 { ... }` or `:where(.term-2526) { ... }`, as `styles/base.css` shows.
  That is what stops the two years' designs from clashing.
- Content goes in `data/`, components in `components/`, photos in `public/2526/` (used as `/2526/photo.jpg`).
- Don't import from `../2425`. Copy and adapt instead, so each year can change freely.

## A suggested order

Each step produces something you can see, and the React ideas build on each other.

| Step | Build | React idea | 24/25 file to compare |
| --- | --- | --- | --- |
| 1 | Colours and fonts as CSS variables | none yet | `styles/tokens.css` |
| 2 | A `Footer` component | components, JSX | `components/Footer.tsx` |
| 3 | `data/site.ts` and an About section | importing data, props | `components/About.tsx` |
| 4 | An events grid from `data/events.ts` | rendering lists with `.map()` and `key` | `components/Events.tsx` |
| 5 | One member card reused for every group | props, reusable components | `components/MemberCard.tsx` |
| 6 | An image that shows a placeholder when missing | `useState`, event handlers | `components/Photo.tsx` |
| 7 | A back-to-top button | `useEffect`, cleaning up listeners | `components/BackToTop.tsx` |
| 8 | A header with a mobile menu | state driving CSS classes | `components/Header.tsx` |
| 9 | Highlighting the current section | custom hooks | `hooks/useActiveSection.ts` |
| 10 | A photo lightbox | `useRef`, lifting state up | `components/Lightbox.tsx` |
| 11 | A search box | controlled inputs, filtering | `components/WallOfFame.tsx` |

## Checking your work

```bash
npm run dev     # then open http://localhost:5183/25-26
npm run build   # catches type errors
```
