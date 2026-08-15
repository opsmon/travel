<script lang="ts">
  import { templates } from "../data/templates.svelte";
  import { t } from "../i18n.svelte";
  import type { Locale, Template } from "../types.svelte";

  export let locale: Locale;
  export let onSelect: (template: Template) => void;
</script>

<section class="section templates-section" id="templates">
  <div class="section-heading">
    <p class="eyebrow">{t(locale, "scenariosEyebrow")}</p>
    <h2>{t(locale, "scenariosTitle")}</h2>
    <p>{t(locale, "scenariosText")}</p>
  </div>
  <div class="template-grid">
    {#each templates as template, index (template.id)}
      <article class={`template-card tone-${(index % 4) + 1}`}>
        <div class="template-symbol" aria-hidden="true">{template.symbol}</div>
        <div>
          <p class="template-meta">{template.meta[locale]}</p>
          <h3>{template.title[locale]}</h3>
          <p>{template.description[locale]}</p>
          <button class="card-link" type="button" on:click={() => onSelect(template)}>
            {t(locale, "useTemplate")} <span aria-hidden="true">→</span>
          </button>
        </div>
      </article>
    {/each}
  </div>
</section>
