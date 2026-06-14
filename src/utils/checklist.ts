import { commonItems, extraItems } from "../data/common";
import { countries } from "../data/countries";
import { durations, seasons, transports, tripTypes } from "../data/options";
import type { ChecklistItem, CustomItem, TripConfig } from "../types";

const itemsFor = (options: { id: string; items: ChecklistItem[] }[], id: string) =>
  options.find((option) => option.id === id)?.items ?? [];

export function createChecklist(
  config: TripConfig,
  customItems: CustomItem[],
): ChecklistItem[] {
  const sources: ChecklistItem[][] = [
    commonItems,
    itemsFor(durations, config.duration),
    itemsFor(countries, config.country),
    itemsFor(tripTypes, config.tripType),
    itemsFor(seasons, config.season),
    itemsFor(transports, config.transport),
    config.carryOn ? extraItems.carryOn : [],
    config.luggage ? extraItems.luggage : [],
    config.child ? extraItems.child : [],
    config.pet ? extraItems.pet : [],
    config.workTech ? extraItems.workTech : [],
    customItems,
  ];

  const merged = new Map<string, ChecklistItem>();
  sources.flat().forEach((entry) => {
    const previous = merged.get(entry.id);
    merged.set(entry.id, previous ? {
      ...previous,
      ...entry,
      required: previous.required || entry.required,
      tags: [...new Set([...(previous.tags ?? []), ...(entry.tags ?? [])])],
    } : entry);
  });
  return [...merged.values()];
}
