"use client";

import { motion } from "motion/react";
import { LinkedInIcon, FileIcon, GlobeIcon, SparkleIcon } from "./icons";
import type { ComponentType, SVGProps } from "react";

const ORBIT_DURATION = 22; // seconds per full revolution

function NodePill({
  label,
  Icon,
  iconBg,
  iconColor,
}: {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap rounded-full border border-[#c7c4d7] bg-[#f8f9ff] px-4 py-2 shadow-md">
      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
        <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
      </div>
      <span className="font-mono text-[11px] uppercase tracking-wider text-[#0b1c30]">{label}</span>
    </div>
  );
}

// Nodes are positioned on the orbit ring.
// The outer wrapper rotates → moves the node around the ring.
// The inner motion.div counter-rotates at the same speed → keeps the pill upright.
const NODES = [
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    iconBg: "bg-emerald-100",
    iconColor: "text-[#0a66c2]",
    // SVG endpoint and matching CSS position (center of node on that point)
    line: { x2: 338, y2: 76 },
    style: { top: 76, left: 338 },
  },
  {
    label: "Official Registry Data",
    Icon: FileIcon,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    line: { x2: 58, y2: 318 },
    style: { top: 318, left: 58 },
  },
  {
    label: "Company Websites",
    Icon: GlobeIcon,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    line: { x2: 386, y2: 248 },
    style: { top: 248, left: 386 },
  },
] as const;

export function OrbitalGraphic() {
  return (
    <div className="relative mx-auto h-[400px] w-[400px]">
      {/* Static outer ring */}
      <div className="absolute inset-0 rounded-full border border-[#c7c4d7]/40" />

      {/* Dashed inner ring — rotates slower for depth */}
      <motion.div
        className="absolute inset-16 rounded-full border border-dashed border-accent/25"
        animate={{ rotate: 360 }}
        transition={{ duration: ORBIT_DURATION * 1.8, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Orbit layer ───────────────────────────────────────────────────────── */}
      {/* This div rotates → it carries all nodes + hairlines around the center */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
      >
        {/* Hairlines from center to each node position */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          fill="none"
        >
          {NODES.map((n, i) => (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={n.line.x2}
              y2={n.line.y2}
              stroke={`url(#grad${i})`}
              strokeWidth="1"
            />
          ))}
          <defs>
            {NODES.map((n, i) => (
              <linearGradient
                key={i}
                id={`grad${i}`}
                x1="200"
                y1="200"
                x2={n.line.x2}
                y2={n.line.y2}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#c7c4d7" />
                <stop offset="1" stopColor="#c7c4d7" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
        </svg>

        {/* Nodes — each counter-rotates to stay upright */}
        {NODES.map((n) => (
          <div
            key={n.label}
            className="absolute"
            style={{
              top: n.style.top,
              left: n.style.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
            >
              <NodePill
                label={n.label}
                Icon={n.Icon}
                iconBg={n.iconBg}
                iconColor={n.iconColor}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
      {/* ── End orbit layer ───────────────────────────────────────────────────── */}

      {/* Central AI core — static, always on top */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c7c4d7] bg-[#f8f9ff] shadow-xl">
        <div
          className="absolute inset-2 rounded-full"
          style={{ background: "linear-gradient(135deg,#e1e0ff 0%,#d3e4fe 100%)" }}
        />
        <SparkleIcon className="relative z-10 h-10 w-10 text-accent" />
      </div>
    </div>
  );
}
