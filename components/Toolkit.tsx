"use client";
import { useState } from "react";
import { skillGroups } from "@/data/profile";
import s from "./Toolkit.module.css";
export default function Toolkit() {
  const [active, setActive] = useState(0);
  return (
    <section id="stack" className={`${s.toolkit} wrap`}>
      <div className="sectionLabel">03 / TOOLKIT</div>
      <div className={s.header}>
        <h2 className="sectionHeading" data-reveal>
          The right tools.
          <br />
          <em>The whole picture.</em>
        </h2>
        <p>
          From interface to infrastructure.
          <br />A toolkit that grows with every project.
        </p>
      </div>
      <div className={s.grid}>
        <div className={s.map} aria-label="Explore technology groups">
          <svg viewBox="0 0 500 410" aria-hidden="true">
            <path
              d="M250 205L85 70M250 205L380 65M250 205L440 190M250 205L380 340M250 205L180 365M250 205L65 290M250 205L75 170"
              fill="none"
              stroke="#f2ebdd20"
            />
            <circle cx="250" cy="205" r="78" fill="none" stroke="#f2ebdd0d" />
            <circle
              cx="250"
              cy="205"
              r="145"
              fill="none"
              stroke="#f2ebdd08"
              strokeDasharray="3 9"
            />
          </svg>
          <div className={s.core}>
            <span>SP.</span>
            <small>ENGINEERING</small>
          </div>
          {skillGroups.map((group, i) => (
            <button
              className={`${s.node} ${s[`node${i}`]}`}
              key={group.name}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              onPointerEnter={() => setActive(i)}
              aria-pressed={active === i}
            >
              <i />
              {group.name}
            </button>
          ))}
          <p className={s.mapHint}>EXPLORE A DISCIPLINE ↗</p>
        </div>
        <div className={s.skillList}>
          {skillGroups.map((group, i) => (
            <div
              className={`${s.skillGroup} ${active === i ? s.active : ""}`}
              key={group.name}
            >
              <button onClick={() => setActive(i)} aria-pressed={active === i}>
                <span>0{i + 1}</span>
                {group.name}
                <i>↗</i>
              </button>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
