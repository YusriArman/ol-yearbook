# Orientation Leaders Yearbook

The Taylor's Orientation Leaders yearbook, built with React. The 24/25 edition recreates the website designed by Yuk Guan (27th draft), kept faithful to her palette, typography and wording.

## Run it

```bash
npm install
npm run dev      # http://localhost:5183
npm run build    # production build in dist/
npm run assets   # list which photos and videos are still missing
```

## How it is organised

The site holds one yearbook per term, each with its own design. The pill in the bottom-left corner switches between them.

| Address  | Folder            | What it is                                   |
| -------- | ----------------- | -------------------------------------------- |
| `/24-25` | `src/terms/2425/` | The 24/25 yearbook, from Yuk Guan's design   |
| `/25-26` | `src/terms/2526/` | The 25/26 yearbook, in progress              |

`src/terms/README.md` explains how the years are kept separate and how to add another.

## Editing the 24/25 content

All paths below are inside `src/terms/2425/`.

| To change…                                   | Edit…                |
| -------------------------------------------- | -------------------- |
| Titles, navigation, About text, advisor note | `data/site.ts`       |
| Orientation Highlights                       | `data/events.ts`     |
| EXCO, BOD departments, seniors, apprentices  | `data/members.ts`    |
| Recap videos and gallery memories            | `data/gallery.ts`    |
| Achievements, PMAPMs, EXCOBODs               | `data/fame.ts`       |
| Colours, fonts, spacing                      | `styles/tokens.css`  |

Components are in `components/`, one per part of the page. `Yearbook.tsx` puts them in order.

## Photos

The 24/25 photos come from Yuk Guan's deployed site, resized and compressed (about 31 MB in total).
`ASSET-CHECKLIST.md` lists every file and whether it is in place; `npm run assets` checks again.
Anything missing shows a placeholder, and dropping the file into `public/` at the listed path fills it in.

The recap videos are not stored here. They play from Google Drive, using the links in `src/terms/2425/data/gallery.ts`.
