<script lang="ts">
  import { t } from "../i18n.svelte";
  import type { Locale } from "../types.svelte";

  export let locale: Locale;
</script>

<section class="section about-section" id="about">
  <div class="about-copy">
    <p class="eyebrow">{t(locale, "aboutEyebrow")}</p>
    <h2>{t(locale, "aboutTitle")}</h2>
    <p>{t(locale, "aboutText")}</p>
  </div>
  <div class="about-stats" aria-label="Project facts">
    <div><strong>0</strong><span>{t(locale, "free")}</span></div>
    <div><strong>100%</strong><span>{t(locale, "local")}</span></div>
    <div><strong>2</strong><span>{t(locale, "bilingual")}</span></div>
  </div>
</section>
