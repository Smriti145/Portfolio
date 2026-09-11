import s from "./Editorial.module.css";
export default function About() {
  return (
    <section id="about" className={`${s.about} wrap`}>
      <div className={s.transition} aria-hidden="true">
        <span />
        <i>01</i>
      </div>
      <div className="sectionLabel">01 / ABOUT</div>
      <div className={s.aboutGrid}>
        <div data-reveal>
          <h2 className="sectionHeading">
            I build systems,
            <br />
            <em>not just screens.</em>
          </h2>
          <div className={s.aboutCopy}>
            <p>
              I’m Smriti, a B.Tech Computer Engineering student at Lokmanya
              Tilak College of Engineering, graduating in 2027.
            </p>
            <p>
              My work focuses on full-stack development, backend systems, mobile
              applications, and practical software products. I enjoy
              understanding how all the pieces fit together.
            </p>
          </div>
          <a
            className={s.textLink}
            href="https://github.com/Smriti145"
            target="_blank"
            rel="noreferrer"
          >
            A look inside my GitHub <span>↗</span>
          </a>
        </div>
        <div className={s.identity} data-reveal>
          <div className={s.windowBar}>
            <span>◦ ◦ ◦</span>
            <span>the way I build</span>
            <span>↗</span>
          </div>
          <div className={s.identityBody}>
            <p className="eyebrow muted">FROM A QUESTION TO SOMETHING USEFUL</p>
            {[
              ["01", "Understand the problem", "What needs to work?"],
              ["02", "Design the system", "How do the pieces connect?"],
              ["03", "Build & iterate", "Make the idea tangible."],
              ["04", "Deploy & learn", "Bring it into the real world."],
            ].map(([n, title, desc]) => (
              <div className={s.process} key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <i>↗</i>
              </div>
            ))}
            <div className={s.terminal}>
              <span className="accent">const</span> approach ={" "}
              <span>“keep learning”</span>;
            </div>
          </div>
        </div>
      </div>
      <div className={s.snapshot}>
        {[
          ["EDUCATION", "Computer Engineering", "2023 — 2027"],
          ["BASED IN", "Kalyan / Mumbai", "India"],
          ["FOCUS", "Full-stack & backend", "Mobile · AI / ML"],
          ["MILESTONE", "SIH 2025 Finalist", "Anvesha"],
        ].map(([label, value, sub]) => (
          <div key={label}>
            <p className="eyebrow muted">{label}</p>
            <h3>{value}</h3>
            <span>{sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
