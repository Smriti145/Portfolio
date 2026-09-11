import { journey } from "@/data/profile";
import s from "./Editorial.module.css";
export default function Journey() {
  return (
    <section id="journey" className={s.journey}>
      <div className="wrap">
        <div className="sectionLabel">04 / JOURNEY</div>
        <div className={s.journeyGrid}>
          <div className={s.journeyIntro} data-reveal>
            <h2 className="sectionHeading">
              Always a student.
              <br />
              <em>Always building.</em>
            </h2>
            <p>
              A growing foundation in engineering, shaped by coursework,
              projects, and learning by doing.
            </p>
          </div>
          <div className={s.timeline}>
            {journey.map((j) => (
              <article className={s.milestone} key={j.year} data-reveal>
                <span>{j.year}</span>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.subtitle}</p>
                  <small>{j.detail}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={s.certifications}>
          <p className="eyebrow muted">CONTINUED LEARNING / CERTIFICATIONS</p>
          <div className={s.certGrid}>
            {[
              ["JPMorgan Chase & Co.", "Software Engineering Job Simulation"],
              ["Deloitte Australia", "Cyber Job Simulation"],
            ].map(([name, title]) => (
              <article className={s.certificate} key={name}>
                <span className={s.seal} aria-hidden="true">
                  ✳
                </span>
                <div>
                  <h3>{name}</h3>
                  <p>{title}</p>
                  <small>FORAGE · 2026 · VIRTUAL JOB SIMULATION</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
