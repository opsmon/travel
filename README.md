# Travel Checklist

A free bilingual checklist builder for holidays, business trips, road trips and long-term relocation. The app is fully static, stores progress in the browser and is ready for GitHub Pages.

## Features

- Russian and English interface and content
- Step-by-step trip builder
- Checklist generation from duration, country, trip type, season and transport
- Carry-on, luggage, child, pet and work equipment options
- Persistent progress and custom items through `localStorage`
- Copy, print and shareable configuration links
- Responsive, accessible interface with reduced-motion support
- Static deployment with GitHub Actions

## Stack

React 19, TypeScript, Vite and plain CSS. No backend, accounts, paid APIs or UI framework.

## Local development

```bash
npm install
npm run dev
```

Open the URL printed by Vite.

## Checks

```bash
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
src/
  components/   UI sections
  data/         countries, options, templates and checklist items
  utils/        checklist generation and persisted state
  i18n.ts       interface translations
  types.ts      shared data contracts
public/         favicon, social preview, robots and sitemap
.github/        GitHub Pages workflow
```

Checklist items are merged in a stable order and deduplicated by `id`. User-created items are stored separately from source data.

## Localisation

Every content record uses:

```ts
{ ru: "Паспорт", en: "Passport" }
```

Interface strings live in `src/i18n.ts`. A new item is complete only when both locales are present. English is used on the first visit; an explicit `?lang=ru` or a saved manual choice switches the interface to Russian.

## Content updates

Countries and recommendations live in `src/data/countries.ts`. Durations, trip types, seasons and transport live in `src/data/options.ts`. See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete editing guide.

Country guidance is deliberately phrased as a prompt to verify official requirements. Keep `sourceUrl` and `lastReviewed` current whenever recommendations change.

## Browser storage

State is stored under `travel-checklist-state` with schema version `1`. It includes locale, trip configuration, completed IDs, custom items, collapsed categories and the last update time. Clearing browser storage removes this data.

## GitHub Pages

1. Push the repository to GitHub with `main` as the default branch.
2. Open **Settings → Pages** and choose **GitHub Actions** as the source.
3. Push to `main` or run **Deploy to GitHub Pages** manually under Actions.
4. Open the URL shown in the completed `deploy` job.

Vite uses `base: "./"`, so assets work under a repository subpath without hard-coding the repository name. Update the placeholder URLs in `public/robots.txt`, `public/sitemap.xml` and the canonical/alternate links in `index.html` for the final public address.

## Static-site limitations

Progress is local to one browser and is not synchronised between devices. Shared links include trip parameters only; they never include completed or custom items. Entry and medication information can change and must be checked through official sources.

## Possible next steps

PWA/offline mode, multiple saved trips, text/PDF export, approximate baggage weight and additional languages.
