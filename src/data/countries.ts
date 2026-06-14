import type { Option } from "../types";
import { item, l } from "./helpers";

const reviewed = "2026-06-14";
const verify = (id: string, ru: string, en: string, sourceUrl: string) => ({
  ...item(id, "documents", ru, en, "Проверьте актуальные требования на официальном сайте", "Verify current requirements on an official website"),
  sourceUrl,
  lastReviewed: reviewed,
});

export const countries: Option[] = [
  {
    id: "INTL", title: l("Универсальный список", "International"), description: l("Страна пока не выбрана", "Destination not selected"), symbol: "◎",
    lastReviewed: reviewed, items: [
      verify("entry-rules", "Проверить правила въезда", "Check entry requirements", "https://www.iatatravelcentre.com/"),
      item("travel-adapter-check", "electronics", "Проверить тип розеток", "Check socket type"),
      item("payment-check", "money", "Проверить способы оплаты", "Check payment options"),
    ],
  },
  {
    id: "RU", title: l("Россия", "Russia"), description: l("Города и регионы", "Cities and regions"), symbol: "RU",
    sourceUrl: "https://мвд.рф/", lastReviewed: reviewed, items: [
      item("internal-passport", "documents", "Внутренний паспорт", "Domestic passport"),
      item("medical-policy", "documents", "Полис ОМС", "Health insurance policy"),
      item("remote-cash", "money", "Наличные для удаленных районов", "Cash for remote areas"),
      item("connection-plan", "electronics", "Проверить связь на маршруте", "Check coverage along the route"),
    ],
  },
  {
    id: "BY", title: l("Беларусь", "Belarus"), description: l("Соседняя страна", "Neighbouring country"), symbol: "BY",
    sourceUrl: "https://mfa.gov.by/", lastReviewed: reviewed, items: [
      verify("by-entry", "Проверить документы для въезда", "Check entry documents", "https://mfa.gov.by/"),
      item("by-payment", "money", "Проверить работу карт и валюту", "Check card acceptance and currency"),
      item("by-registration", "arrival", "Уточнить правила регистрации", "Check registration rules"),
    ],
  },
  {
    id: "KZ", title: l("Казахстан", "Kazakhstan"), description: l("Степи и мегаполисы", "Steppes and cities"), symbol: "KZ",
    sourceUrl: "https://www.gov.kz/", lastReviewed: reviewed, items: [
      verify("kz-entry", "Проверить правила въезда", "Check entry rules", "https://www.gov.kz/"),
      item("kz-registration", "arrival", "Уточнить миграционный учет", "Check migration registration"),
      item("kz-climate", "clothes", "Одежда с учетом перепада температур", "Clothes for temperature changes"),
    ],
  },
  {
    id: "AM", title: l("Армения", "Armenia"), description: l("Горы и древние города", "Mountains and old cities"), symbol: "AM",
    sourceUrl: "https://www.mfa.am/", lastReviewed: reviewed, items: [
      verify("am-entry", "Проверить правила въезда", "Check entry rules", "https://www.mfa.am/"),
      item("am-cash", "money", "Местная валюта и наличные", "Local currency and cash"),
      item("am-mountain-layer", "clothes", "Теплый слой для гор", "Warm layer for the mountains"),
    ],
  },
  {
    id: "GE", title: l("Грузия", "Georgia"), description: l("Горы и побережье", "Mountains and coast"), symbol: "GE",
    sourceUrl: "https://geoconsul.gov.ge/", lastReviewed: reviewed, items: [
      verify("ge-entry", "Проверить правила въезда", "Check entry rules", "https://geoconsul.gov.ge/"),
      item("ge-insurance", "documents", "Проверить требования к страховке", "Check insurance requirements"),
      item("ge-mountain-shoes", "shoes", "Обувь для неровных маршрутов", "Shoes for uneven routes"),
    ],
  },
  {
    id: "TR", title: l("Турция", "Türkiye"), description: l("Море и города", "Coast and cities"), symbol: "TR",
    sourceUrl: "https://www.mfa.gov.tr/", lastReviewed: reviewed, items: [
      verify("tr-entry", "Проверить срок действия паспорта", "Check passport validity rules", "https://www.mfa.gov.tr/"),
      item("tr-transfer", "bookings", "Трансфер из аэропорта", "Airport transfer"),
      item("tr-medicine", "health", "Проверить правила ввоза лекарств", "Check medication import rules"),
    ],
  },
  {
    id: "AE", title: l("ОАЭ", "United Arab Emirates"), description: l("Жара и современный город", "Heat and modern cities"), symbol: "AE",
    sourceUrl: "https://u.ae/", lastReviewed: reviewed, items: [
      verify("ae-entry", "Проверить правила въезда", "Check entry rules", "https://u.ae/"),
      item("ae-modest-clothes", "clothes", "Одежда с учетом местных норм", "Clothing mindful of local customs"),
      item("ae-heat", "health", "Защита от жары и солнца", "Heat and sun protection"),
      item("ae-medicine", "health", "Проверить ограничения на лекарства", "Check medication restrictions"),
    ],
  },
  {
    id: "TH", title: l("Таиланд", "Thailand"), description: l("Тропики и острова", "Tropics and islands"), symbol: "TH",
    sourceUrl: "https://www.mfa.go.th/", lastReviewed: reviewed, items: [
      verify("th-entry", "Проверить правила въезда", "Check entry rules", "https://www.mfa.go.th/"),
      item("th-repellent", "health", "Средство от насекомых", "Insect repellent"),
      item("th-esim", "arrival", "SIM-карта или eSIM", "SIM card or eSIM"),
      item("th-rain", "luggage", "Легкая защита от дождя", "Light rain protection"),
    ],
  },
  {
    id: "JP", title: l("Япония", "Japan"), description: l("Технологии и традиции", "Technology and tradition"), symbol: "JP",
    sourceUrl: "https://www.mofa.go.jp/", lastReviewed: reviewed, items: [
      verify("jp-entry", "Проверить правила въезда", "Check entry rules", "https://www.mofa.go.jp/"),
      item("jp-adapter", "electronics", "Переходник для розетки", "Power adapter"),
      item("jp-transport", "arrival", "Приложения и карта транспорта", "Transport apps and pass"),
      item("jp-translation", "electronics", "Офлайн-переводчик", "Offline translator"),
    ],
  },
  {
    id: "KR", title: l("Южная Корея", "South Korea"), description: l("Города и побережье", "Cities and coast"), symbol: "KR",
    sourceUrl: "https://www.mofa.go.kr/", lastReviewed: reviewed, items: [
      verify("kr-entry", "Проверить разрешение на въезд", "Check entry authorisation", "https://www.mofa.go.kr/"),
      item("kr-apps", "arrival", "Местные карты и транспорт", "Local maps and transport apps"),
      item("kr-adapter", "electronics", "Проверить переходник", "Check power adapter"),
    ],
  },
  {
    id: "DE", title: l("Германия", "Germany"), description: l("Европейские маршруты", "European routes"), symbol: "DE",
    sourceUrl: "https://www.auswaertiges-amt.de/", lastReviewed: reviewed, items: [
      verify("de-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.auswaertiges-amt.de/"),
      item("de-accommodation", "documents", "Подтверждение проживания", "Proof of accommodation"),
      item("de-transit", "arrival", "Скачать приложение транспорта", "Download a transport app"),
    ],
  },
  {
    id: "IT", title: l("Италия", "Italy"), description: l("Искусство и побережье", "Art and coast"), symbol: "IT",
    sourceUrl: "https://www.esteri.it/", lastReviewed: reviewed, items: [
      verify("it-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.esteri.it/"),
      item("it-bookings", "bookings", "Билеты в музеи заранее", "Pre-book museum tickets"),
      item("it-shoes", "shoes", "Удобная обувь для прогулок", "Comfortable walking shoes"),
    ],
  },
  {
    id: "US", title: l("США", "United States"), description: l("Большие расстояния", "Long distances"), symbol: "US",
    sourceUrl: "https://travel.state.gov/", lastReviewed: reviewed, items: [
      verify("us-entry", "Проверить визу или разрешение", "Check visa or authorisation", "https://travel.state.gov/"),
      item("us-adapter", "electronics", "Переходник для розетки", "Power adapter"),
      item("us-insurance", "documents", "Расширенная медицинская страховка", "Comprehensive medical insurance"),
      item("us-driving", "documents", "Проверить документы для аренды авто", "Check car rental documents"),
    ],
  },
  {
    id: "FR", title: l("Франция", "France"), description: l("Города, Альпы и побережье", "Cities, Alps and coast"), symbol: "FR",
    sourceUrl: "https://france-visas.gouv.fr/", lastReviewed: reviewed, items: [
      verify("fr-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://france-visas.gouv.fr/"),
      item("fr-bookings", "bookings", "Забронировать популярные музеи и достопримечательности", "Pre-book popular museums and attractions"),
      item("fr-transport", "arrival", "Скачать приложения местного транспорта", "Download local transport apps"),
    ],
  },
  {
    id: "ES", title: l("Испания", "Spain"), description: l("Города, острова и пляжи", "Cities, islands and beaches"), symbol: "ES",
    sourceUrl: "https://www.exteriores.gob.es/", lastReviewed: reviewed, items: [
      verify("es-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.exteriores.gob.es/"),
      item("es-heat", "health", "Подготовиться к жаре и активному солнцу", "Prepare for heat and strong sun"),
      item("es-bookings", "bookings", "Заранее забронировать популярные достопримечательности", "Pre-book popular attractions"),
    ],
  },
  {
    id: "PT", title: l("Португалия", "Portugal"), description: l("Океан, холмы и старые города", "Ocean, hills and old towns"), symbol: "PT",
    sourceUrl: "https://vistos.mne.gov.pt/en/", lastReviewed: reviewed, items: [
      verify("pt-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://vistos.mne.gov.pt/en/"),
      item("pt-hills", "shoes", "Удобная обувь для холмов и брусчатки", "Comfortable shoes for hills and cobblestones"),
      item("pt-wind", "clothes", "Легкий слой от ветра у океана", "Light layer for coastal wind"),
    ],
  },
  {
    id: "GR", title: l("Греция", "Greece"), description: l("Острова и античные города", "Islands and ancient cities"), symbol: "GR",
    sourceUrl: "https://www.mfa.gr/en/visas/", lastReviewed: reviewed, items: [
      verify("gr-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.mfa.gr/en/visas/"),
      item("gr-ferries", "bookings", "Проверить и забронировать паромы", "Check and book ferries"),
      item("gr-sun", "health", "Защита от солнца и жары", "Sun and heat protection"),
    ],
  },
  {
    id: "GB", title: l("Великобритания", "United Kingdom"), description: l("История, города и побережье", "History, cities and coast"), symbol: "GB",
    sourceUrl: "https://www.gov.uk/check-uk-visa", lastReviewed: reviewed, items: [
      verify("gb-entry", "Проверить визу или электронное разрешение", "Check visa or electronic travel authorisation", "https://www.gov.uk/check-uk-visa"),
      item("gb-adapter", "electronics", "Переходник для британской розетки", "UK power adapter"),
      item("gb-weather", "clothes", "Водостойкий слой для переменчивой погоды", "Waterproof layer for changeable weather"),
      item("gb-left-driving", "car", "Учесть левостороннее движение", "Prepare for left-hand traffic"),
    ],
  },
  {
    id: "NL", title: l("Нидерланды", "Netherlands"), description: l("Каналы, музеи и велосипеды", "Canals, museums and bicycles"), symbol: "NL",
    sourceUrl: "https://www.netherlandsworldwide.nl/visa-the-netherlands", lastReviewed: reviewed, items: [
      verify("nl-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.netherlandsworldwide.nl/visa-the-netherlands"),
      item("nl-bookings", "bookings", "Заранее забронировать популярные музеи", "Pre-book popular museums"),
      item("nl-rain", "clothes", "Легкая защита от дождя и ветра", "Light rain and wind protection"),
      item("nl-bikes", "arrival", "Учитывать велосипедные дорожки", "Stay aware of cycle lanes"),
    ],
  },
  {
    id: "AT", title: l("Австрия", "Austria"), description: l("Имперские города и Альпы", "Imperial cities and Alps"), symbol: "AT",
    sourceUrl: "https://www.bmeia.gv.at/en/travel-stay/entrance-and-residence-in-austria", lastReviewed: reviewed, items: [
      verify("at-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.bmeia.gv.at/en/travel-stay/entrance-and-residence-in-austria"),
      item("at-transport", "arrival", "Скачать приложение общественного транспорта", "Download a public transport app"),
      item("at-mountain", "clothes", "Теплый слой для горных маршрутов", "Warm layer for mountain routes"),
    ],
  },
  {
    id: "CH", title: l("Швейцария", "Switzerland"), description: l("Озера, города и Альпы", "Lakes, cities and Alps"), symbol: "CH",
    sourceUrl: "https://www.eda.admin.ch/eda/en/fdfa/entry-switzerland-residence.html", lastReviewed: reviewed, items: [
      verify("ch-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.eda.admin.ch/eda/en/fdfa/entry-switzerland-residence.html"),
      item("ch-transport", "bookings", "Спланировать железнодорожные маршруты и проездные", "Plan rail routes and passes"),
      item("ch-mountain-weather", "clothes", "Слои одежды для быстрой смены погоды", "Layers for rapidly changing mountain weather"),
    ],
  },
  {
    id: "CZ", title: l("Чехия", "Czechia"), description: l("Старинные города и замки", "Historic cities and castles"), symbol: "CZ",
    sourceUrl: "https://mzv.gov.cz/jnp/en/information_for_aliens/index.html", lastReviewed: reviewed, items: [
      verify("cz-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://mzv.gov.cz/jnp/en/information_for_aliens/index.html"),
      item("cz-currency", "money", "Проверить валюту и безопасный обмен", "Check currency and safe exchange options"),
      item("cz-transport", "arrival", "Скачать приложение городского транспорта", "Download a city transport app"),
    ],
  },
  {
    id: "PL", title: l("Польша", "Poland"), description: l("Исторические города и Балтика", "Historic cities and Baltic coast"), symbol: "PL",
    sourceUrl: "https://www.gov.pl/web/diplomacy/visas", lastReviewed: reviewed, items: [
      verify("pl-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.gov.pl/web/diplomacy/visas"),
      item("pl-currency", "money", "Проверить валюту и способы оплаты", "Check currency and payment options"),
      item("pl-transport", "arrival", "Скачать приложения поездов и городского транспорта", "Download rail and city transport apps"),
    ],
  },
  {
    id: "CN", title: l("Китай", "China"), description: l("Мегаполисы и древняя культура", "Megacities and ancient culture"), symbol: "CN",
    sourceUrl: "https://www.mfa.gov.cn/eng/", lastReviewed: reviewed, items: [
      verify("cn-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.mfa.gov.cn/eng/"),
      item("cn-payments", "money", "Подготовить доступные способы оплаты", "Prepare locally supported payment methods"),
      item("cn-translation", "electronics", "Скачать офлайн-переводчик", "Download an offline translator"),
      item("cn-connectivity", "electronics", "Заранее проверить доступ к нужным сервисам", "Check access to essential online services in advance"),
    ],
  },
  {
    id: "VN", title: l("Вьетнам", "Vietnam"), description: l("Тропики, города и побережье", "Tropics, cities and coast"), symbol: "VN",
    sourceUrl: "https://evisa.gov.vn/", lastReviewed: reviewed, items: [
      verify("vn-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://evisa.gov.vn/"),
      item("vn-repellent", "health", "Средство от насекомых", "Insect repellent"),
      item("vn-rain", "luggage", "Легкая защита от тропического дождя", "Light tropical rain protection"),
      item("vn-sim", "arrival", "Подготовить SIM-карту или eSIM", "Plan a SIM card or eSIM"),
    ],
  },
  {
    id: "ID", title: l("Индонезия", "Indonesia"), description: l("Острова, вулканы и тропики", "Islands, volcanoes and tropics"), symbol: "ID",
    sourceUrl: "https://evisa.imigrasi.go.id/", lastReviewed: reviewed, items: [
      verify("id-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://evisa.imigrasi.go.id/"),
      item("id-repellent", "health", "Средство от насекомых", "Insect repellent"),
      item("id-rain", "luggage", "Водостойкий чехол для техники и документов", "Waterproof pouch for electronics and documents"),
      item("id-island-transfer", "bookings", "Проверить трансферы между островами", "Check transfers between islands"),
    ],
  },
  {
    id: "MY", title: l("Малайзия", "Malaysia"), description: l("Тропики и современные города", "Tropics and modern cities"), symbol: "MY",
    sourceUrl: "https://www.imi.gov.my/", lastReviewed: reviewed, items: [
      verify("my-entry", "Проверить правила въезда и декларации", "Check entry rules and declarations", "https://www.imi.gov.my/"),
      item("my-adapter", "electronics", "Переходник для местной розетки", "Local power adapter"),
      item("my-rain", "luggage", "Компактная защита от тропического дождя", "Compact tropical rain protection"),
      item("my-sim", "arrival", "Подготовить SIM-карту или eSIM", "Plan a SIM card or eSIM"),
    ],
  },
  {
    id: "SG", title: l("Сингапур", "Singapore"), description: l("Город-государство в тропиках", "Tropical city-state"), symbol: "SG",
    sourceUrl: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore", lastReviewed: reviewed, items: [
      verify("sg-entry", "Проверить правила въезда и электронную декларацию", "Check entry rules and electronic arrival declaration", "https://www.ica.gov.sg/enter-transit-depart/entering-singapore"),
      item("sg-medicine", "health", "Проверить ограничения на лекарства", "Check medication restrictions"),
      item("sg-adapter", "electronics", "Переходник для местной розетки", "Local power adapter"),
      item("sg-heat-rain", "clothes", "Легкая одежда и защита от дождя", "Light clothes and rain protection"),
    ],
  },
  {
    id: "IN", title: l("Индия", "India"), description: l("Культура, горы и океан", "Culture, mountains and ocean"), symbol: "IN",
    sourceUrl: "https://indianvisaonline.gov.in/", lastReviewed: reviewed, items: [
      verify("in-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://indianvisaonline.gov.in/"),
      item("in-medicine", "health", "Проверить правила ввоза лекарств", "Check medication import rules"),
      item("in-repellent", "health", "Средство от насекомых", "Insect repellent"),
      item("in-connectivity", "arrival", "Подготовить связь и офлайн-карты", "Plan connectivity and offline maps"),
    ],
  },
  {
    id: "CA", title: l("Канада", "Canada"), description: l("Большие города и дикая природа", "Big cities and wilderness"), symbol: "CA",
    sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html", lastReviewed: reviewed, items: [
      verify("ca-entry", "Проверить визу или электронное разрешение", "Check visa or electronic travel authorisation", "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html"),
      item("ca-insurance", "documents", "Расширенная медицинская страховка", "Comprehensive medical insurance"),
      item("ca-weather", "clothes", "Одежда для местного сезона и перепадов температуры", "Clothes for the local season and temperature changes"),
      item("ca-distance", "bookings", "Спланировать транспорт на больших расстояниях", "Plan transport across long distances"),
    ],
  },
  {
    id: "MX", title: l("Мексика", "Mexico"), description: l("Пляжи, города и древние руины", "Beaches, cities and ancient ruins"), symbol: "MX",
    sourceUrl: "https://www.gob.mx/sre", lastReviewed: reviewed, items: [
      verify("mx-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.gob.mx/sre"),
      item("mx-insurance", "documents", "Медицинская страховка для поездки", "Travel medical insurance"),
      item("mx-sun", "health", "Защита от солнца и жары", "Sun and heat protection"),
      item("mx-cash", "money", "Небольшой запас местной валюты", "Small reserve of local currency"),
    ],
  },
  {
    id: "BR", title: l("Бразилия", "Brazil"), description: l("Океан, мегаполисы и тропики", "Ocean, megacities and tropics"), symbol: "BR",
    sourceUrl: "https://www.gov.br/mre/en", lastReviewed: reviewed, items: [
      verify("br-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.gov.br/mre/en"),
      item("br-repellent", "health", "Средство от насекомых", "Insect repellent"),
      item("br-adapter", "electronics", "Проверить тип розетки и напряжение", "Check socket type and voltage"),
      item("br-insurance", "documents", "Медицинская страховка для поездки", "Travel medical insurance"),
    ],
  },
  {
    id: "AU", title: l("Австралия", "Australia"), description: l("Океан, города и большие расстояния", "Ocean, cities and long distances"), symbol: "AU",
    sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder", lastReviewed: reviewed, items: [
      verify("au-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder"),
      item("au-biosecurity", "documents", "Проверить требования биобезопасности и декларации", "Check biosecurity and declaration requirements"),
      item("au-sun", "health", "Защита от сильного солнца", "Protection from strong sun"),
      item("au-adapter", "electronics", "Переходник для местной розетки", "Local power adapter"),
    ],
  },
  {
    id: "NZ", title: l("Новая Зеландия", "New Zealand"), description: l("Горы, океан и автопутешествия", "Mountains, ocean and road trips"), symbol: "NZ",
    sourceUrl: "https://www.immigration.govt.nz/", lastReviewed: reviewed, items: [
      verify("nz-entry", "Проверить визу или электронное разрешение", "Check visa or electronic travel authorisation", "https://www.immigration.govt.nz/"),
      item("nz-biosecurity", "documents", "Проверить требования биобезопасности и декларации", "Check biosecurity and declaration requirements"),
      item("nz-weather", "clothes", "Слои одежды и защита от дождя", "Clothing layers and rain protection"),
      item("nz-left-driving", "car", "Учесть левостороннее движение", "Prepare for left-hand traffic"),
    ],
  },
  {
    id: "EG", title: l("Египет", "Egypt"), description: l("Красное море и древняя история", "Red Sea and ancient history"), symbol: "EG",
    sourceUrl: "https://visa2egypt.gov.eg/", lastReviewed: reviewed, items: [
      verify("eg-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://visa2egypt.gov.eg/"),
      item("eg-sun", "health", "Защита от жары и солнца", "Heat and sun protection"),
      item("eg-cash", "money", "Подготовить местную валюту для небольших расходов", "Prepare local currency for small expenses"),
      item("eg-medicine", "health", "Проверить правила ввоза лекарств", "Check medication import rules"),
    ],
  },
  {
    id: "MA", title: l("Марокко", "Morocco"), description: l("Медины, Атлас и океан", "Medinas, Atlas and ocean"), symbol: "MA",
    sourceUrl: "https://www.acces-maroc.ma/", lastReviewed: reviewed, items: [
      verify("ma-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.acces-maroc.ma/"),
      item("ma-modest-clothes", "clothes", "Одежда с учетом местных норм", "Clothing mindful of local customs"),
      item("ma-cash", "money", "Небольшой запас местной валюты", "Small reserve of local currency"),
      item("ma-temperature", "clothes", "Слой одежды для прохладных вечеров и гор", "Layer for cool evenings and mountains"),
    ],
  },
  {
    id: "ZA", title: l("ЮАР", "South Africa"), description: l("Города, океан и сафари", "Cities, ocean and safari"), symbol: "ZA",
    sourceUrl: "https://www.dha.gov.za/index.php/immigration-services", lastReviewed: reviewed, items: [
      verify("za-entry", "Проверить визу и правила въезда", "Check visa and entry rules", "https://www.dha.gov.za/index.php/immigration-services"),
      item("za-insurance", "documents", "Расширенная медицинская страховка", "Comprehensive medical insurance"),
      item("za-adapter", "electronics", "Проверить тип розетки и переходник", "Check socket type and adapter"),
      item("za-driving", "documents", "Проверить документы и условия аренды авто", "Check driving documents and car rental terms"),
    ],
  },
];
