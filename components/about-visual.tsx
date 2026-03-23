"use client";

import { motion, useReducedMotion } from "framer-motion";

function TravelingDot({ delay = 0 }: { delay?: number }) {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-saffron"
      style={{
        left: 0,
        boxShadow: "0 0 10px 3px rgba(251,176,64,0.55)",
      }}
      animate={{ left: ["0%", "100%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

function PulsingDot({ color = "bg-emerald-400" }: { color?: string }) {
  const reduced = useReducedMotion();
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {!reduced && (
        <motion.span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${color}`}
          animate={{ scale: [1, 2.2, 1], opacity: [0.75, 0, 0.75] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}

const STEPS = [
  { label: "Idée reçue", sub: "Brief initial" },
  { label: "Build & Stack", sub: "DigitalTimes" },
  { label: "Actif livré", sub: "V1 · 7 jours" },
];

const ACTIVITY = [
  { text: "Workflow n8n branché sur Notion", time: "Il y a 2 j" },
  { text: "Lead magnet déployé · Clickway", time: "Il y a 5 j" },
  { text: "Interface client livrée · Scrollab", time: "Il y a 12 j" },
];

export function AboutVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="space-y-3">
      {/* Metric row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { value: "7 j", label: "Délai V1" },
          { value: "3+", label: "Agences" },
          { value: "∞", label: "Mensuel" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-[1rem] border border-white/10 bg-white/6 px-3 py-3 text-center"
          >
            <p className="display-font text-2xl leading-none tracking-[-0.05em] text-saffron">
              {m.value}
            </p>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Flow diagram */}
      <div className="flex items-center gap-2 rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4">
        {STEPS.map((step, i) => (
          <div key={step.label} className="flex flex-1 items-center gap-2">
            {/* Node */}
            <div className="flex-shrink-0 rounded-[0.85rem] border border-white/14 bg-white/8 px-2.5 py-2 text-center">
              <p className="text-[11px] font-semibold leading-tight text-white">
                {step.label}
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/38">
                {step.sub}
              </p>
            </div>
            {/* Connector */}
            {i < STEPS.length - 1 && (
              <div className="relative h-px flex-1 bg-gradient-to-r from-white/20 to-white/8">
                <TravelingDot delay={i * 0.65} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Activity log */}
      <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <PulsingDot color="bg-emerald-400" />
          <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
            Activité récente
          </p>
        </div>
        {ACTIVITY.map((item, i) => (
          <motion.div
            key={item.text}
            className="flex items-center justify-between gap-4"
            initial={reduced ? undefined : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="h-1 w-1 shrink-0 rounded-full bg-saffron/60" />
              <p className="truncate text-[11px] leading-5 text-white/60">{item.text}</p>
            </div>
            <p className="shrink-0 text-[10px] text-white/30">{item.time}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
