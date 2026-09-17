"use client";

import { useState } from "react";
import s from "./MobileProjectVisual.module.css";

const comparisonStages = [
  {
    label: "Basket",
    title: "Start with the whole basket.",
    rows: [
      "Products & quantities",
      "Equivalent pack sizes",
      "Selected offer location",
    ],
    detail:
      "Compare the same products and quantities across retailer datasets.",
  },
  {
    label: "Eligibility",
    title: "Check before comparing.",
    rows: [
      "Every item available",
      "Offers within freshness limit",
      "Matching location & pack size",
    ],
    detail:
      "Incomplete or stale offers do not qualify for a complete-basket comparison.",
  },
  {
    label: "Ranking",
    title: "Make the result explainable.",
    rows: [
      "Lowest eligible basket total",
      "Faster delivery breaks ties",
      "Stable platform order",
    ],
    detail:
      "Totals use integer paise. Checkout fees and discounts are excluded.",
  },
];
const routineItems = ["Plan the day", "Log hydration", "Evening check-in"];

export default function MobileProjectVisual({
  id,
  counter,
}: {
  id: "grocerycompare" | "personal-helper";
  counter: string;
}) {
  const [stage, setStage] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const grocery = id === "grocerycompare";
  const current = comparisonStages[stage];

  return (
    <div className={`${s.visual} ${grocery ? s.grocery : s.helper}`}>
      <div className={s.top}>
        <span>
          {grocery
            ? "GROCERYCOMPARE / COMPARISON ENGINE"
            : "SAHA / ROUTINE COMPANION"}
        </span>
        <span>{counter}</span>
      </div>
      <div className={s.body}>
        <p className={s.kicker}>
          {grocery ? "A BASKET-LEVEL VIEW" : "SMALL STEPS, EVERY DAY"}
        </p>
        <h4>
          {grocery ? (
            <>
              Compare with
              <br />
              confidence.
            </>
          ) : (
            <>
              Make room
              <br />
              for your day.
            </>
          )}
        </h4>
        {grocery ? (
          <>
            <div className={s.tabs} aria-label="Explore comparison stages">
              {comparisonStages.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  aria-pressed={stage === i}
                  onClick={() => setStage(i)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className={s.panel} aria-live="polite">
              <h5>{current.title}</h5>
              <ul>
                {current.rows.map((row, i) => (
                  <li key={row}>
                    <span>0{i + 1}</span>
                    {row}
                    <i aria-hidden="true">↗</i>
                  </li>
                ))}
              </ul>
              <p>{current.detail}</p>
            </div>
            <div className={s.retailers}>
              BLINKIT <span>·</span> ZEPTO <span>·</span> SWIGGY
            </div>
          </>
        ) : (
          <div className={s.panel}>
            <div className={s.dayHeading}>
              <h5>Your daily rhythm</h5>
              <span aria-live="polite">
                {completed.length} / {routineItems.length}
              </span>
            </div>
            <div className={s.checklist}>
              {routineItems.map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={completed.includes(item)}
                  onClick={() =>
                    setCompleted((previous) =>
                      previous.includes(item)
                        ? previous.filter((value) => value !== item)
                        : [...previous, item],
                    )
                  }
                >
                  <span aria-hidden="true">
                    {completed.includes(item) ? "✓" : "+"}
                  </span>
                  {item}
                </button>
              ))}
            </div>
            <p>Routines that connect preferences, reminders, and completion.</p>
            <button
              className={s.reset}
              type="button"
              onClick={() => setCompleted([])}
            >
              Reset illustration ↺
            </button>
          </div>
        )}
      </div>
      <p className={s.foot}>
        {grocery
          ? "INTERACTIVE ILLUSTRATION · SAMPLE OFFERS, NOT LIVE PRICES"
          : "INTERACTIVE ILLUSTRATION · CHECKLIST CHANGES ARE NOT SAVED"}
      </p>
    </div>
  );
}
