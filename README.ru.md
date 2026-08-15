# Travel Checklist

Бесплатный конструктор чеклиста для поездок: отпуск, командировка, автопутешествие, поездка с ребенком, питомцем или долгий переезд. Работает полностью статически, без аккаунтов и backend, а прогресс хранит в браузере.

Сайт: [https://opsmon.github.io/travel/](https://opsmon.github.io/travel/)

English version: [README.md](README.md)

## Что Уже Есть

- Интерфейс и контент на русском и английском.
- Пошаговый конструктор поездки: страна, срок, формат, сезон, транспорт и дополнительные условия.
- Каталог из 37 стран плюс универсальный международный список.
- Автоматическая генерация чеклиста под параметры поездки.
- Отметки выполненных пунктов, свои пункты, скрытие выполненного и сворачивание категорий.
- Копирование списка, печать и share-ссылка с параметрами поездки.
- Сброс отметок и полный сброс списка.
- Хранение состояния в `localStorage`.
- Адаптивный интерфейс, reduced-motion support и деплой на GitHub Pages.

## Стек

Svelte 5, TypeScript, Vite и обычный CSS. Без UI-фреймворка, сервера, платных API и внешнего хранения пользовательских данных.

## Актуальность Данных

Данные по странам проверены **2026-08-15**. В приложении нет обещаний вида "можно находиться N дней": правила зависят от гражданства, паспорта, цели поездки, маршрута, транзита и недавней истории поездок. Поэтому чеклист подсказывает, что именно нужно проверить, и ведет на официальные источники.

Главные изменения, которые учтены:

- Европа: [EES](https://travel-europe.europa.eu/ees/what-is-the-ees) уже работает для short-stay въезда non-EU travelers в страны системы; [ETIAS](https://travel-europe.europa.eu/en/) ожидается в Q4 2026.
- Великобритания: проверять [визовый статус](https://www.gov.uk/check-uk-visa) и необходимость [ETA](https://www.gov.uk/check-eta).
- Таиланд: в 2026 году MFA опубликовал пересмотр visa exemption и visa-on-arrival схем; перед поездкой проверять [консульское обновление MFA](https://consular.mfa.go.th/th/content/20-5-69-0000?menu=5d68c88b15e39c160c008175&page=5d68c88b15e39c160c008173).
- Сингапур: SG Arrival Card остается обязательной для большинства прибытий; ICA также ввела no-boarding directives с 30 января 2026. Проверять [ICA entry requirements](https://www.ica.gov.sg/enter-transit-depart/entering-singapore).
- Южная Корея: K-ETA temporary exemption для covered countries продлен до 31 декабря 2026; проверять [K-ETA notice](https://overseas.mofa.go.kr/us-en/brd/m_4500/view.do?seq=761106).
- Армения: с 1 июля 2026 по 1 июля 2027 действует временное visa exemption для части держателей ВНЖ отдельных стран; проверять [Armenia MFA visa page](https://www.mfa.am/en/visa/).
- Канада: в 2026 обновлялась eTA eligibility для части visa-required nationals; проверять [Visit Canada](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html).
- Бразилия: гражданам Австралии, Канады и США для visitor travel нужен VIVIS/eVisa с 10 апреля 2025; проверять [Brazil visitor visa guidance](https://www.gov.br/mre/pt-br/consulado-chicago/Visas/types-of-visa-1/vivis-visitor-visa).

## Страны И Источники

| Страна | Что проверять | Официальный источник | Проверено |
| --- | --- | --- | --- |
| International | Entry, transit and document requirements before booking. | [IATA Travel Centre](https://www.iata.org/en/travel-centre/) | 2026-08-15 |
| Россия | Документы для внутренней поездки, полис, наличные для удаленных районов. | [МВД России](https://мвд.рф/) | 2026-08-15 |
| Беларусь | Документы для въезда, платежи, регистрация. | [Belarus MFA](https://mfa.gov.by/) | 2026-08-15 |
| Казахстан | Въезд и уведомление о пребывании иностранца. | [Visa-migration portal](https://vmp.gov.kz/en/services/notice-service) | 2026-08-15 |
| Армения | Visa-free status, eVisa, временные освобождения 2026-2027. | [Armenia MFA visa](https://www.mfa.am/en/visa/) | 2026-08-15 |
| Грузия | Entry rules и требования к страховке. | [Georgia e-Consul](https://geoconsul.gov.ge/) | 2026-08-15 |
| Турция | Visa/eVisa status и срок действия паспорта. | [Türkiye MFA visa information](https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa) | 2026-08-15 |
| ОАЭ | Tourist visa route, airline/agency process, лекарства. | [UAE tourist visa](https://u.ae/en/information-and-services/visa-and-emirates-id/tourist-visa) | 2026-08-15 |
| Таиланд | 2026 visa exemption / VoA revision и eVisa route. | [Thailand MFA consular update](https://consular.mfa.go.th/th/content/20-5-69-0000?menu=5d68c88b15e39c160c008175&page=5d68c88b15e39c160c008173) | 2026-08-15 |
| Япония | Visa exemption, Japan eVISA, passport-type notes. | [Japan eVISA](https://www.mofa.go.jp/j_info/visit/visa/visaonline.html) | 2026-08-15 |
| Южная Корея | K-ETA или temporary exemption до 31 декабря 2026. | [K-ETA exemption notice](https://overseas.mofa.go.kr/us-en/brd/m_4500/view.do?seq=761106) | 2026-08-15 |
| Германия | Visa rules, EES, подготовка к ETIAS. | [German Federal Foreign Office](https://www.auswaertiges-amt.de/) | 2026-08-15 |
| Италия | Visa rules, EES, подготовка к ETIAS. | [Italy MFA](https://www.esteri.it/) | 2026-08-15 |
| США | Visa, ESTA/VWP eligibility, entry/visa restrictions. | [Travel.State.Gov](https://travel.state.gov/content/travel/en/us-visas/tourism-visit.html/visa) | 2026-08-15 |
| Франция | France visa rules, EES, подготовка к ETIAS. | [France-Visas](https://france-visas.gouv.fr/) | 2026-08-15 |
| Испания | Spain visa rules, EES, подготовка к ETIAS. | [Spain MFA](https://www.exteriores.gob.es/) | 2026-08-15 |
| Португалия | Portugal visa rules, EES, подготовка к ETIAS. | [Portugal visas](https://vistos.mne.gov.pt/en/) | 2026-08-15 |
| Греция | Greece visa rules, EES, подготовка к ETIAS. | [Greece MFA visas](https://www.mfa.gr/en/visas/) | 2026-08-15 |
| Великобритания | Visa status и ETA. | [GOV.UK visa check](https://www.gov.uk/check-uk-visa), [GOV.UK ETA check](https://www.gov.uk/check-eta) | 2026-08-15 |
| Нидерланды | Netherlands visa rules, EES, подготовка к ETIAS. | [Netherlands Worldwide](https://www.netherlandsworldwide.nl/visa-the-netherlands) | 2026-08-15 |
| Австрия | Austria entry rules, EES, подготовка к ETIAS. | [Austria MFA](https://www.bmeia.gv.at/en/travel-stay/entrance-and-residence-in-austria) | 2026-08-15 |
| Швейцария | Switzerland entry rules, EES, подготовка к ETIAS. | [Swiss FDFA](https://www.eda.admin.ch/eda/en/fdfa/entry-switzerland-residence.html) | 2026-08-15 |
| Чехия | Czechia entry rules, EES, подготовка к ETIAS. | [Czech MFA](https://mzv.gov.cz/jnp/en/information_for_aliens/index.html) | 2026-08-15 |
| Польша | Poland visa rules, EES, подготовка к ETIAS. | [Poland visas](https://www.gov.pl/web/diplomacy/visas) | 2026-08-15 |
| Китай | Visa, transit, temporary visa-free policies. | [China MFA](https://www.mfa.gov.cn/mfa_eng/xw/fyrbt/fyrbt/202602/t20260215_11860467.html) | 2026-08-15 |
| Вьетнам | eVisa eligibility, border gates, single/multiple entry, fees. | [Vietnam eVisa](https://evisa.gov.vn/) | 2026-08-15 |
| Индонезия | eVisa/visa-on-arrival route и arrival declarations. | [Indonesia eVisa](https://evisa.imigrasi.go.id/) | 2026-08-15 |
| Малайзия | MDAC и entry rules. | [Malaysia MDAC](https://www.imi.gov.my/index.php/en/pengumuman/malaysia-digital-arrival-card-mdac/) | 2026-08-15 |
| Сингапур | SG Arrival Card, visa/boarding requirements. | [ICA entering Singapore](https://www.ica.gov.sg/enter-transit-depart/entering-singapore) | 2026-08-15 |
| Индия | Visa/eVisa status и ввоз лекарств. | [Indian Visa Online](https://indianvisaonline.gov.in/) | 2026-08-15 |
| Канада | Visa/eTA need, 2026 eTA eligibility updates, temporary restrictions. | [Visit Canada](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html) | 2026-08-15 |
| Мексика | Visa и entry rules. | [Mexico SRE](https://www.gob.mx/sre) | 2026-08-15 |
| Бразилия | VIVIS/eVisa; Australia, Canada, US passports need visitor visas. | [Brazil visitor visa](https://www.gov.br/mre/pt-br/consulado-chicago/Visas/types-of-visa-1/vivis-visitor-visa) | 2026-08-15 |
| Австралия | ETA, eVisitor или Visitor Visa; biosecurity/declaration requirements. | [Australia ETA](https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601) | 2026-08-15 |
| Новая Зеландия | NZeTA или Visitor Visa; biosecurity requirements. | [NZeTA](https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/) | 2026-08-15 |
| Египет | eVisa eligibility, printout requirement, passport validity. | [Egypt eVisa](https://visa2egypt.gov.eg/) | 2026-08-15 |
| Марокко | Visa, eVisa или AEVM. | [Acces Maroc](https://www.acces-maroc.ma/?language=en-US) | 2026-08-15 |
| ЮАР | ETA, eVisa или visa exemption. | [South African ETA](https://eta.dha.gov.za/) | 2026-08-15 |

## Локальный Запуск

```bash
npm install
npm run dev
```

Проверки перед деплоем:

```bash
npm run lint
npm run check
npm run build
npm run preview
```

Production build собирается в `dist/`.

## Где Что Лежит

```text
src/
  components/   Svelte UI sections
  data/         страны, опции, шаблоны и пункты чеклиста
  utils/        генерация чеклиста и сохранение состояния
  i18n.svelte   переводы интерфейса
  types.svelte  общие типы
public/         favicon, social preview, robots и sitemap
.github/        GitHub Pages workflow
```

Основные данные стран: `src/data/countries.svelte`. Опции сроков, сезонов, транспорта и типов поездки: `src/data/options.svelte`. Правила редактирования контента: [CONTRIBUTING.md](CONTRIBUTING.md).

## Хранение И Ограничения

Состояние хранится в браузере под ключом `travel-checklist-state`: язык, параметры поездки, выполненные пункты, свои пункты, свернутые категории и время обновления. Очистка browser storage удалит эти данные.

Share-ссылки передают только параметры поездки. Они не содержат выполненные отметки и пользовательские пункты.

## Деплой

Проект рассчитан на GitHub Pages. Vite использует `base: "./"`, поэтому ассеты работают под `/travel/`. Canonical, alternate, sitemap и robots уже указывают на [https://opsmon.github.io/travel/](https://opsmon.github.io/travel/).
