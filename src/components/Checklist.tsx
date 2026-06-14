import { useMemo, useState } from "react";
import { categories } from "../data/common";
import { countries } from "../data/countries";
import { durations, seasons, transports, tripTypes } from "../data/options";
import { formatItemCount, t } from "../i18n";
import type { CategoryId, ChecklistItem, CustomItem, Locale, TripConfig } from "../types";

interface ChecklistProps {
  locale: Locale;
  config: TripConfig;
  items: ChecklistItem[];
  completed: Set<string>;
  hideCompleted: boolean;
  collapsed: Set<CategoryId>;
  updatedAt: string;
  onToggle: (id: string) => void;
  onHideCompleted: (value: boolean) => void;
  onCollapse: (category: CategoryId) => void;
  onCollapseAll: (collapsed: boolean) => void;
  onAddCustom: (item: CustomItem) => void;
  onRemoveCustom: (id: string) => void;
  onReset: () => void;
  onEdit: () => void;
  notify: (message: string) => void;
}

function optionTitle(options: { id: string; title: Record<Locale, string> }[], id: string, locale: Locale) {
  return options.find((option) => option.id === id)?.title[locale] ?? id;
}

export function Checklist({
  locale,
  config,
  items,
  completed,
  hideCompleted,
  collapsed,
  updatedAt,
  onToggle,
  onHideCompleted,
  onCollapse,
  onCollapseAll,
  onAddCustom,
  onRemoveCustom,
  onReset,
  onEdit,
  notify,
}: ChecklistProps) {
  const [showAdd, setShowAdd] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [customCategory, setCustomCategory] = useState<CategoryId>("luggage");
  const completedCount = items.filter((entry) => completed.has(entry.id)).length;
  const percent = items.length ? Math.round((completedCount / items.length) * 100) : 0;
  const country = countries.find((entry) => entry.id === config.country);
  const grouped = useMemo(() => categories.map((category) => ({
    ...category,
    items: items.filter((entry) => entry.category === category.id),
  })).filter((category) => category.items.length > 0), [items]);

  const tripTitle = `${t(locale, "checklistTitle")} · ${optionTitle(countries, config.country, locale)}`;
  const tripMeta = [
    optionTitle(durations, config.duration, locale),
    optionTitle(tripTypes, config.tripType, locale),
    optionTitle(seasons, config.season, locale),
    optionTitle(transports, config.transport, locale),
  ].join(" · ");

  const buildText = () => {
    const lines = [tripTitle, tripMeta, ""];
    grouped.forEach((group) => {
      lines.push(group.title[locale]);
      group.items.forEach((entry) => {
        lines.push(`[${completed.has(entry.id) ? "x" : " "}] ${entry.title[locale]}`);
      });
      lines.push("");
    });
    return lines.join("\n");
  };

  const copyChecklist = async () => {
    await navigator.clipboard.writeText(buildText());
    notify(t(locale, "copied"));
  };

  const share = async () => {
    const params = new URLSearchParams({
      lang: locale,
      country: config.country,
      duration: config.duration,
      type: config.tripType,
      season: config.season,
      transport: config.transport,
      carryOn: config.carryOn ? "1" : "0",
      luggage: config.luggage ? "1" : "0",
      child: config.child ? "1" : "0",
      pet: config.pet ? "1" : "0",
      workTech: config.workTech ? "1" : "0",
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}#checklist`;
    await navigator.clipboard.writeText(url);
    notify(t(locale, "shared"));
  };

  const addCustom = () => {
    const title = customTitle.trim();
    if (!title) return;
    const id = `custom-${Date.now()}`;
    onAddCustom({
      id,
      custom: true,
      category: customCategory,
      title: { ru: title, en: title },
      ...(customDescription.trim()
        ? { description: { ru: customDescription.trim(), en: customDescription.trim() } }
        : {}),
    });
    setCustomTitle("");
    setCustomDescription("");
    setShowAdd(false);
  };

  return (
    <section className="checklist-section" id="checklist">
      <div className="section checklist-shell">
        <div className="checklist-heading">
          <div>
            <p className="eyebrow">{t(locale, "checklistEyebrow")}</p>
            <h2>{tripTitle}</h2>
            <p>{tripMeta}</p>
          </div>
          <button className="button button-ghost edit-button" type="button" onClick={onEdit}>{t(locale, "edit")}</button>
        </div>

        <div className="progress-card">
          <div className="progress-number">
            <strong>{percent}%</strong>
            <span>{formatItemCount(locale, items.length)} · {completedCount} {t(locale, "completed")}</span>
          </div>
          <div className="progress-track" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
            <i style={{ width: `${percent}%` }} />
          </div>
          <small>{t(locale, "lastSaved")}: {new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date(updatedAt))}</small>
        </div>

        <div className="action-bar" aria-label="Checklist actions">
          <button type="button" onClick={() => setShowAdd(true)}><span>＋</span>{t(locale, "addItem")}</button>
          <button type="button" aria-pressed={hideCompleted} onClick={() => onHideCompleted(!hideCompleted)}><span>◉</span>{t(locale, hideCompleted ? "showCompleted" : "hideCompleted")}</button>
          <button type="button" onClick={() => onCollapseAll(false)}><span>↕</span>{t(locale, "expandAll")}</button>
          <button type="button" onClick={() => onCollapseAll(true)}><span>↔</span>{t(locale, "collapseAll")}</button>
          <button type="button" onClick={() => void copyChecklist()}><span>□</span>{t(locale, "copy")}</button>
          <button type="button" onClick={() => window.print()}><span>⌁</span>{t(locale, "print")}</button>
          <button type="button" onClick={() => void share()}><span>↗</span>{t(locale, "share")}</button>
          <button className="danger-action" type="button" onClick={onReset}><span>↺</span>{t(locale, "reset")}</button>
        </div>

        {showAdd && (
          <div className="add-panel">
            <div className="field">
              <label htmlFor="custom-title">{t(locale, "itemName")}</label>
              <input id="custom-title" value={customTitle} onChange={(event) => setCustomTitle(event.target.value)} autoFocus />
            </div>
            <div className="field">
              <label htmlFor="custom-description">{t(locale, "itemDescription")}</label>
              <input id="custom-description" value={customDescription} onChange={(event) => setCustomDescription(event.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="custom-category">{t(locale, "category")}</label>
              <select id="custom-category" value={customCategory} onChange={(event) => setCustomCategory(event.target.value as CategoryId)}>
                {categories.map((category) => <option key={category.id} value={category.id}>{category.title[locale]}</option>)}
              </select>
            </div>
            <div className="add-actions">
              <button className="button button-ghost" type="button" onClick={() => setShowAdd(false)}>{t(locale, "cancel")}</button>
              <button className="button" type="button" disabled={!customTitle.trim()} onClick={addCustom}>{t(locale, "add")}</button>
            </div>
          </div>
        )}

        <div className="notice warning-notice">
          <span aria-hidden="true">!</span>
          <div>
            <h3>{t(locale, "warningTitle")}</h3>
            <p>{t(locale, "warning")}</p>
            {country?.sourceUrl && (
              <p className="source-line">
                <a href={country.sourceUrl} target="_blank" rel="noreferrer">{t(locale, "source")} ↗</a>
                {country.lastReviewed && <> · {t(locale, "reviewed")} {new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(new Date(country.lastReviewed))}</>}
              </p>
            )}
          </div>
        </div>

        <div className="checklist-groups">
          {grouped.length === 0 && <p>{t(locale, "noItems")}</p>}
          {grouped.map((group) => {
            const visible = hideCompleted ? group.items.filter((entry) => !completed.has(entry.id)) : group.items;
            const groupDone = group.items.filter((entry) => completed.has(entry.id)).length;
            const isCollapsed = collapsed.has(group.id);
            return (
              <article className="checklist-group" key={group.id}>
                <button className="group-heading" type="button" aria-expanded={!isCollapsed} onClick={() => onCollapse(group.id)}>
                  <span>
                    <strong>{group.title[locale]}</strong>
                    <small>{groupDone} / {group.items.length}</small>
                  </span>
                  <i aria-hidden="true">{isCollapsed ? "+" : "−"}</i>
                </button>
                {!isCollapsed && (
                  <div className="group-items">
                    {visible.length === 0 && <p className="empty-message">{t(locale, "emptyCategory")}</p>}
                    {visible.map((entry) => {
                      const isDone = completed.has(entry.id);
                      const custom = (entry as Partial<CustomItem>).custom === true;
                      return (
                        <div className={`checklist-item ${isDone ? "is-done" : ""}`} key={entry.id}>
                          <label>
                            <input type="checkbox" checked={isDone} onChange={() => onToggle(entry.id)} />
                            <span className="custom-checkbox" aria-hidden="true">✓</span>
                            <span className="item-copy">
                              <strong>{entry.title[locale]}</strong>
                              {entry.description && <small>{entry.description[locale]}</small>}
                            </span>
                          </label>
                          {custom && <button className="remove-item" type="button" onClick={() => onRemoveCustom(entry.id)} aria-label={`${t(locale, "remove")}: ${entry.title[locale]}`}>×</button>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="notice medicine-notice">
          <span aria-hidden="true">+</span>
          <div>
            <h3>{t(locale, "medicineTitle")}</h3>
            <p>{t(locale, "medicine")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
