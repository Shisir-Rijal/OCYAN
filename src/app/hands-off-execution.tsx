"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { MailIcon, CheckIcon, SequenceIcon } from "./icons";
import type { ComponentType, SVGProps, ReactNode } from "react";

type StepStatus = "pending" | "active" | "done";

const STEPS: Array<{
  id: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}> = [
  {
    id: 1,
    Icon: MailIcon,
    title: "Initial outreach",
    desc: "Agent researches the prospect and sends a bespoke first email.",
  },
  {
    id: 2,
    Icon: CheckIcon,
    title: "Reply parsing",
    desc: "Intent classified automatically — interest, objection, or ignore.",
  },
  {
    id: 3,
    Icon: SequenceIcon,
    title: "Follow-up sequence",
    desc: "Contextual follow-ups on optimal cadence until a meeting is booked.",
  },
];

const LOG: Array<{
  time: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  text: ReactNode;
}> = [
  {
    time: "09:01",
    badge: "ENRICH",
    badgeBg: "#1a1a3a",
    badgeColor: "#a78bfa",
    text: (
      <>
        Found <span style={{ color: "#e2e8f0" }}>Sarah Chen</span> · VP Sales
      </>
    ),
  },
  {
    time: "09:02",
    badge: "SEND",
    badgeBg: "#1a2a4a",
    badgeColor: "#5b9cf6",
    text: <>Email drafted + delivered</>,
  },
  {
    time: "09:04",
    badge: "TRACK",
    badgeBg: "#1a2a4a",
    badgeColor: "#5b9cf6",
    text: (
      <>
        <span style={{ color: "#e2e8f0" }}>Opened</span> · 3× · link clicked
      </>
    ),
  },
  {
    time: "09:18",
    badge: "REPLY",
    badgeBg: "#0d2a1a",
    badgeColor: "#34d399",
    text: (
      <>
        <span style={{ color: "#e2e8f0" }}>&ldquo;Let&rsquo;s talk&rdquo;</span>{" "}
        · intent: positive
      </>
    ),
  },
  {
    time: "09:19",
    badge: "SEQ",
    badgeBg: "#2a1a10",
    badgeColor: "#fb923c",
    text: <>Follow-up cadence initiated</>,
  },
];

const INITIAL_STATUS: Record<number, StepStatus> = { 1: "pending", 2: "pending", 3: "pending" };
const INITIAL_PROGRESS: Record<number, number> = { 1: 0, 2: 0, 3: 0 };

