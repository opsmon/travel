<script lang="ts">
  import { countries } from "../data/countries.svelte";
  import { durations, seasons, transports, tripTypes } from "../data/options.svelte";
  import { t, type TranslationKey } from "../i18n.svelte";
  import type { Locale, Option, TripConfig } from "../types.svelte";

  export let locale: Locale;
  export let config: TripConfig;
  export let onChange: (config: TripConfig) => void;
  export let onFinish: () => void;

  let step = 0;
  let countryQuery = "";

  const stepKeys = [
    ["stepCountry", "stepCountryText"],
    ["stepDuration", "stepDurationText"],
    ["stepType", "stepTypeText"],
    ["stepSeason", "stepSeasonText"],
    ["stepTransport", "stepTransportText"],
    ["stepExtras", "stepExtrasText"],
  ] as const;

  const optionGroups: { options: Option[]; field: keyof TripConfig }[] = [
    { options: countries, field: "country" },
    { options: durations, field: "duration" },
    { options: tripTypes, field: "tripType" },
    { options: seasons, field: "season" },
    { options: transports, field: "transport" },
  ];

  const extraOptions: {
    field: keyof Pick<TripConfig, "carryOn" | "luggage" | "child" | "pet" | "workTech">;
    symbol: string;
    titleKey: TranslationKey;
    textKey: TranslationKey;
  }[] = [
    { field: "carryOn", symbol: "↗", titleKey: "carryOn", textKey: "carryOnText" },
    { field: "luggage", symbol: "□", titleKey: "luggage", textKey: "luggageText" },
    { field: "child", symbol: "+", titleKey: "child", textKey: "childText" },
    { field: "pet", symbol: "◇", titleKey: "pet", textKey: "petText" },
    { field: "workTech", symbol: "A", titleKey: "workTech", textKey: "workTechText" },
  ];

  $: [titleKey, textKey] = stepKeys[step];
  $: normalizedCountryQuery = countryQuery.trim().toLocaleLowerCase(locale);
  $: matchingCountries = normalizedCountryQuery
    ? countries.filter((country) =>
        [
          country.id,
          country.title.ru,
          country.title.en,
          country.description.ru,
          country.description.en,
        ].some((value) => value.toLocaleLowerCase(locale).includes(normalizedCountryQuery)),
      )
    : countries;
  $: visibleCountries = [...matchingCountries].sort((first, second) => {
    if (first.id === "INTL") return -1;
    if (second.id === "INTL") return 1;
    return first.title[locale].localeCompare(second.title[locale], locale);
  });
  $: activeGroup = optionGroups[step];
  $: stepPercent = ((step + 1) / stepKeys.length) * 100;

  const choose = (field: keyof TripConfig, id: string) => {
    onChange({ ...config, [field]: id });
  };

  const next = () => {
    if (step < stepKeys.length - 1) {
      step += 1;
    } else {
      onFinish();
    }
  };

  const toggleExtra = (field: keyof Pick<TripConfig, "carryOn" | "luggage" | "child" | "pet" | "workTech">) => {
    onChange({ ...config, [field]: !config[field] });
  };
</script>

<section class="builder-section" id="builder">
  <div class="section builder-shell">
    <div class="builder-intro">
      <p class="eyebrow">{t(locale, "builderEyebrow")}</p>
      <h2>{t(locale, "builderTitle")}</h2>
    </div>
    <div class="builder-panel">
      <div class="step-status">
        <span>{t(locale, "step")} {step + 1} {t(locale, "of")} {stepKeys.length}</span>
        <div class="step-track"><i style={`width: ${stepPercent}%`}></i></div>
      </div>
      {#key titleKey}
        <div class="step-copy">
          <h3>{t(locale, titleKey)}</h3>
          <p>{t(locale, textKey)}</p>
        </div>
      {/key}

      {#if step < optionGroups.length}
        {#if step === 0}
          <label class="country-search">
            <span>{t(locale, "countrySearch")}</span>
            <div>
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                bind:value={countryQuery}
                placeholder={t(locale, "countrySearchPlaceholder")}
              />
              <small>{visibleCountries.length}</small>
            </div>
          </label>
        {/if}
        <div class:option-grid={true} class:country-grid={step === 0}>
          {#each step === 0 ? visibleCountries : activeGroup.options as option (option.id)}
            {@const selected = config[activeGroup.field] === option.id}
            <button
              class:option-card={true}
              class:selected={selected}
              type="button"
              aria-pressed={selected}
              on:click={() => choose(activeGroup.field, option.id)}
            >
              <span class="option-symbol" aria-hidden="true">{option.symbol}</span>
              <span class="option-copy">
                <strong>{option.title[locale]}</strong>
                <small>{option.description[locale]}</small>
              </span>
              <span class="option-check" aria-hidden="true">✓</span>
            </button>
          {/each}
        </div>
        {#if step === 0 && visibleCountries.length === 0}
          <p class="country-empty">{t(locale, "noCountries")}</p>
        {/if}
      {:else}
        <div class="option-grid extras-grid">
          {#each extraOptions as extra (extra.field)}
            {@const selected = config[extra.field]}
            <button
              class:option-card={true}
              class:selected={selected}
              type="button"
              aria-pressed={selected}
              on:click={() => toggleExtra(extra.field)}
            >
              <span class="option-symbol" aria-hidden="true">{extra.symbol}</span>
              <span class="option-copy">
                <strong>{t(locale, extra.titleKey)}</strong>
                <small>{t(locale, extra.textKey)}</small>
              </span>
              <span class="option-check" aria-hidden="true">✓</span>
            </button>
          {/each}
        </div>
      {/if}

      <div class="builder-actions">
        <button class="button button-ghost" type="button" disabled={step === 0} on:click={() => (step -= 1)}>
          <span aria-hidden="true">←</span> {t(locale, "back")}
        </button>
        <button class="button" type="button" on:click={next}>
          {step === stepKeys.length - 1 ? t(locale, "finish") : t(locale, "next")} <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  </div>
</section>
