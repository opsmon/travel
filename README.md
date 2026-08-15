# Travel Checklist

A free bilingual checklist builder for holidays, business trips, road trips and long-term relocation. The app is fully static, stores progress in the browser and is ready for GitHub Pages.

Website: [https://opsmon.github.io/travel/](https://opsmon.github.io/travel/)

## Features

- Russian and English interface and content
- Step-by-step trip builder
- Searchable catalog of 37 countries plus an international checklist
- Checklist generation from duration, country, trip type, season and transport
- Carry-on, luggage, child, pet and work equipment options
- Persistent progress and custom items through `localStorage`
- Copy, print and shareable configuration links
- Responsive, accessible interface with reduced-motion support
- Static deployment with GitHub Actions

## Stack

Svelte 5, TypeScript, Vite and plain CSS. No backend, accounts, paid APIs or UI framework.

## Local development

```bash
npm install
npm run dev
```

Open the URL printed by Vite.

## Checks

```bash
npm run lint
npm run check
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
src/
  components/   Svelte UI sections
  data/         countries, options, templates and checklist items
  utils/        checklist generation and persisted state
  i18n.svelte   interface translations
  types.svelte  shared data contracts
public/         favicon, social preview, robots and sitemap
.github/        GitHub Pages workflow
```

Checklist items are merged in a stable order and deduplicated by `id`. User-created items are stored separately from source data.

## Localisation

Every content record uses:

```ts
{ ru: "Паспорт", en: "Passport" }
```

Interface strings live in `src/i18n.svelte`. A new item is complete only when both locales are present. English is used on the first visit; an explicit `?lang=ru` or a saved manual choice switches the interface to Russian.

## Content updates

Countries and recommendations live in `src/data/countries.svelte`. Durations, trip types, seasons and transport live in `src/data/options.svelte`. See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete editing guide.

Country guidance is deliberately phrased as a prompt to verify official requirements. Keep `sourceUrl` and `lastReviewed` current whenever recommendations change.

## Country Policy Review

The catalog currently includes 37 countries plus the international fallback list. Country records were reviewed on **2026-08-15**. The checklist intentionally says "check entry rules" rather than promising a fixed stay length, visa exemption or medication allowance, because the correct requirement depends on citizenship, passport type, route, transit, purpose of travel and recent travel history.

Important policy changes checked for this review:

- Europe: the [Entry/Exit System](https://travel-europe.europa.eu/ees/what-is-the-ees) applies to non-EU short-stay travellers in the listed European countries; [ETIAS](https://travel-europe.europa.eu/en/) is expected to start in Q4 2026.
- United Kingdom: travellers should check [visa status](https://www.gov.uk/check-uk-visa) and [ETA need](https://www.gov.uk/check-eta).
- Thailand: the Ministry of Foreign Affairs published a 2026 review of visa exemption and visa-on-arrival schemes; travellers should use the [MFA consular update](https://consular.mfa.go.th/th/content/20-5-69-0000?menu=5d68c88b15e39c160c008175&page=5d68c88b15e39c160c008173).
- Singapore: SG Arrival Card remains required for most arrivals; ICA also announced airline no-boarding directives from 30 January 2026. Check [ICA entry requirements](https://www.ica.gov.sg/enter-transit-depart/entering-singapore).
- South Korea: K-ETA temporary exemption was extended until 31 December 2026 for covered countries; check [K-ETA notice](https://overseas.mofa.go.kr/us-en/brd/m_4500/view.do?seq=761106).
- Armenia: temporary visa exemption for some residence-permit holders runs from 1 July 2026 to 1 July 2027; check [Armenia MFA visa page](https://www.mfa.am/en/visa/).
- Canada: eTA eligibility for some visa-required nationals was updated in 2026; check [Visit Canada](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html).
- Brazil: Australia, Canada and United States passport holders need VIVIS/eVisa for visitor travel from 10 April 2025; check [Brazil visitor visa guidance](https://www.gov.br/mre/pt-br/consulado-chicago/Visas/types-of-visa-1/vivis-visitor-visa).

| Country | Current checklist guidance | Official source | Reviewed |
| --- | --- | --- | --- |
| International | Verify entry, transit and document requirements before booking. | [IATA Travel Centre](https://www.iata.org/en/travel-centre/) | 2026-08-15 |
| Russia | Domestic trips: carry domestic passport, medical policy and cash for remote areas. | [MVD Russia](https://мвд.рф/) | 2026-08-15 |
| Belarus | Check entry documents, payment options and registration rules. | [Belarus MFA](https://mfa.gov.by/) | 2026-08-15 |
| Kazakhstan | Check visa/entry rules and foreigner stay notification through the visa-migration portal. | [Visa-migration portal](https://vmp.gov.kz/en/services/notice-service) | 2026-08-15 |
| Armenia | Check visa-free status, eVisa and the 2026-2027 temporary exemption for some residence-permit holders. | [Armenia MFA visa](https://www.mfa.am/en/visa/) | 2026-08-15 |
| Georgia | Check entry rules and insurance expectations before travel. | [Georgia e-Consul](https://geoconsul.gov.ge/) | 2026-08-15 |
| Türkiye | Check visa/eVisa status and passport validity rules. | [Türkiye MFA visa information](https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa) | 2026-08-15 |
| United Arab Emirates | Check tourist visa route, airline/agency process and medicine restrictions. | [UAE tourist visa](https://u.ae/en/information-and-services/visa-and-emirates-id/tourist-visa) | 2026-08-15 |
| Thailand | Check the revised 2026 visa exemption and VoA schemes before relying on a previous stay length. | [Thailand MFA consular update](https://consular.mfa.go.th/th/content/20-5-69-0000?menu=5d68c88b15e39c160c008175&page=5d68c88b15e39c160c008173) | 2026-08-15 |
| Japan | Check visa exemption, Japan eVISA eligibility and passport-type notes. | [Japan eVISA](https://www.mofa.go.jp/j_info/visit/visa/visaonline.html) | 2026-08-15 |
| South Korea | Check K-ETA requirement or temporary exemption through 31 December 2026. | [K-ETA exemption notice](https://overseas.mofa.go.kr/us-en/brd/m_4500/view.do?seq=761106) | 2026-08-15 |
| Germany | Check visa rules plus EES now and ETIAS preparation for visa-exempt travellers. | [German Federal Foreign Office](https://www.auswaertiges-amt.de/) | 2026-08-15 |
| Italy | Check visa rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Italy MFA](https://www.esteri.it/) | 2026-08-15 |
| United States | Check visa, ESTA/VWP eligibility and 2026 entry/visa restrictions. | [Travel.State.Gov](https://travel.state.gov/content/travel/en/us-visas/tourism-visit.html/visa) | 2026-08-15 |
| France | Check France visa rules plus EES now and ETIAS preparation for visa-exempt travellers. | [France-Visas](https://france-visas.gouv.fr/) | 2026-08-15 |
| Spain | Check Spain visa rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Spain MFA](https://www.exteriores.gob.es/) | 2026-08-15 |
| Portugal | Check Portugal visa rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Portugal visas](https://vistos.mne.gov.pt/en/) | 2026-08-15 |
| Greece | Check Greece visa rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Greece MFA visas](https://www.mfa.gr/en/visas/) | 2026-08-15 |
| United Kingdom | Check visa status and whether ETA is required. | [GOV.UK visa check](https://www.gov.uk/check-uk-visa), [GOV.UK ETA check](https://www.gov.uk/check-eta) | 2026-08-15 |
| Netherlands | Check Netherlands visa rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Netherlands Worldwide](https://www.netherlandsworldwide.nl/visa-the-netherlands) | 2026-08-15 |
| Austria | Check Austria entry rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Austria MFA](https://www.bmeia.gv.at/en/travel-stay/entrance-and-residence-in-austria) | 2026-08-15 |
| Switzerland | Check Switzerland entry rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Swiss FDFA](https://www.eda.admin.ch/eda/en/fdfa/entry-switzerland-residence.html) | 2026-08-15 |
| Czechia | Check Czechia entry rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Czech MFA](https://mzv.gov.cz/jnp/en/information_for_aliens/index.html) | 2026-08-15 |
| Poland | Check Poland visa rules plus EES now and ETIAS preparation for visa-exempt travellers. | [Poland visas](https://www.gov.pl/web/diplomacy/visas) | 2026-08-15 |
| China | Check visa, transit and temporary visa-free policies; China added Canada/UK ordinary passports to a temporary waiver in 2026. | [China MFA](https://www.mfa.gov.cn/mfa_eng/xw/fyrbt/fyrbt/202602/t20260215_11860467.html) | 2026-08-15 |
| Vietnam | Check eVisa eligibility, border gates, single/multiple entry and fees. | [Vietnam eVisa](https://evisa.gov.vn/) | 2026-08-15 |
| Indonesia | Check eVisa/visa-on-arrival route and arrival declarations. | [Indonesia eVisa](https://evisa.imigrasi.go.id/) | 2026-08-15 |
| Malaysia | Check MDAC and entry rules; MDAC trip submission is tied to the arrival window. | [Malaysia MDAC](https://www.imi.gov.my/index.php/en/pengumuman/malaysia-digital-arrival-card-mdac/) | 2026-08-15 |
| Singapore | Submit SG Arrival Card when required and check visa/boarding requirements. | [ICA entering Singapore](https://www.ica.gov.sg/enter-transit-depart/entering-singapore) | 2026-08-15 |
| India | Check visa/eVisa status and medicine import rules. | [Indian Visa Online](https://indianvisaonline.gov.in/) | 2026-08-15 |
| Canada | Check visa/eTA need, including 2026 eTA eligibility updates and temporary public-health restrictions. | [Visit Canada](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html) | 2026-08-15 |
| Mexico | Check visa and entry rules through the foreign ministry. | [Mexico SRE](https://www.gob.mx/sre) | 2026-08-15 |
| Brazil | Check VIVIS/eVisa; Australia, Canada and United States passport holders need visitor visas from 10 April 2025. | [Brazil visitor visa](https://www.gov.br/mre/pt-br/consulado-chicago/Visas/types-of-visa-1/vivis-visitor-visa) | 2026-08-15 |
| Australia | Check ETA, eVisitor or Visitor Visa, plus biosecurity/declaration requirements. | [Australia ETA](https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601) | 2026-08-15 |
| New Zealand | Check NZeTA or Visitor Visa and biosecurity requirements. | [NZeTA](https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/) | 2026-08-15 |
| Egypt | Check eVisa eligibility, printout requirement and passport validity. | [Egypt eVisa](https://visa2egypt.gov.eg/) | 2026-08-15 |
| Morocco | Check whether visa, eVisa or AEVM is required. | [Acces Maroc](https://www.acces-maroc.ma/?language=en-US) | 2026-08-15 |
| South Africa | Check ETA, eVisa or visa exemption before travel. | [South African ETA](https://eta.dha.gov.za/) | 2026-08-15 |

Users should verify requirements close to departure through the linked official source, their airline and the destination's consulate.

## Browser storage

State is stored under `travel-checklist-state` with schema version `1`. It includes locale, trip configuration, completed IDs, custom items, collapsed categories and the last update time. Clearing browser storage removes this data.

## GitHub Pages

1. Push the repository to GitHub with `main` as the default branch.
2. Open **Settings → Pages** and choose **GitHub Actions** as the source.
3. Push to `main` or run **Deploy to GitHub Pages** manually under Actions.
4. Open the URL shown in the completed `deploy` job.

Vite uses `base: "./"`, so assets work under the `/travel/` repository subpath. Canonical, alternate, sitemap and robots URLs point to [https://opsmon.github.io/travel/](https://opsmon.github.io/travel/).

## Static-site limitations

Progress is local to one browser and is not synchronised between devices. Shared links include trip parameters only; they never include completed or custom items. Entry and medication information can change and must be checked through official sources.

## Possible next steps

- PWA/offline mode with install prompt and cached country data.
- Multiple saved trips with names, dates and quick duplication.
- Text, Markdown and PDF export.
- Approximate baggage weight and volume estimate.
- Family/shared checklist mode with invite links.
- Country policy freshness badges and "review overdue" warnings.
- Medicine/import rules quick links by country.
- Calendar reminders for documents, insurance, check-in and visas.
- Optional packing categories for hiking, skiing, diving and festivals.
- Additional languages.