export function HandsOffExecution() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [visibleLines, setVisibleLines] = useState<Set<number>>(new Set());
  const [stepStatus, setStepStatus] = useState<Record<number, StepStatus>>(INITIAL_STATUS);
  const [stepProgress, setStepProgress] = useState<Record<number, number>>(INITIAL_PROGRESS);
  const [resetting, setResetting] = useState(false);
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = (ms: number, fn: () => void) => { timers.push(setTimeout(fn, ms)); };

    const showLine = (i: number, at: number) =>
      t(at, () => setVisibleLines((p) => new Set([...p, i])));
    const activate = (step: number, at: number) => {
      t(at, () => setStepStatus((p) => ({ ...p, [step]: "active" })));
      t(at + 80, () => setStepProgress((p) => ({ ...p, [step]: 100 })));
    };
    const done = (step: number, at: number) =>
      t(at, () => setStepStatus((p) => ({ ...p, [step]: "done" })));

    showLine(0, 400);
    activate(1, 600);
    showLine(1, 1300);
    showLine(2, 2100);
    done(1, 2900);
    activate(2, 3100);
    showLine(3, 3800);
    done(2, 4600);
    activate(3, 4800);
    showLine(4, 5500);
    done(3, 6600);

    // Reset → loop
    t(8200, () => {
      setResetting(true);
      setVisibleLines(new Set());
      setStepStatus(INITIAL_STATUS);
    });
    t(8280, () => setStepProgress(INITIAL_PROGRESS));
    t(8450, () => {
      setResetting(false);
      setLoopKey((k) => k + 1);
    });

    return () => timers.forEach(clearTimeout);
  }, [inView, loopKey]);

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-24">
      <div>
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <h2 className="font-display text-[32px] font-semibold tracking-tight text-ink">
            Hands-off{" "}
            <span className="text-accent">Execution</span>
          </h2>
          <p className="max-w-[560px] text-base leading-relaxed text-muted">
            Define your campaign parameters once. The agent handles everything —
            gathering information, sending mails, parsing replies, and executing
            dynamic follow-up sequences autonomously.
          </p>
        </div>

        {/* Card */}
        <div
          ref={ref}
          className="overflow-hidden rounded-2xl"
          style={{ background: "#181820", border: "0.5px solid #2a2a3a" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ── Log column ── */}
            <div
              className="p-8"
              style={{ borderRight: "0.5px solid #2a2a3a" }}
            >
              {/* Terminal chrome */}
              <div className="mb-5 flex items-center gap-2">
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "#ff5f57" }} />
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "#febc2e" }} />
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "#28c840" }} />
                <span
                  className="ml-2 font-mono text-[10px]"
                  style={{ color: "#4b5263" }}
                >
                  ocyan-agent · campaign_active
                </span>
              </div>

              {/* Log lines */}
              <div className="flex flex-col gap-3">
                {LOG.map((line, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 font-mono text-[11px] leading-relaxed transition-opacity duration-500"
                    style={{ opacity: visibleLines.has(i) ? 1 : 0 }}
                  >
                    <span className="min-w-[42px]" style={{ color: "#4b5263" }}>
                      {line.time}
                    </span>
                    <span
                      className="rounded px-1.5 py-0.5 text-[9px] font-semibold tracking-wide"
                      style={{
                        background: line.badgeBg,
                        color: line.badgeColor,
                        minWidth: 52,
                        textAlign: "center",
                      }}
                    >
                      {line.badge}
                    </span>
                    <span style={{ color: "#8892a4" }}>{line.text}</span>
                    {/* Blinking cursor on last visible line */}
                    {i === 4 && visibleLines.has(4) && (
                      <span
                        className="inline-block h-[13px] w-[6px] align-[-2px]"
                        style={{
                          background: "#4648d4",
                          animation: "cursorBlink 1s step-end infinite",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Steps column ── */}
            <div className="flex flex-col gap-3 p-8">
              {STEPS.map((step) => {
                const status = stepStatus[step.id];
                const progress = stepProgress[step.id];
                return (
                  <div
                    key={step.id}
                    className="rounded-xl p-4 transition-colors duration-500"
                    style={{
                      background: status === "active" ? "#1a1a2e" : "#0f0f18",
                      border:
                        status === "done"
                          ? "0.5px solid #4648d4"
                          : status === "active"
                          ? "0.5px solid #7c7fec"
                          : "0.5px solid #2a2a3a",
                    }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className="font-mono text-[10px] font-semibold"
                        style={{
                          color: status === "pending" ? "#4b5263" : "#7c7fec",
                        }}
                      >
                        0{step.id}
                      </span>
                      {/* Status indicator */}
                      <span
                        className="h-[6px] w-[6px] rounded-full transition-colors duration-500"
                        style={{
                          background:
                            status === "done"
                              ? "#34d399"
                              : status === "active"
                              ? "#7c7fec"
                              : "#2a2a3a",
                          animation:
                            status === "active" ? "statusPulse 1.5s ease-in-out infinite" : "none",
                        }}
                      />
                    </div>

                    <div className="mb-1.5 flex items-center gap-2.5">
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: "#1e1e3a" }}
                      >
                        <step.Icon
                          className="h-3.5 w-3.5"
                          style={{ color: "#7c7fec" }}
                        />
                      </div>
                      <span
                        className="text-[13px] font-medium"
                        style={{ color: "#c8ccd4" }}
                      >
                        {step.title}
                      </span>
                    </div>

                    <p
                      className="mb-3 text-[11px] leading-relaxed"
                      style={{ color: "#4b5263" }}
                    >
                      {step.desc}
                    </p>

                    {/* Progress bar */}
                    <div
                      className="h-[3px] overflow-hidden rounded-full"
                      style={{ background: "#2a2a3a" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${progress}%`,
                          background: "#4648d4",
                          transition: resetting
                            ? "none"
                            : "width 1.3s cubic-bezier(0.4,0,0.2,1)",
                        }}
                      />
                    </div>

                    {/* Status text */}
                    <div className="mt-1.5">
                      <span
                        className="font-mono text-[10px] transition-colors duration-500"
                        style={{
                          color:
                            status === "done"
                              ? "#34d399"
                              : status === "active"
                              ? "#7c7fec"
                              : "#2a2a3a",
                        }}
                      >
                        {status === "done"
                          ? "✓ complete"
                          : status === "active"
                          ? "running…"
                          : "waiting"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes injected inline — no extra CSS file needed */}
      <style>{`
        @keyframes cursorBlink { 50% { opacity: 0; } }
        @keyframes statusPulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
      `}</style>
    </section>
  );
}
