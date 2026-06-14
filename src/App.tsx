import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { Builder } from "./components/Builder";
import { Checklist } from "./components/Checklist";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Templates } from "./components/Templates";
import { categories } from "./data/common";
import { t } from "./i18n";
import type { CategoryId, CustomItem, Locale, StoredState, Template, TripConfig } from "./types";
import { createChecklist } from "./utils/checklist";
import { loadState, saveState } from "./utils/storage";

export default function App() {
  const initial = useRef<StoredState>(loadState());
  const [locale, setLocale] = useState<Locale>(initial.current.locale);
  const [trip, setTrip] = useState<TripConfig>(initial.current.trip);
  const [completed, setCompleted] = useState<Set<string>>(new Set(initial.current.completedItemIds));
  const [customItems, setCustomItems] = useState<CustomItem[]>(initial.current.customItems);
  const [hideCompleted, setHideCompleted] = useState(initial.current.hideCompleted);
  const [collapsed, setCollapsed] = useState<Set<CategoryId>>(new Set(initial.current.collapsedCategories));
  const [updatedAt, setUpdatedAt] = useState(initial.current.updatedAt);
  const [toast, setToast] = useState("");
  const items = useMemo(() => createChecklist(trip, customItems), [trip, customItems]);

  useLayoutEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    document.getElementById(id)?.scrollIntoView();
  }, []);

  useEffect(() => {
    const nextUpdatedAt = new Date().toISOString();
    const timer = window.setTimeout(() => {
      saveState({
        version: 1,
        locale,
        trip,
        completedItemIds: [...completed],
        customItems,
        hideCompleted,
        collapsedCategories: [...collapsed],
        updatedAt: nextUpdatedAt,
      });
      setUpdatedAt(nextUpdatedAt);
    }, 150);
    return () => window.clearTimeout(timer);
  }, [locale, trip, completed, customItems, hideCompleted, collapsed]);

  useEffect(() => {
    document.documentElement.lang = locale;
    const title = locale === "ru"
      ? "Travel Checklist — список вещей для путешествия"
      : "Travel Checklist — Packing list for every trip";
    const description = locale === "ru"
      ? "Бесплатный конструктор чеклиста для отпуска, командировки, поездки на выходные или длительного переезда."
      : "A free travel checklist builder for weekends, holidays, business trips and long-term relocation.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [locale]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const scrollTo = (id: string) => {
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    const params = new URLSearchParams(window.location.search);
    params.set("lang", nextLocale);
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}${window.location.hash}`);
  };

  const applyTemplate = (template: Template) => {
    setTrip((current) => ({ ...current, ...template.config }));
    setCompleted(new Set());
    scrollTo("checklist");
  };

  const toggleCompleted = (id: string) => {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCollapsed = (category: CategoryId) => {
    setCollapsed((current) => {
      const next = new Set(current);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const collapseAll = (value: boolean) => {
    setCollapsed(value ? new Set(categories.map((category) => category.id)) : new Set());
  };

  return (
    <>
      <Header locale={locale} onLocaleChange={changeLocale} onCreate={() => scrollTo("builder")} />
      <main>
        <Hero locale={locale} onCreate={() => scrollTo("builder")} />
        <Templates locale={locale} onSelect={applyTemplate} />
        <Benefits locale={locale} />
        <Builder locale={locale} config={trip} onChange={setTrip} onFinish={() => scrollTo("checklist")} />
        <Checklist
          locale={locale}
          config={trip}
          items={items}
          completed={completed}
          hideCompleted={hideCompleted}
          collapsed={collapsed}
          updatedAt={updatedAt}
          onToggle={toggleCompleted}
          onHideCompleted={setHideCompleted}
          onCollapse={toggleCollapsed}
          onCollapseAll={collapseAll}
          onAddCustom={(entry) => setCustomItems((current) => [...current, entry])}
          onRemoveCustom={(id) => {
            setCustomItems((current) => current.filter((entry) => entry.id !== id));
            setCompleted((current) => {
              const next = new Set(current);
              next.delete(id);
              return next;
            });
          }}
          onReset={() => setCompleted(new Set())}
          onEdit={() => scrollTo("builder")}
          notify={setToast}
        />
        <About locale={locale} />
      </main>
      <footer>
        <a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">✓</span><span>Travel Checklist</span></a>
        <p>{t(locale, "footerText")}</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
