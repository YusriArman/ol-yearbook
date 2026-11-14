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
| Recap videos and gallery photos              | `data/gallery.ts`    |
| Achievements, PMAPMs, EXCOBODs               | `data/fame.ts`       |
| Colours, fonts, spacing                      | `styles/tokens.css`  |

Components are in `components/`, one per part of the page. `Yearbook.tsx` puts them in order.

## Adding photos

Every path the 24/25 site looks for is listed in `ASSET-CHECKLIST.md`. Put each file in `public/` at that path
(for example `public/images/members/yusri-tan.jpg`) and it replaces its placeholder automatically. No code changes needed.

For gallery photos, also update `caption` and `alt` in `src/terms/2425/data/gallery.ts` so each photo is described.
