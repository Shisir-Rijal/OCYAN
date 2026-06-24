"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "motion/react";

const KPIS = [
  { label: "Open Rate", value: 64 },
  { label: "Click Rate", value: 22 },
  { label: "Response Rate", value: 12 },
];

const DURATION = 1.5;
const STAGGER = 0.18;

function AnimatedNumber({ target, inView, delay }: { target: number; inView: boolean; delay: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration: DURATION,
      ease: "easeOut",
      delay,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target, delay]);

  return <>{display}</>;
}

export function KpiBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-white/70 p-6 shadow-sm backdrop-blur-xl">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-muted/60">KPI Analysis</p>
      <div className="flex flex-col gap-5">
        {KPIS.map((kpi, i) => (
          <div key={kpi.label} className="flex flex-col gap-2">
            <div className="flex items-end justify-between">
              <span className="text-sm text-muted">{kpi.label}</span>

              {/* Number + trend arrow */}
              <div className="flex items-center gap-1">
                {/* Up-trend arrow — fades in with the bar */}
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                  transition={{ duration: 0.4, delay: i * STAGGER + DURATION * 0.6 }}
                  className="text-accent"
                >
                  <svg
                    viewBox="0 0 14 14"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="2,10 7,4 12,10" />
                  </svg>
                </motion.span>

                <span className="font-display text-3xl font-bold tracking-tight text-ink">
                  <AnimatedNumber target={kpi.value} inView={inView} delay={i * STAGGER} />%
                </span>
              </div>
            </div>

            {/* Bar track */}
            <div className="h-1.5 overflow-hidden rounded-full bg-[#e8e6e8]">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                animate={inView ? { width: `${kpi.value}%` } : { width: 0 }}
                transition={{
                  duration: DURATION,
                  ease: "easeOut",
                  delay: i * STAGGER,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
