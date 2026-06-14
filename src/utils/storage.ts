import type { Locale, StoredState, TripConfig } from "../types";

export const STORAGE_KEY = "travel-checklist-state";

export const defaultTrip: TripConfig = {
  country: "INTL",
  duration: "weekend",
  tripType: "tourism",
  season: "summer",
  transport: "plane",
  carryOn: true,
  luggage: false,
  child: false,
  pet: false,
  workTech: false,
};

export function detectLocale(): Locale {
  const urlLocale = new URLSearchParams(window.location.search).get("lang");
  if (urlLocale === "ru" || urlLocale === "en") return urlLocale;
  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export function loadState(): StoredState {
  const fallback: StoredState = {
    version: 1,
    locale: detectLocale(),
    trip: { ...defaultTrip },
    completedItemIds: [],
    customItems: [],
    hideCompleted: false,
    collapsedCategories: [],
    updatedAt: new Date().toISOString(),
  };
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return withUrlConfig(fallback);
    const parsed = JSON.parse(saved) as StoredState;
    if (parsed.version !== 1) return withUrlConfig(fallback);
    return withUrlConfig({ ...fallback, ...parsed, trip: { ...fallback.trip, ...parsed.trip } });
  } catch {
    return withUrlConfig(fallback);
  }
}

function withUrlConfig(state: StoredState): StoredState {
  const params = new URLSearchParams(window.location.search);
  const map: Record<string, keyof TripConfig> = {
    country: "country",
    duration: "duration",
    type: "tripType",
    season: "season",
    transport: "transport",
  };
  const trip = { ...state.trip };
  Object.entries(map).forEach(([param, key]) => {
    const value = params.get(param);
    if (value) {
      (trip[key] as string | boolean) = value;
    }
  });
  const booleanFields: (keyof Pick<TripConfig, "carryOn" | "luggage" | "child" | "pet" | "workTech">)[] = [
    "carryOn",
    "luggage",
    "child",
    "pet",
    "workTech",
  ];
  booleanFields.forEach((key) => {
    const value = params.get(key);
    if (value !== null) trip[key] = value === "1";
  });
  const lang = params.get("lang");
  return { ...state, trip, locale: lang === "ru" || lang === "en" ? lang : state.locale };
}

export function saveState(state: StoredState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // The app remains usable when storage is unavailable.
  }
}
