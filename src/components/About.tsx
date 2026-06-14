import { t } from "../i18n";
import type { Locale } from "../types";

export function About({ locale }: { locale: Locale }) {
  return (
    <section className="section about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">{t(locale, "aboutEyebrow")}</p>
        <h2>{t(locale, "aboutTitle")}</h2>
        <p>{t(locale, "aboutText")}</p>
      </div>
      <div className="about-stats" aria-label="Project facts">
        <div><strong>0</strong><span>{t(locale, "free")}</span></div>
        <div><strong>100%</strong><span>{t(locale, "local")}</span></div>
        <div><strong>2</strong><span>{t(locale, "bilingual")}</span></div>
      </div>
    </section>
  );
}
