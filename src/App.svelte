<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import About from "./components/About.svelte";
  import Benefits from "./components/Benefits.svelte";
  import Builder from "./components/Builder.svelte";
  import Checklist from "./components/Checklist.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import Templates from "./components/Templates.svelte";
  import { categories } from "./data/common.svelte";
  import { t } from "./i18n.svelte";
  import type { CategoryId, CustomItem, Locale, StoredState, Template, TripConfig } from "./types.svelte";
  import { createChecklist } from "./utils/checklist.svelte";
  import { loadState, saveState } from "./utils/storage.svelte";

  const initial: StoredState = loadState();

  let locale: Locale = initial.locale;
  let trip: TripConfig = initial.trip;
  let completed = new Set(initial.completedItemIds);
  let customItems: CustomItem[] = initial.customItems;
  let hideCompleted = initial.hideCompleted;
  let collapsed = new Set<CategoryId>(initial.collapsedCategories);
  let updatedAt = initial.updatedAt;
  let toast = "";
  let saveTimer: number | undefined;
  let toastTimer: number | undefined;

  $: items = createChecklist(trip, customItems);
  $: footerYear = new Date().getFullYear();

  $: {
    const title = locale === "ru"
      ? "Travel Checklist — список вещей для путешествия"
      : "Travel Checklist — Packing list for every trip";
    const description = locale === "ru"
      ? "Бесплатный конструктор чеклиста для отпуска, командировки, поездки на выходные или длительного переезда."
      : "A free travel checklist builder for weekends, holidays, business trips and long-term relocation.";
    document.documentElement.lang = locale;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }

  $: {
    const nextUpdatedAt = new Date().toISOString();
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => {
      saveState({
        version: 1,
        locale,
        trip,
        completedItemIds: [...completed],
        customItems,
        hideCompleted,
        collapsedCategories: [...collapsed],
        updatedAt: nextUpdatedAt,
      });
      updatedAt = nextUpdatedAt;
    }, 150);
  }

  $: {
    window.clearTimeout(toastTimer);
    if (toast) {
      toastTimer = window.setTimeout(() => {
        toast = "";
      }, 2400);
    }
  }

  onMount(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  });

  onDestroy(() => {
    window.clearTimeout(saveTimer);
    window.clearTimeout(toastTimer);
  });

  const scrollTo = (id: string) => {
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const changeLocale = (nextLocale: Locale) => {
    locale = nextLocale;
    const params = new URLSearchParams(window.location.search);
    params.set("lang", nextLocale);
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}${window.location.hash}`);
  };

  const applyTemplate = (template: Template) => {
    trip = { ...trip, ...template.config };
    completed = new Set();
    scrollTo("checklist");
  };

  const setTrip = (nextTrip: TripConfig) => {
    trip = nextTrip;
  };

  const toggleCompleted = (id: string) => {
    const next = new Set(completed);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    completed = next;
  };

  const toggleCollapsed = (category: CategoryId) => {
    const next = new Set(collapsed);
    if (next.has(category)) next.delete(category);
    else next.add(category);
    collapsed = next;
  };

  const collapseAll = (value: boolean) => {
    collapsed = value ? new Set(categories.map((category) => category.id)) : new Set();
  };

  const addCustom = (entry: CustomItem) => {
    customItems = [...customItems, entry];
  };

  const removeCustom = (id: string) => {
    customItems = customItems.filter((entry) => entry.id !== id);
    const next = new Set(completed);
    next.delete(id);
    completed = next;
  };
</script>

<Header locale={locale} onLocaleChange={changeLocale} onCreate={() => scrollTo("builder")} />
<main>
  <Hero locale={locale} onCreate={() => scrollTo("builder")} />
  <Templates locale={locale} onSelect={applyTemplate} />
  <Benefits locale={locale} />
  <Builder locale={locale} config={trip} onChange={setTrip} onFinish={() => scrollTo("checklist")} />
  <Checklist
    locale={locale}
    config={trip}
    items={items}
    completed={completed}
    hideCompleted={hideCompleted}
    collapsed={collapsed}
    updatedAt={updatedAt}
    onToggle={toggleCompleted}
    onHideCompleted={(value) => (hideCompleted = value)}
    onCollapse={toggleCollapsed}
    onCollapseAll={collapseAll}
    onAddCustom={addCustom}
    onRemoveCustom={removeCustom}
    onReset={() => (completed = new Set())}
    onEdit={() => scrollTo("builder")}
    notify={(message) => (toast = message)}
  />
  <About locale={locale} />
</main>
<footer>
  <a class="brand" href="#home"><span class="brand-mark" aria-hidden="true">✓</span><span>Travel Checklist</span></a>
  <p>{t(locale, "footerText")}</p>
  <span>© {footerYear}</span>
</footer>
<div class:toast={true} class:show={Boolean(toast)} role="status" aria-live="polite">{toast}</div>
