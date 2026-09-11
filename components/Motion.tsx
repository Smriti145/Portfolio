"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 25,
            opacity: 0.15,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          });
        });
      });
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  return null;
}
