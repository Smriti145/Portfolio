"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import s from "./Projects.module.css";
export default function ProjectShowcase() {
  const host = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-project]").forEach((el) => {
            const visual = el.querySelector("[data-visual]");
            const body = el.querySelector("[data-story]");
            if (visual && body)
              ScrollTrigger.create({
                trigger: el,
                start: "top 120px",
                end: () =>
                  `+=${Math.max(0, body.clientHeight - (visual as HTMLElement).clientHeight)}`,
                pin: visual,
                pinSpacing: false,
                invalidateOnRefresh: true,
              });
          });
        }, host);
        return () => ctx.revert();
      },
    );
    return () => mm.revert();
  }, []);
  return (
    <section id="work" ref={host} className={s.work}>
      <div className="wrap">
        <div className={s.workIntro}>
          <div>
            <div className="sectionLabel">02 / SELECTED WORK</div>
            <h2 className="sectionHeading" data-reveal>
              Ideas, made <em>real.</em>
            </h2>
          </div>
          <p>
            Four projects. Different problems.
            <br />
            One drive to understand and build.
          </p>
        </div>
        <div className={s.projectIndex}>
          {projects.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              <span>{p.number}</span>
              {p.name}
              <i>↘</i>
            </a>
          ))}
        </div>
        {projects.map((p) => (
          <article id={p.id} key={p.id} data-project className={s.project}>
            <div className={s.visualColumn} data-visual>
              <ProjectVisual id={p.id} />
            </div>
            <div className={s.story} data-story>
              <div className={s.projectMeta}>
                <span>PROJECT {p.number}</span>
                <span>{p.category}</span>
              </div>
              <h3>{p.name}</h3>
              <p className={s.tagline}>{p.tagline}</p>
              <p className={s.description}>{p.description}</p>
              {p.id === "anvesha" && (
                <p className={s.finalist}>
                  ✳ SMART INDIA HACKATHON 2025 FINALIST
                </p>
              )}
              <div className={s.storyBlock}>
                <span className="eyebrow">THE PROBLEM</span>
                <p>{p.problem}</p>
              </div>
              <div className={s.storyBlock}>
                <span className="eyebrow">THE APPROACH</span>
                <p>{p.solution}</p>
              </div>
              <div className={s.userFlow}>
                {p.flow.map((label, i) => (
                  <span key={label}>
                    <small>0{i + 1}</small>
                    {label}
                    {i < 3 && <i>→</i>}
                  </span>
                ))}
              </div>
              <div className={s.storyBlock}>
                <span className="eyebrow">KEY FEATURES</span>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="tags">
                {p.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className={s.why}>
                <span className="eyebrow">WHY IT MATTERS</span>
                <p>{p.why}</p>
              </div>
              {p.note && (
                <details className={s.sourceNote}>
                  <summary>About the public source</summary>
                  <p>{p.note}</p>
                </details>
              )}
              <div className={s.projectActions}>
                {p.github ? (
                  <a
                    className="action"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW GITHUB <span>↗</span>
                  </a>
                ) : (
                  <a
                    className="action"
                    href="mailto:pandeysmriti145@gmail.com?subject=Smart%20Keypad%20Door%20Lock"
                  >
                    ASK ABOUT THIS PROJECT <span>↗</span>
                  </a>
                )}
                <a
                  href={`#${projects[Number(p.number) % 4].id}`}
                  className={s.nextProject}
                >
                  {p.number === "04" ? "BACK TO FIRST" : "NEXT PROJECT"} ↓
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
