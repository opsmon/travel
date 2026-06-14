import { useState } from "react";
import { countries } from "../data/countries";
import { durations, seasons, transports, tripTypes } from "../data/options";
import { t } from "../i18n";
import type { Locale, Option, TripConfig } from "../types";

interface BuilderProps {
  locale: Locale;
  config: TripConfig;
  onChange: (config: TripConfig) => void;
  onFinish: () => void;
}

const stepKeys = [
  ["stepCountry", "stepCountryText"],
  ["stepDuration", "stepDurationText"],
  ["stepType", "stepTypeText"],
  ["stepSeason", "stepSeasonText"],
  ["stepTransport", "stepTransportText"],
  ["stepExtras", "stepExtrasText"],
] as const;

export function Builder({ locale, config, onChange, onFinish }: BuilderProps) {
  const [step, setStep] = useState(0);
  const [countryQuery, setCountryQuery] = useState("");
  const optionGroups: { options: Option[]; field: keyof TripConfig }[] = [
    { options: countries, field: "country" },
    { options: durations, field: "duration" },
    { options: tripTypes, field: "tripType" },
    { options: seasons, field: "season" },
    { options: transports, field: "transport" },
  ];
  const [titleKey, textKey] = stepKeys[step];
  const normalizedCountryQuery = countryQuery.trim().toLocaleLowerCase(locale);
  const matchingCountries = normalizedCountryQuery
    ? countries.filter((country) => [
        country.id,
        country.title.ru,
        country.title.en,
        country.description.ru,
        country.description.en,
      ].some((value) => value.toLocaleLowerCase(locale).includes(normalizedCountryQuery)))
    : countries;
  const visibleCountries = [...matchingCountries].sort((first, second) => {
    if (first.id === "INTL") return -1;
    if (second.id === "INTL") return 1;
    return first.title[locale].localeCompare(second.title[locale], locale);
  });

  const choose = (field: keyof TripConfig, id: string) => {
    onChange({ ...config, [field]: id });
  };

  const next = () => {
    if (step < stepKeys.length - 1) {
      setStep((value) => value + 1);
    } else {
      onFinish();
    }
  };

  return (
    <section className="builder-section" id="builder">
      <div className="section builder-shell">
        <div className="builder-intro">
          <p className="eyebrow">{t(locale, "builderEyebrow")}</p>
          <h2>{t(locale, "builderTitle")}</h2>
        </div>
        <div className="builder-panel">
          <div className="step-status">
            <span>{t(locale, "step")} {step + 1} {t(locale, "of")} {stepKeys.length}</span>
            <div className="step-track"><i style={{ width: `${((step + 1) / stepKeys.length) * 100}%` }} /></div>
          </div>
          <div className="step-copy" key={titleKey}>
            <h3>{t(locale, titleKey)}</h3>
            <p>{t(locale, textKey)}</p>
          </div>

          {step < optionGroups.length ? (
            <>
              {step === 0 && (
                <label className="country-search">
                  <span>{t(locale, "countrySearch")}</span>
                  <div>
                    <span aria-hidden="true">⌕</span>
                    <input
                      type="search"
                      value={countryQuery}
                      placeholder={t(locale, "countrySearchPlaceholder")}
                      onChange={(event) => setCountryQuery(event.target.value)}
                    />
                    <small>{visibleCountries.length}</small>
                  </div>
                </label>
              )}
              <div className={`option-grid ${step === 0 ? "country-grid" : ""}`}>
                {(step === 0 ? visibleCountries : optionGroups[step].options).map((option) => {
                  const selected = config[optionGroups[step].field] === option.id;
                  return (
                    <button
                      className={`option-card ${selected ? "selected" : ""}`}
                      type="button"
                      key={option.id}
                      aria-pressed={selected}
                      onClick={() => choose(optionGroups[step].field, option.id)}
                    >
                      <span className="option-symbol" aria-hidden="true">{option.symbol}</span>
                      <span className="option-copy">
                        <strong>{option.title[locale]}</strong>
                        <small>{option.description[locale]}</small>
                      </span>
                      <span className="option-check" aria-hidden="true">✓</span>
                    </button>
                  );
                })}
              </div>
              {step === 0 && visibleCountries.length === 0 && <p className="country-empty">{t(locale, "noCountries")}</p>}
            </>
          ) : (
            <div className="option-grid extras-grid">
              {(["carryOn", "luggage", "child", "pet", "workTech"] as const).map((field, index) => {
                const symbols = ["↗", "□", "+", "◇", "A"];
                const selected = config[field];
                return (
                  <button
                    className={`option-card ${selected ? "selected" : ""}`}
                    type="button"
                    key={field}
                    aria-pressed={selected}
                    onClick={() => onChange({ ...config, [field]: !selected })}
                  >
                    <span className="option-symbol" aria-hidden="true">{symbols[index]}</span>
                    <span className="option-copy">
                      <strong>{t(locale, field)}</strong>
                      <small>{t(locale, `${field}Text` as "carryOnText")}</small>
                    </span>
                    <span className="option-check" aria-hidden="true">✓</span>
                  </button>
                );
              })}
            </div>
          )}

          <div className="builder-actions">
            <button className="button button-ghost" type="button" disabled={step === 0} onClick={() => setStep((value) => value - 1)}>
              <span aria-hidden="true">←</span> {t(locale, "back")}
            </button>
            <button className="button" type="button" onClick={next}>
              {step === stepKeys.length - 1 ? t(locale, "finish") : t(locale, "next")} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
