# Travel Checklist

A free bilingual travel checklist builder for holidays, business trips, road trips, family travel, pet travel and long stays. The app is fully static, has no accounts or backend, and stores progress in the browser.

Website: [https://opsmon.github.io/travel/](https://opsmon.github.io/travel/)

Russian version: [README.ru.md](README.ru.md)

## Highlights

- RU/EN interface and checklist content.
- Step-by-step trip setup: country, duration, trip type, season, transport and extras.
- 37-country catalog plus an international fallback checklist.
- Personalized checklist generation with local progress, custom items, hidden completed items and collapsible categories.
- Copy, print, shareable configuration links, progress reset and full list reset.
- Official-source travel policy pointers reviewed on **2026-08-15**.
- GitHub Pages-ready static deployment.

## Stack

Svelte 5, TypeScript, Vite and plain CSS. No UI framework, server, paid APIs or external user-data storage.

## Run Locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run check
npm run build
npm run preview
```

Production builds are generated in `dist/`.

## Content

Country data lives in `src/data/countries.svelte`. Trip durations, seasons, transport options and trip types live in `src/data/options.svelte`. Content editing rules are documented in [CONTRIBUTING.md](CONTRIBUTING.md).

Country guidance was reviewed on **2026-08-15**. Entry, visa, transit, medication and baggage rules change often, so users should always verify official sources before departure.
