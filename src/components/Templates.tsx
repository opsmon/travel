import { templates } from "../data/templates";
import { t } from "../i18n";
import type { Locale, Template } from "../types";

interface TemplatesProps {
  locale: Locale;
  onSelect: (template: Template) => void;
}

export function Templates({ locale, onSelect }: TemplatesProps) {
  return (
    <section className="section templates-section" id="templates">
      <div className="section-heading">
        <p className="eyebrow">{t(locale, "scenariosEyebrow")}</p>
        <h2>{t(locale, "scenariosTitle")}</h2>
        <p>{t(locale, "scenariosText")}</p>
      </div>
      <div className="template-grid">
        {templates.map((template, index) => (
          <article className={`template-card tone-${(index % 4) + 1}`} key={template.id}>
            <div className="template-symbol" aria-hidden="true">{template.symbol}</div>
            <div>
              <p className="template-meta">{template.meta[locale]}</p>
              <h3>{template.title[locale]}</h3>
              <p>{template.description[locale]}</p>
              <button className="card-link" type="button" onClick={() => onSelect(template)}>
                {t(locale, "useTemplate")} <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
