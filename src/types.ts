export type Locale = "ru" | "en";
export type Localized = Record<Locale, string>;

export type CategoryId =
  | "documents"
  | "money"
  | "bookings"
  | "clothes"
  | "shoes"
  | "hygiene"
  | "health"
  | "electronics"
  | "carryOn"
  | "luggage"
  | "work"
  | "food"
  | "leisure"
  | "child"
  | "pet"
  | "home"
  | "beforeLeaving"
  | "arrival"
  | "car"
  | "sports";

export interface ChecklistItem {
  id: string;
  title: Localized;
  description?: Localized;
  category: CategoryId;
  required?: boolean;
  tags?: string[];
  sourceUrl?: string;
  lastReviewed?: string;
}

export interface Option {
  id: string;
  title: Localized;
  description: Localized;
  symbol: string;
  items: ChecklistItem[];
  sourceUrl?: string;
  lastReviewed?: string;
}

export interface TripConfig {
  country: string;
  duration: string;
  tripType: string;
  season: string;
  transport: string;
  carryOn: boolean;
  luggage: boolean;
  child: boolean;
  pet: boolean;
  workTech: boolean;
}

export interface CustomItem extends ChecklistItem {
  custom: true;
}

export interface StoredState {
  version: 1;
  locale: Locale;
  trip: TripConfig;
  completedItemIds: string[];
  customItems: CustomItem[];
  hideCompleted: boolean;
  collapsedCategories: CategoryId[];
  updatedAt: string;
}

export interface Template {
  id: string;
  title: Localized;
  description: Localized;
  meta: Localized;
  symbol: string;
  config: Partial<TripConfig>;
}
