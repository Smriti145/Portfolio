"use client";
import { useState } from "react";
import s from "./CurrentBuild.module.css";
const stages = [
  {
    label: "Create product",
    title: "Manufacturer portal",
    code: "POST /api/products",
    detail: "Record the product and its supply-chain information.",
  },
  {
    label: "Generate QR",
    title: "Product identity",
    code: "product → unique QR",
    detail: "Connect a scannable identifier to the product record.",
  },
  {
    label: "Verify origin",
    title: "Public provenance",
    code: "scan → provenance report",
    detail:
      "Read the product details and its journey through the supply chain.",
  },
];
export default function CurrentBuild() {
  const [stage, setStage] = useState(0);
  return (
    <section className={s.current} aria-labelledby="current-title">
      <div className={`wrap ${s.inner}`}>
        <div>
          <p className="eyebrow">
            <span className="statusDot" />
            CURRENTLY BUILDING
          </p>
          <h2 id="current-title">
            TraceChain<span>↗</span>
          </h2>
          <p className={s.copy}>
            Product provenance, QR verification,
            <br />
            and supply-chain transparency.
          </p>
          <a
            href="https://github.com/Smriti145/TraceChain"
            target="_blank"
            rel="noreferrer"
            className={s.repo}
          >
            FOLLOW THE BUILD ON GITHUB ↗
          </a>
        </div>
        <div className={s.console}>
          <div className={s.bar}>
            <span>tracechain / architecture</span>
            <span>ILLUSTRATION</span>
          </div>
          <div className={s.steps}>
            {stages.map((st, i) => (
              <button
                key={st.label}
                onClick={() => setStage(i)}
                aria-pressed={stage === i}
              >
                0{i + 1}
                <span>{st.label}</span>
              </button>
            ))}
          </div>
          <div className={s.output} aria-live="polite">
            <span className="accent">$</span> {stages[stage].code}
            <h3>{stages[stage].title}</h3>
            <p>{stages[stage].detail}</p>
          </div>
          <div className={s.consoleFooter}>
            PORTAL <i>↔</i> EXPRESS API <i>↔</i> POSTGRESQL
          </div>
        </div>
      </div>
    </section>
  );
}
