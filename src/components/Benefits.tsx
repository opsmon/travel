import { t } from "../i18n";
import type { Locale } from "../types";

export function Benefits({ locale }: { locale: Locale }) {
  const cards = [
    ["01", t(locale, "benefitPersonal"), t(locale, "benefitPersonalText")],
    ["02", t(locale, "benefitPrivate"), t(locale, "benefitPrivateText")],
    ["03", t(locale, "benefitAnywhere"), t(locale, "benefitAnywhereText")],
  ];
  return (
    <section className="dark-section">
      <div className="section dark-inner">
        <div className="section-heading light">
          <p className="eyebrow">{t(locale, "benefitsEyebrow")}</p>
          <h2>{t(locale, "benefitsTitle")}</h2>
        </div>
        <div className="benefit-grid">
          {cards.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
