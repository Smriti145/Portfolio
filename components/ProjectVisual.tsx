"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import s from "./Projects.module.css";
const Scene = dynamic(() => import("./Scene"), { ssr: false });
function Qr() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
      <path
        d="M3 3h17v17H3zM40 3h17v17H40zM3 40h17v17H3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M8 8h7v7H8zM45 8h7v7h-7zM8 45h7v7H8zM26 3h6v10h-6zM26 20h8v8h-8zM40 26h6v12h-6zM25 36h9v6h-9zM28 47h6v10h-6zM40 45h6v6h-6zM50 35h7v7h-7zM49 51h8v6h-8z"
        fill="currentColor"
      />
    </svg>
  );
}
export default function ProjectVisual({ id }: { id: string }) {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("LOCKED");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const enter = (key: string) => {
    if (timer.current) clearTimeout(timer.current);
    if (key === "C") {
      setCode("");
      setStatus("LOCKED");
      return;
    }
    if (key === "↵") {
      setStatus(code === "2027" ? "UNLOCKED" : "TRY AGAIN");
      setCode("");
      timer.current = setTimeout(() => setStatus("LOCKED"), 3000);
      return;
    }
    if (status === "UNLOCKED") setStatus("LOCKED");
    setCode((prev) => (prev + key).slice(-4));
  };
  if (id === "tracechain")
    return (
      <div className={`${s.visual} ${s.traceVisual}`}>
        <div className={s.visualTop}>
          <span>TRACECHAIN / SYSTEM EXPLORER</span>
          <span className="accent">01 — 04</span>
        </div>
        <div className={s.packageScene}>
          <Scene mode="package" />
          <div className={s.packageFallback} aria-hidden="true">
            ◇
          </div>
          <div className={s.qr}>
            <Qr />
            <span>PRODUCT IDENTITY</span>
          </div>
          <div className={s.productLabel}>
            <i className="statusDot" />
            PROVENANCE CONNECTED
          </div>
        </div>
        <div className={s.flowSteps} aria-label="Explore product journey">
          {["Origin", "Processing", "Logistics", "Verification"].map(
            (label, i) => (
              <button
                key={label}
                onClick={() => setStep(i)}
                aria-pressed={step === i}
              >
                <i />
                {label}
              </button>
            ),
          )}
        </div>
        <div className={s.flowDescription} aria-live="polite">
          <span>0{step + 1}</span>
          {
            [
              "A manufacturer records the product and its origin.",
              "Processing and packaging details become part of the journey.",
              "Logistics information connects the supply-chain stages.",
              "A QR scan opens the product’s provenance report.",
            ][step]
          }
        </div>
        <span className={s.visualFoot}>
          INTERACTIVE ARCHITECTURE ILLUSTRATION
        </span>
      </div>
    );
  if (id === "farmio")
    return (
      <div className={`${s.visual} ${s.farmVisual}`}>
        <div className={s.visualTop}>
          <span>FARMIO / MARKETPLACE FLOW</span>
          <span>02 — 04</span>
        </div>
        <div className={s.farmBrand}>
          farmio<span>↗</span>
        </div>
        <p className={s.farmSlogan}>
          Good food.
          <br />
          Closer to its roots.
        </p>
        <div className={s.produce} aria-hidden="true">
          <div className={s.tomato}>
            <i />
          </div>
          <div className={s.leaf} />
          <div className={s.carrot} />
        </div>
        <div className={s.marketPath}>
          <span>THE FARMER</span>
          <i>→</i>
          <span>FRESH PRODUCE</span>
          <i>→</i>
          <span>YOUR TABLE</span>
        </div>
        <div className={s.marketControls}>
          {["Farmer", "Customer"].map((label, i) => (
            <button
              key={label}
              aria-pressed={step === i}
              onClick={() => setStep(i)}
            >
              {label} view ↗
            </button>
          ))}
        </div>
        <p className={s.marketInfo} aria-live="polite">
          {step === 0
            ? "A dedicated path for farmer registration and product listings."
            : "Browse produce, review an order, and move through checkout screens."}
        </p>
        <span className={s.visualFoot}>
          MARKETPLACE CONCEPT / PUBLIC INTERFACE DEMO
        </span>
      </div>
    );
  if (id === "anvesha")
    return (
      <div className={`${s.visual} ${s.botanicalVisual}`}>
        <div className={s.visualTop}>
          <span>ANVESHA / FIELD NOTES</span>
          <span>03 — 04</span>
        </div>
        <div className={s.botanical}>
          <svg
            viewBox="0 0 300 300"
            role="img"
            aria-label="Botanical illustration connecting plant collection to provenance"
          >
            <path
              d="M145 265Q170 160 140 55"
              fill="none"
              stroke="#91a98c"
              strokeWidth="2"
            />
            {[0, 1, 2, 3, 4].map((n) => (
              <g
                key={n}
                transform={`translate(${145 + n * 2} ${75 + n * 34}) rotate(${n % 2 ? 35 : -45})`}
              >
                <path
                  d="M0 0Q-66-52-75-2Q-60 42 0 0"
                  fill="#71816a33"
                  stroke="#a1b095"
                  strokeWidth="1"
                />
                <path d="M-70-2L0 0" stroke="#a1b095" strokeWidth=".7" />
              </g>
            ))}
            <circle cx="145" cy="265" r="10" fill="none" stroke="#e9a66c" />
            <circle cx="145" cy="265" r="3" fill="#e9a66c" />
          </svg>
          <div className={s.fieldNote}>
            FIELD COLLECTION
            <br />
            <span>Location → Evidence → Identity</span>
          </div>
          <div className={s.botanicalQr}>
            <Qr />
          </div>
        </div>
        <div className={s.achievement}>
          <span>✳</span>
          <div>
            SMART INDIA HACKATHON<strong>2025 Finalist</strong>
          </div>
        </div>
        <span className={s.visualFoot}>
          BOTANICAL PROVENANCE / CONCEPT ILLUSTRATION
        </span>
      </div>
    );
  return (
    <div className={`${s.visual} ${s.lockVisual}`}>
      <div className={s.visualTop}>
        <span>ACCESS CONTROL / EMBEDDED SYSTEM</span>
        <span>04 — 04</span>
      </div>
      <div className={s.hardwareBackdrop}>
        <Scene mode="circuit" />
      </div>
      <div className={s.keypad}>
        <div className={s.lockDisplay}>
          <span>{code ? "•".repeat(code.length) : status}</span>
          <small>EEPROM / ACCESS CONTROL</small>
        </div>
        <div className={s.keys}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "↵"].map(
            (key) => (
              <button
                key={key}
                aria-label={
                  key === "↵"
                    ? "Submit demo code"
                    : key === "C"
                      ? "Clear demo code"
                      : `Digit ${key}`
                }
                onClick={() => enter(key)}
              >
                {key}
              </button>
            ),
          )}
        </div>
      </div>
      <p className={s.keypadHelp}>
        Try <strong>2027</strong> then ↵ · Relocks after 3 seconds
      </p>
      <p className={s.lockStatus} role="status">
        {status === "UNLOCKED"
          ? "Access granted. Automatic locking in 3 seconds."
          : status === "TRY AGAIN"
            ? "Incorrect code. Try 2027."
            : "Demo lock is secured."}
      </p>
      <span className={s.visualFoot}>
        INTERACTIVE SIMULATION / NOT CONNECTED TO HARDWARE
      </span>
    </div>
  );
}
