<script lang="ts">
  import { t } from "../i18n.svelte";
  import type { Locale } from "../types.svelte";

  export let locale: Locale;
  export let onCreate: () => void;
</script>

<section class="hero section" id="home">
  <div class="hero-copy">
    <p class="eyebrow">{t(locale, "heroEyebrow")}</p>
    <h1>
      {t(locale, "heroTitle")}
      <span>{t(locale, "heroAccent")}</span>
    </h1>
    <p class="hero-text">{t(locale, "heroText")}</p>
    <div class="hero-actions">
      <button class="button" type="button" on:click={onCreate}>{t(locale, "create")}</button>
      <a class="text-link" href="#templates">{t(locale, "explore")} <span aria-hidden="true">→</span></a>
    </div>
  </div>
  <div class="travel-visual" aria-label={t(locale, "visualTitle")}>
    <div class="visual-orbit orbit-one"></div>
    <div class="visual-orbit orbit-two"></div>
    <div class="passport-card">
      <span class="passport-globe">◎</span>
      <strong>PASSPORT</strong>
      <small>TRAVEL DOCUMENT</small>
    </div>
    <div class="phone-card">
      <div class="phone-top"></div>
      <span class="mini-label">{t(locale, "visualTitle")}</span>
      <strong>53%</strong>
      <div class="mini-progress"><i></i></div>
      <ul>
        <li class="done"><span>✓</span> {locale === "ru" ? "Паспорт" : "Passport"}</li>
        <li><span></span> {locale === "ru" ? "Страховка" : "Insurance"}</li>
        <li><span></span> {locale === "ru" ? "Пауэрбанк" : "Power bank"}</li>
      </ul>
    </div>
    <div class="boarding-card">
      <span>BOARDING PASS</span>
      <strong>SVO <i>→</i> HND</strong>
      <small>14 JUN · 18A</small>
    </div>
    <div class="suitcase">
      <i></i>
      <span class="suitcase-line"></span>
      <b>✓</b>
    </div>
    <div class="visual-caption">{t(locale, "visualProgress")}</div>
  </div>
</section>
