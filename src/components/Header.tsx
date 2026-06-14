import { useState } from "react";
import { t } from "../i18n";
import type { Locale } from "../types";

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onCreate: () => void;
}

export function Header({ locale, onLocaleChange, onCreate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={close} aria-label="Travel Checklist">
          <span className="brand-mark" aria-hidden="true">✓</span>
          <span>Travel Checklist</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={t(locale, "menu")}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#home" onClick={close}>{t(locale, "navHome")}</a>
          <a href="#builder" onClick={close}>{t(locale, "navBuilder")}</a>
          <a href="#templates" onClick={close}>{t(locale, "navTemplates")}</a>
          <a href="#about" onClick={close}>{t(locale, "navAbout")}</a>
          <div className="language-switch" aria-label="Language">
            <button className={locale === "ru" ? "active" : ""} onClick={() => onLocaleChange("ru")} type="button">RU</button>
            <span aria-hidden="true">/</span>
            <button className={locale === "en" ? "active" : ""} onClick={() => onLocaleChange("en")} type="button">EN</button>
          </div>
          <button className="button button-small" type="button" onClick={() => { close(); onCreate(); }}>
            {t(locale, "create")}
          </button>
        </nav>
      </div>
    </header>
  );
}
