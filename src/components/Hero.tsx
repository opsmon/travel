import { t } from "../i18n";
import type { Locale } from "../types";

interface HeroProps {
  locale: Locale;
  onCreate: () => void;
}

export function Hero({ locale, onCreate }: HeroProps) {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">{t(locale, "heroEyebrow")}</p>
        <h1>
          {t(locale, "heroTitle")}
          <span>{t(locale, "heroAccent")}</span>
        </h1>
        <p className="hero-text">{t(locale, "heroText")}</p>
        <div className="hero-actions">
          <button className="button" type="button" onClick={onCreate}>{t(locale, "create")}</button>
          <a className="text-link" href="#templates">{t(locale, "explore")} <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="travel-visual" aria-label={t(locale, "visualTitle")}>
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="passport-card">
          <span className="passport-globe">◎</span>
          <strong>PASSPORT</strong>
          <small>TRAVEL DOCUMENT</small>
        </div>
        <div className="phone-card">
          <div className="phone-top" />
          <span className="mini-label">{t(locale, "visualTitle")}</span>
          <strong>53%</strong>
          <div className="mini-progress"><i /></div>
          <ul>
            <li className="done"><span>✓</span> {locale === "ru" ? "Паспорт" : "Passport"}</li>
            <li><span /> {locale === "ru" ? "Страховка" : "Insurance"}</li>
            <li><span /> {locale === "ru" ? "Пауэрбанк" : "Power bank"}</li>
          </ul>
        </div>
        <div className="boarding-card">
          <span>BOARDING PASS</span>
          <strong>SVO <i>→</i> HND</strong>
          <small>14 JUN · 18A</small>
        </div>
        <div className="suitcase">
          <i />
          <span className="suitcase-line" />
          <b>✓</b>
        </div>
        <div className="visual-caption">{t(locale, "visualProgress")}</div>
      </div>
    </section>
  );
}
