"use client";
import { useEffect, useState } from "react";
import s from "./Navigation.module.css";
const links = [
  ["about", "About"],
  ["work", "Work"],
  ["stack", "Stack"],
  ["journey", "Journey"],
  ["contact", "Contact"],
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", scroll);
      io.disconnect();
    };
  }, []);
  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
      <a className={s.logo} href="#" aria-label="Smriti Pandey home">
        SP<span>.</span>
      </a>
      <nav
        className={`${s.links} ${open ? s.open : ""}`}
        id="navigation"
        aria-label="Main navigation"
      >
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <span className={`${s.status} eyebrow`}>
        <i className="statusDot" />
        Currently building
      </span>
      <button
        className={s.menu}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
    </header>
  );
}
