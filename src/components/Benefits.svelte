<script lang="ts">
  import { t } from "../i18n.svelte";
  import type { Locale } from "../types.svelte";

  export let locale: Locale;

  $: cards = [
    ["01", t(locale, "benefitPersonal"), t(locale, "benefitPersonalText")],
    ["02", t(locale, "benefitPrivate"), t(locale, "benefitPrivateText")],
    ["03", t(locale, "benefitAnywhere"), t(locale, "benefitAnywhereText")],
  ];
</script>

<section class="dark-section">
  <div class="section dark-inner">
    <div class="section-heading light">
      <p class="eyebrow">{t(locale, "benefitsEyebrow")}</p>
      <h2>{t(locale, "benefitsTitle")}</h2>
    </div>
    <div class="benefit-grid">
      {#each cards as [number, title, text] (number)}
        <article>
          <span>{number}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
