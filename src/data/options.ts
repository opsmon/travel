import type { Option } from "../types";
import { item, l } from "./helpers";

export const durations: Option[] = [
  {
    id: "one-day", title: l("Один день", "One day"), description: l("Без ночевки", "No overnight stay"), symbol: "1",
    items: [
      item("return-route", "bookings", "Обратный маршрут", "Return route"),
      item("day-bag", "carryOn", "Небольшая сумка", "Small day bag"),
    ],
  },
  {
    id: "weekend", title: l("Выходные", "Weekend"), description: l("2–3 дня", "2–3 days"), symbol: "2",
    items: [
      item("sleepwear", "clothes", "Одежда для сна", "Sleepwear"),
      item("spare-top", "clothes", "Сменный верх", "Spare top"),
      item("small-cosmetics", "hygiene", "Небольшая косметичка", "Small toiletry bag"),
    ],
  },
  {
    id: "one-week", title: l("Одна неделя", "One week"), description: l("4–7 дней", "4–7 days"), symbol: "7",
    items: [
      item("spare-outfits", "clothes", "Несколько комплектов одежды", "Several outfits"),
      item("spare-shoes", "shoes", "Сменная обувь", "Spare shoes"),
      item("laundry-kit", "hygiene", "Средство для стирки", "Travel laundry detergent"),
      item("swimwear", "leisure", "Купальные принадлежности", "Swimwear"),
    ],
  },
  {
    id: "two-weeks", title: l("Две недели", "Two weeks"), description: l("8–14 дней", "8–14 days"), symbol: "14",
    items: [
      item("reserve-card", "money", "Резервная банковская карта", "Backup bank card"),
      item("power-adapter", "electronics", "Переходник для розетки", "Power adapter", "Проверьте тип розеток в месте назначения", "Check the socket type at your destination"),
      item("extra-storage", "electronics", "Дополнительная память", "Extra device storage"),
      item("laundry-plan", "hygiene", "Продумать стирку", "Plan for laundry"),
    ],
  },
  {
    id: "one-month", title: l("Один месяц", "One month"), description: l("15–30 дней", "15–30 days"), symbol: "30",
    items: [
      item("spare-glasses", "health", "Запасные очки или линзы", "Spare glasses or lenses"),
      item("local-sim", "arrival", "SIM-карта или eSIM", "SIM card or eSIM"),
      item("local-apps", "arrival", "Местные транспортные приложения", "Local transport apps"),
      item("living-essentials", "luggage", "Базовые вещи для быта", "Basic living essentials"),
    ],
  },
  {
    id: "relocation", title: l("Длительная поездка", "Long stay"), description: l("Более месяца", "More than a month"), symbol: "∞",
    items: [
      item("residence-documents", "documents", "Документы для длительного проживания", "Long-stay documents"),
      item("rental-contract", "documents", "Договор аренды или приглашение", "Rental contract or invitation"),
      item("education-documents", "work", "Документы об образовании", "Education documents"),
      item("medical-records", "health", "Медицинские документы и рецепты", "Medical records and prescriptions"),
      item("mail-plan", "home", "Организовать получение почты", "Arrange mail handling"),
      item("utility-plan", "home", "Проверить коммунальные платежи", "Review utility payments"),
      item("bank-notice", "money", "Уведомить банк о поездке", "Notify the bank about travel"),
    ],
  },
];

export const tripTypes: Option[] = [
  {
    id: "tourism", title: l("Туризм", "Tourism"), description: l("Маршруты и впечатления", "Routes and experiences"), symbol: "○",
    items: [
      item("camera", "leisure", "Фотоаппарат или камера", "Camera"),
      item("activity-bookings", "bookings", "Билеты на экскурсии", "Activity bookings"),
      item("day-route", "leisure", "Сохраненные маршруты", "Saved itineraries"),
    ],
  },
  {
    id: "business", title: l("Командировка", "Business"), description: l("Работа в дороге", "Work on the go"), symbol: "□",
    items: [
      item("business-clothes", "clothes", "Деловая одежда", "Business attire"),
      item("work-badge", "work", "Пропуск или визитки", "Work badge or business cards"),
      item("vpn", "work", "Проверить VPN и доступы", "Check VPN and access"),
      item("meeting-notes", "work", "Материалы встреч", "Meeting materials"),
    ],
  },
  {
    id: "beach", title: l("Пляжный отдых", "Beach holiday"), description: l("Солнце и вода", "Sun and water"), symbol: "☼",
    items: [
      item("sunscreen", "health", "Солнцезащитный крем", "Sunscreen"),
      item("sun-hat", "clothes", "Головной убор", "Sun hat"),
      item("sunglasses", "clothes", "Солнцезащитные очки", "Sunglasses"),
      item("beach-shoes", "shoes", "Пляжная обувь", "Beach shoes"),
      item("waterproof-case", "leisure", "Водонепроницаемый чехол", "Waterproof case"),
    ],
  },
  {
    id: "active", title: l("Активный отдых", "Active trip"), description: l("Маршруты и снаряжение", "Routes and gear"), symbol: "△",
    items: [
      item("sportswear", "sports", "Спортивная одежда", "Sportswear"),
      item("special-insurance", "documents", "Страховка для активностей", "Activity insurance"),
      item("flashlight", "sports", "Фонарь", "Flashlight"),
      item("navigation", "sports", "Навигация и запасной аккумулятор", "Navigation and spare battery"),
      item("energy-food", "food", "Энергетические продукты", "Energy snacks"),
    ],
  },
  {
    id: "road-trip", title: l("Автопутешествие", "Road trip"), description: l("Свобода маршрута", "Freedom on the road"), symbol: "→",
    items: [
      item("driving-license", "documents", "Водительское удостоверение", "Driving licence"),
      item("car-documents", "car", "Документы на автомобиль", "Vehicle documents"),
      item("car-insurance", "car", "Страховка автомобиля", "Vehicle insurance"),
      item("warning-kit", "car", "Аварийный комплект", "Emergency roadside kit"),
      item("phone-holder", "car", "Держатель телефона", "Phone holder"),
      item("spare-wheel", "car", "Запасное колесо и инструменты", "Spare wheel and tools"),
    ],
  },
  {
    id: "family", title: l("С ребенком", "With a child"), description: l("Комфорт для всей семьи", "Comfort for the family"), symbol: "+",
    items: [
      item("stroller", "child", "Коляска при необходимости", "Stroller if needed"),
      item("child-seat", "child", "Детское кресло", "Child seat"),
    ],
  },
  {
    id: "with-pet", title: l("С питомцем", "With a pet"), description: l("Все для совместной поездки", "Everything for travelling together"), symbol: "◇",
    items: [
      item("pet-medicine", "pet", "Лекарства питомца", "Pet medication"),
      item("pet-cleanup", "pet", "Пакеты и средства гигиены", "Waste bags and hygiene supplies"),
    ],
  },
  {
    id: "study", title: l("Учеба или работа", "Study or work"), description: l("Длительное пребывание", "Long-term stay"), symbol: "A",
    items: [
      item("invitation", "documents", "Приглашение или договор", "Invitation or contract"),
      item("document-photos", "documents", "Фотографии на документы", "Passport photos"),
      item("long-insurance", "documents", "Долгосрочная страховка", "Long-term insurance"),
      item("peripherals", "work", "Рабочая периферия", "Work peripherals"),
    ],
  },
];

