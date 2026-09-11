import { socials } from "@/data/profile";
import s from "./Editorial.module.css";
export default function Contact() {
  return (
    <>
      <section id="contact" className={s.contact}>
        <div className="wrap">
          <div className="sectionLabel">05 / LET’S BUILD</div>
          <h2 data-reveal>
            LET’S BUILD
            <br />
            SOMETHING <span>USEFUL.</span>
          </h2>
          <div className={s.contactRow}>
            <p>
              Open to software engineering opportunities, interesting technical
              problems, collaborations, and projects worth building.
            </p>
            <div className={s.contactActions}>
              <a
                className="action actionPrimary"
                href="mailto:pandeysmriti145@gmail.com"
              >
                EMAIL ME <span>↗</span>
              </a>
              {socials
                .slice(0, 2)
                .reverse()
                .map((s) => (
                  <a
                    className="action"
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.name.toUpperCase()} <span>↗</span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
      <footer className={s.footer}>
        <div className={`wrap ${s.footerInner}`}>
          <div className={s.footerName}>
            SMRITI PANDEY<p>Computer Engineering · Mumbai, India</p>
          </div>
          <div className={s.socials}>
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                {s.name} ↗
              </a>
            ))}
          </div>
          <span className={s.copyright}>© 2026 Smriti Pandey</span>
        </div>
      </footer>
    </>
  );
}
