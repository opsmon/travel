<script lang="ts">
  import { categories } from "../data/common.svelte";
  import { countries } from "../data/countries.svelte";
  import { durations, seasons, transports, tripTypes } from "../data/options.svelte";
  import { formatItemCount, t } from "../i18n.svelte";
  import type { CategoryId, ChecklistItem, CustomItem, Locale, TripConfig } from "../types.svelte";

  export let locale: Locale;
  export let config: TripConfig;
  export let items: ChecklistItem[];
  export let completed: Set<string>;
  export let hideCompleted: boolean;
  export let collapsed: Set<CategoryId>;
  export let updatedAt: string;
  export let onToggle: (id: string) => void;
  export let onHideCompleted: (value: boolean) => void;
  export let onCollapse: (category: CategoryId) => void;
  export let onCollapseAll: (collapsed: boolean) => void;
  export let onAddCustom: (item: CustomItem) => void;
  export let onRemoveCustom: (id: string) => void;
  export let onReset: () => void;
  export let onResetList: () => void;
  export let onEdit: () => void;
  export let notify: (message: string) => void;

  let showAdd = false;
  let customTitle = "";
  let customDescription = "";
  let customCategory: CategoryId = "luggage";

  function optionTitle(options: { id: string; title: Record<Locale, string> }[], id: string, activeLocale: Locale) {
    return options.find((option) => option.id === id)?.title[activeLocale] ?? id;
  }

  $: completedCount = items.filter((entry) => completed.has(entry.id)).length;
  $: percent = items.length ? Math.round((completedCount / items.length) * 100) : 0;
  $: country = countries.find((entry) => entry.id === config.country);
  $: grouped = categories
    .map((category) => ({
      ...category,
      items: items.filter((entry) => entry.category === category.id),
    }))
    .filter((category) => category.items.length > 0);
  $: tripTitle = `${t(locale, "checklistTitle")} · ${optionTitle(countries, config.country, locale)}`;
  $: tripMeta = [
    optionTitle(durations, config.duration, locale),
    optionTitle(tripTypes, config.tripType, locale),
    optionTitle(seasons, config.season, locale),
    optionTitle(transports, config.transport, locale),
  ].join(" · ");
  $: savedLabel = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date(updatedAt));
  $: reviewedLabel = country?.lastReviewed
    ? new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(new Date(country.lastReviewed))
    : "";

  const buildText = () => {
    const lines = [tripTitle, tripMeta, ""];
    grouped.forEach((group) => {
      lines.push(group.title[locale]);
      group.items.forEach((entry) => {
        lines.push(`[${completed.has(entry.id) ? "x" : " "}] ${entry.title[locale]}`);
      });
      lines.push("");
    });
    return lines.join("\n");
  };

  const copyChecklist = async () => {
    await navigator.clipboard.writeText(buildText());
    notify(t(locale, "copied"));
  };

  const share = async () => {
    const params = new URLSearchParams({
      lang: locale,
      country: config.country,
      duration: config.duration,
      type: config.tripType,
      season: config.season,
      transport: config.transport,
      carryOn: config.carryOn ? "1" : "0",
      luggage: config.luggage ? "1" : "0",
      child: config.child ? "1" : "0",
      pet: config.pet ? "1" : "0",
      workTech: config.workTech ? "1" : "0",
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}#checklist`;
    await navigator.clipboard.writeText(url);
    notify(t(locale, "shared"));
  };

  const addCustom = () => {
    const title = customTitle.trim();
    if (!title) return;
    const id = `custom-${Date.now()}`;
    onAddCustom({
      id,
      custom: true,
      category: customCategory,
      title: { ru: title, en: title },
      ...(customDescription.trim()
        ? { description: { ru: customDescription.trim(), en: customDescription.trim() } }
        : {}),
    });
    customTitle = "";
    customDescription = "";
    showAdd = false;
  };

  const resetList = () => {
    if (window.confirm(t(locale, "resetListConfirm"))) onResetList();
  };
</script>

<section class="checklist-section" id="checklist">
  <div class="section checklist-shell">
    <div class="checklist-heading">
      <div>
        <p class="eyebrow">{t(locale, "checklistEyebrow")}</p>
        <h2>{tripTitle}</h2>
        <p>{tripMeta}</p>
      </div>
      <button class="button button-ghost edit-button" type="button" on:click={onEdit}>{t(locale, "edit")}</button>
    </div>

    <div class="progress-card">
      <div class="progress-number">
        <strong>{percent}%</strong>
        <span>{formatItemCount(locale, items.length)} · {completedCount} {t(locale, "completed")}</span>
      </div>
      <div class="progress-track" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
        <i style={`width: ${percent}%`}></i>
      </div>
      <small>{t(locale, "lastSaved")}: {savedLabel}</small>
    </div>

    <div class="action-bar" aria-label="Checklist actions">
      <button type="button" on:click={() => (showAdd = true)}><span>＋</span>{t(locale, "addItem")}</button>
      <button type="button" aria-pressed={hideCompleted} on:click={() => onHideCompleted(!hideCompleted)}><span>◉</span>{t(locale, hideCompleted ? "showCompleted" : "hideCompleted")}</button>
      <button type="button" on:click={() => onCollapseAll(false)}><span>↕</span>{t(locale, "expandAll")}</button>
      <button type="button" on:click={() => onCollapseAll(true)}><span>↔</span>{t(locale, "collapseAll")}</button>
      <button type="button" on:click={() => void copyChecklist()}><span>□</span>{t(locale, "copy")}</button>
      <button type="button" on:click={() => window.print()}><span>⌁</span>{t(locale, "print")}</button>
      <button type="button" on:click={() => void share()}><span>↗</span>{t(locale, "share")}</button>
      <button class="danger-action" type="button" on:click={onReset}><span>↺</span>{t(locale, "reset")}</button>
      <button class="danger-action" type="button" on:click={resetList}><span>⌫</span>{t(locale, "resetList")}</button>
    </div>

    {#if showAdd}
      <div class="add-panel">
        <div class="field">
          <label for="custom-title">{t(locale, "itemName")}</label>
          <input id="custom-title" bind:value={customTitle} />
        </div>
        <div class="field">
          <label for="custom-description">{t(locale, "itemDescription")}</label>
          <input id="custom-description" bind:value={customDescription} />
        </div>
        <div class="field">
          <label for="custom-category">{t(locale, "category")}</label>
          <select id="custom-category" bind:value={customCategory}>
            {#each categories as category (category.id)}
              <option value={category.id}>{category.title[locale]}</option>
            {/each}
          </select>
        </div>
        <div class="add-actions">
          <button class="button button-ghost" type="button" on:click={() => (showAdd = false)}>{t(locale, "cancel")}</button>
          <button class="button" type="button" disabled={!customTitle.trim()} on:click={addCustom}>{t(locale, "add")}</button>
        </div>
      </div>
    {/if}

    <div class="notice warning-notice">
      <span aria-hidden="true">!</span>
      <div>
        <h3>{t(locale, "warningTitle")}</h3>
        <p>{t(locale, "warning")}</p>
        {#if country?.sourceUrl}
          <p class="source-line">
            <a href={country.sourceUrl} target="_blank" rel="noreferrer">{t(locale, "source")} ↗</a>
            {#if reviewedLabel}
              · {t(locale, "reviewed")} {reviewedLabel}
            {/if}
          </p>
        {/if}
      </div>
    </div>

    <div class="checklist-groups">
      {#if grouped.length === 0}
        <p>{t(locale, "noItems")}</p>
      {/if}
      {#each grouped as group (group.id)}
        {@const visible = hideCompleted ? group.items.filter((entry) => !completed.has(entry.id)) : group.items}
        {@const groupDone = group.items.filter((entry) => completed.has(entry.id)).length}
        {@const isCollapsed = collapsed.has(group.id)}
        <article class="checklist-group">
          <button class="group-heading" type="button" aria-expanded={!isCollapsed} on:click={() => onCollapse(group.id)}>
            <span>
              <strong>{group.title[locale]}</strong>
              <small>{groupDone} / {group.items.length}</small>
            </span>
            <i aria-hidden="true">{isCollapsed ? "+" : "−"}</i>
          </button>
          {#if !isCollapsed}
            <div class="group-items">
              {#if visible.length === 0}
                <p class="empty-message">{t(locale, "emptyCategory")}</p>
              {/if}
              {#each visible as entry (entry.id)}
                {@const isDone = completed.has(entry.id)}
                {@const custom = (entry as Partial<CustomItem>).custom === true}
                <div class:checklist-item={true} class:is-done={isDone}>
                  <label>
                    <input type="checkbox" checked={isDone} on:change={() => onToggle(entry.id)} />
                    <span class="custom-checkbox" aria-hidden="true">✓</span>
                    <span class="item-copy">
                      <strong>{entry.title[locale]}</strong>
                      {#if entry.description}
                        <small>{entry.description[locale]}</small>
                      {/if}
                    </span>
                  </label>
                  {#if custom}
                    <button
                      class="remove-item"
                      type="button"
                      on:click={() => onRemoveCustom(entry.id)}
                      aria-label={`${t(locale, "remove")}: ${entry.title[locale]}`}
                    >
                      ×
                    </button>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    </div>

    <div class="notice medicine-notice">
      <span aria-hidden="true">+</span>
      <div>
        <h3>{t(locale, "medicineTitle")}</h3>
        <p>{t(locale, "medicine")}</p>
      </div>
    </div>
  </div>
</section>
