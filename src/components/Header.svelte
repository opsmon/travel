<script lang="ts">
  import { t } from "../i18n.svelte";
  import type { Locale } from "../types.svelte";

  export let locale: Locale;
  export let onLocaleChange: (locale: Locale) => void;
  export let onCreate: () => void;

  let open = false;
  const close = () => {
    open = false;
  };
</script>

<header class="site-header">
  <div class="nav-shell">
    <a class="brand" href="#home" on:click={close} aria-label="Travel Checklist">
      <span class="brand-mark" aria-hidden="true">✓</span>
      <span>Travel Checklist</span>
    </a>
    <button
      class="menu-button"
      type="button"
      aria-label={t(locale, "menu")}
      aria-expanded={open}
      on:click={() => (open = !open)}
    >
      <span></span>
      <span></span>
    </button>
    <nav class:nav-links={true} class:is-open={open} aria-label="Main navigation">
      <a href="#home" on:click={close}>{t(locale, "navHome")}</a>
      <a href="#builder" on:click={close}>{t(locale, "navBuilder")}</a>
      <a href="#templates" on:click={close}>{t(locale, "navTemplates")}</a>
      <a href="#about" on:click={close}>{t(locale, "navAbout")}</a>
      <div class="language-switch" aria-label="Language">
        <button class:active={locale === "ru"} on:click={() => onLocaleChange("ru")} type="button">RU</button>
        <span aria-hidden="true">/</span>
        <button class:active={locale === "en"} on:click={() => onLocaleChange("en")} type="button">EN</button>
      </div>
      <button
        class="button button-small"
        type="button"
        on:click={() => {
          close();
          onCreate();
        }}
      >
        {t(locale, "create")}
      </button>
    </nav>
  </div>
</header>
