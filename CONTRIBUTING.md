# Contributing

Travel Checklist is content-driven. Keep UI components generic and add travel knowledge through the files in `src/data/`.

## Add a country

Add an `Option` to `src/data/countries.ts`:

```ts
{
  id: "FR",
  title: l("Франция", "France"),
  description: l("Города и побережье", "Cities and coast"),
  symbol: "FR",
  sourceUrl: "https://www.diplomatie.gouv.fr/",
  lastReviewed: "2026-06-01",
  items: [
    verify("fr-entry", "Проверить правила въезда", "Check entry rules", "https://www.diplomatie.gouv.fr/"),
  ],
}
```

Use a stable ISO code where possible. A new country needs no checklist or component changes.

## Add other options

Add entries to the matching collection in `src/data/options.ts`:

- `durations`
- `tripTypes`
- `seasons`
- `transports`

Each entry needs a stable `id`, bilingual title and description, a short symbol, and an `items` array.

Regions can use the same `Option` shape in `countries.ts` or be moved to a separate catalog if filtering by region is introduced.

## Add a category

1. Add its stable ID to `CategoryId` in `src/types.ts`.
2. Add the bilingual label to `categories` in `src/data/common.ts`.
3. Place it in the desired display order.

The checklist automatically hides empty categories.

## Add an item

Use the `item` helper:

```ts
item(
  "stable-unique-id",
  "documents",
  "Русский заголовок",
  "English title",
  "Русское описание",
  "English description",
)
```

IDs are global and are used for deduplication and saved progress. Reuse an existing ID when two option sets refer to the same real item.

For recommendations that may change, include:

```ts
{
  sourceUrl: "https://official.example/",
  lastReviewed: "2026-06-01"
}
```

Use official government, embassy, airline or transport sources. Avoid presenting changing entry rules as guaranteed facts.

## Add a template

Add a record to `src/data/templates.ts`. `config` may contain any subset of `TripConfig`; unspecified values retain the user's current configuration.

## Translation rules

- Always add Russian and natural English together.
- Do not translate brands or international abbreviations.
- Keep UI text in `src/i18n.ts`, not inside components.
- Check long strings at 320 px and 390 px.
- Custom user items intentionally retain the entered language.

## Review dates and sources

When changing country guidance:

1. Open and verify the official source.
2. Update `sourceUrl` if needed.
3. Set `lastReviewed` to the actual review date in `YYYY-MM-DD` format.
4. Keep the wording cautious when rules depend on citizenship or travel purpose.

## Run and validate

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Check keyboard navigation, both locales, mobile widths, persistence after reload, printing, copy and share actions.

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/` through GitHub Pages. The workflow can also be started manually.

Before the first public release, replace placeholder public URLs in `robots.txt`, `sitemap.xml` and `index.html`.
