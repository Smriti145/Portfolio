"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import s from "./VideoHero.module.css";
const Scene = dynamic(() => import("./Scene"), { ssr: false });
export default function VideoHero() {
  const video = useRef<HTMLVideoElement>(null);
  const back = useRef<HTMLVideoElement>(null);
  const region = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const userPaused = useRef(false);
  useEffect(() => {
    const v = video.current,
      b = back.current;
    if (!v) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    userPaused.current = motion.matches;
    let inView = false;
    const play = () => {
      if (inView && !userPaused.current && !document.hidden) {
        void v.play().catch(() => setPlaying(false));
        if (innerWidth >= 768) void b?.play().catch(() => {});
      }
    };
    const pause = () => {
      v.pause();
      b?.pause();
    };
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        inView ? play() : pause();
      },
      { threshold: 0.1 },
    );
    if (region.current) io.observe(region.current);
    const vis = () => (document.hidden ? pause() : play());
    document.addEventListener("visibilitychange", vis);
    const change = () => {
      userPaused.current = motion.matches;
      motion.matches ? pause() : play();
    };
    motion.addEventListener("change", change);
    return () => {
      io.disconnect();
      pause();
      document.removeEventListener("visibilitychange", vis);
      motion.removeEventListener("change", change);
    };
  }, []);
  const togglePlay = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      void v.play().catch(() => setFailed(true));
      if (innerWidth >= 768) void back.current?.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
      back.current?.pause();
    }
  };
  return (
    <section
      ref={region}
      className={`${s.hero} ${ready ? s.ready : ""}`}
      aria-label="Introduction"
    >
      <video
        ref={back}
        className={s.background}
        src="/hero/smriti.mp4"
        poster="/hero/poster.jpg"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className={s.atmosphere} />
      <div className={s.visual}>
        <video
          ref={video}
          src="/hero/smriti.mp4"
          poster="/hero/poster.jpg"
          muted={muted}
          loop
          playsInline
          preload="metadata"
          aria-label="Animated portrait of Smriti in her developer workspace"
          onCanPlay={() => setReady(true)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
        />
        <div className={s.visualFade} />
      </div>
      <Scene />
      <div className={s.content}>
        <div className={`eyebrow ${s.intro}`}>
          <span className={s.line} /> A little curiosity. A lot of building.
        </div>
        <h1>
          SMRITI
          <br />
          <span>
            PANDEY<span className={s.period}>.</span>
          </span>
        </h1>
        <div className={s.role}>SOFTWARE DEVELOPER</div>
        <p className={`eyebrow ${s.disciplines}`}>
          Full-stack <span>•</span> Systems <span>•</span> Digital products
        </p>
        <p className={s.statement}>
          I build modern web experiences, scalable applications,
          <br className={s.desktopBreak} /> and thoughtful digital products.
        </p>
        <div className={s.actions}>
          <a href="#work" className="action actionPrimary">
            VIEW MY WORK <span>↗</span>
          </a>
          <a href="#contact" className="action">
            LET’S CONNECT <span>↗</span>
          </a>
        </div>
      </div>
      <div className={s.caption}>
        <span className="statusDot" />
        Inside my midnight studio
        <span className={s.captionSub}>An illustrated introduction</span>
      </div>
      <div className={s.controls}>
        <button
          onClick={() => setMuted(!muted)}
          aria-label={
            muted ? "Unmute introduction video" : "Mute introduction video"
          }
          aria-pressed={!muted}
          disabled={failed}
        >
          <span aria-hidden="true">{muted ? "◌" : "◉"}</span>{" "}
          {muted ? "Tap for sound" : "Sound on"}
        </button>
        <button
          onClick={togglePlay}
          aria-label={
            playing ? "Pause introduction video" : "Play introduction video"
          }
          disabled={failed}
        >
          {playing ? "Ⅱ" : "▷"}
        </button>
      </div>
      <div className={s.bottom}>
        <a href="#about" className="eyebrow">
          ↓ <span>Scroll to explore</span>
        </a>
        <span className="eyebrow">
          Based in Mumbai, India <span className="accent">↗</span>
        </span>
      </div>
      {failed && (
        <p className={s.error}>
          Video unavailable. Explore the portfolio below.
        </p>
      )}
    </section>
  );
}