export const seasons: Option[] = [
  { id: "spring", title: l("Весна", "Spring"), description: l("Слои и перемены", "Layers and change"), symbol: "◌", items: [
    item("light-jacket", "clothes", "Легкая куртка", "Light jacket"),
    item("compact-umbrella", "luggage", "Компактный зонт", "Compact umbrella"),
  ] },
  { id: "summer", title: l("Лето", "Summer"), description: l("Тепло и солнце", "Warm and sunny"), symbol: "☼", items: [
    item("light-clothes", "clothes", "Легкая одежда", "Lightweight clothes"),
    item("sun-protection", "health", "Защита от солнца", "Sun protection"),
    item("insect-repellent", "health", "Средство от насекомых", "Insect repellent"),
  ] },
  { id: "autumn", title: l("Осень", "Autumn"), description: l("Прохлада и дождь", "Cool and rainy"), symbol: "◐", items: [
    item("warm-layer", "clothes", "Теплый слой одежды", "Warm clothing layer"),
    item("waterproof-shoes", "shoes", "Непромокаемая обувь", "Waterproof shoes"),
  ] },
  { id: "winter", title: l("Зима", "Winter"), description: l("Холодная погода", "Cold weather"), symbol: "✣", items: [
    item("winter-coat", "clothes", "Теплая куртка", "Warm coat"),
    item("thermal-underwear", "clothes", "Термобелье", "Thermal underwear"),
    item("gloves-hat", "clothes", "Перчатки и шапка", "Gloves and hat"),
    item("winter-shoes", "shoes", "Теплая обувь", "Warm footwear"),
    item("moisturizer", "hygiene", "Увлажняющий крем", "Moisturiser"),
  ] },
  { id: "rainy", title: l("Сезон дождей", "Rainy season"), description: l("Влага и ливни", "Wet and stormy"), symbol: "≋", items: [
    item("raincoat", "clothes", "Дождевик", "Raincoat"),
    item("bag-cover", "luggage", "Чехол для рюкзака", "Backpack rain cover"),
    item("document-pouch", "documents", "Водонепроницаемый пакет", "Waterproof document pouch"),
  ] },
];

export const transports: Option[] = [
  { id: "plane", title: l("Самолет", "Plane"), description: l("Быстро и далеко", "Fast and far"), symbol: "↗", items: [
    item("boarding-pass", "bookings", "Посадочный талон", "Boarding pass"),
    item("airline-rules", "beforeLeaving", "Проверить нормы багажа и жидкостей", "Check baggage and liquid rules"),
    item("airport-transfer", "bookings", "Трансфер до аэропорта", "Airport transfer"),
    item("check-in-time", "beforeLeaving", "Проверить время регистрации", "Check check-in time"),
  ] },
  { id: "train", title: l("Поезд", "Train"), description: l("Спокойный маршрут", "A slower journey"), symbol: "=", items: [
    item("train-slippers", "carryOn", "Тапочки", "Travel slippers"),
    item("train-hygiene", "carryOn", "Средства гигиены в дорогу", "On-board toiletries"),
    item("train-food", "food", "Еда и вода в поезд", "Food and water for the train"),
  ] },
  { id: "car", title: l("Автомобиль", "Car"), description: l("Свой темп", "Your own pace"), symbol: "→", items: [
    item("car-check", "car", "Проверить техническое состояние", "Check the vehicle"),
    item("car-first-aid", "car", "Автомобильная аптечка", "Vehicle first-aid kit"),
    item("car-charger", "car", "Автомобильная зарядка", "Car charger"),
    item("car-maps", "car", "Офлайн-карты", "Offline maps"),
  ] },
  { id: "bus", title: l("Автобус", "Bus"), description: l("Между городами", "Between cities"), symbol: "▭", items: [
    item("neck-pillow", "carryOn", "Подушка для шеи", "Neck pillow"),
    item("bus-snack", "food", "Вода и легкий перекус", "Water and a light snack"),
    item("bus-stop", "bookings", "Проверить место отправления", "Check the departure stop"),
  ] },
];
