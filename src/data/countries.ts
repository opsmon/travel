import type { Option } from "../types";
import { item, l } from "./helpers";

const reviewed = "2026-06-01";
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
];
