# Terms

One folder per yearbook. Each is a self-contained site with its own components, data and styles,
so every year can have a completely different design.

- `index.ts` lists the years. The address (`/24-25`) and the switcher button come from it.
- `2425/` is the 24/25 site, recreated from Yuk Guan's design.
- `2526/` is the 25/26 site.

## Keeping designs separate

All of a year's CSS is written inside that year's wrapper class (`.term-2425`, `.term-2526`).
A rule such as `.card` in one year therefore never touches a `.card` in another.

## Adding a year

1. Copy the layout of `2526/` into a new folder, for example `2627/`, with a `.term-2627` wrapper.
2. Add an entry to `index.ts`.
