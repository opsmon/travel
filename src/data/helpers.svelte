<script context="module" lang="ts">
import type { CategoryId, ChecklistItem, Localized } from "../types.svelte";

export const l = (ru: string, en: string): Localized => ({ ru, en });

export const item = (
  id: string,
  category: CategoryId,
  ru: string,
  en: string,
  ruDescription?: string,
  enDescription?: string,
): ChecklistItem => ({
  id,
  category,
  title: l(ru, en),
  ...(ruDescription && enDescription
    ? { description: l(ruDescription, enDescription) }
    : {}),
});

</script>
