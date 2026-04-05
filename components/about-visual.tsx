"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ── Traveling dot on connector line ───────────────────── */
function TravelingDot({ delay = 0 }: { delay?: number }) {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-saffron"
      style={{ left: 0, boxShadow: "0 0 10px 4px rgba(251,176,64,0.5)" }}
      whileInView={{ left: ["0%", "100%"] }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

/* ── Pulsing live dot ───────────────────────────────────── */
function LiveDot() {
  const reduced = useReducedMotion();
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      {!reduced && (
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          whileInView={{ scale: [1, 2.2, 1], opacity: [0.75, 0, 0.75] }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
    </span>
  );
}

/* ── Data ───────────────────────────────────────────────── */
const METRICS = [
  { display: "7j",      label: "Délai V1"     },
  { display: "1",       label: "Appel cadrage" },
  { display: "∞",       label: "Suivi mensuel" },
];

const STAGES = [
  { label: "Brief",  sub: "Cadrage"       },
  { label: "Build",  sub: "DigitalTimes"  },
  { label: "Livré",  sub: "V1 · 7 jours" },
];

const FEED = [
  { brand: "Clickway", action: "Outil d'analyse lancé",   dot: "bg-emerald-400", time: "il y a 2j"  },
  { brand: "Scrollab", action: "Workflow n8n déployé",   dot: "bg-petrol",      time: "il y a 5j"  },
  { brand: "Visunyx",  action: "Interface client livrée", dot: "bg-saffron",     time: "il y a 12j" },
];

/* ── Main component ─────────────────────────────────────── */
export function AboutVisual() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="dark-surface overflow-hidden rounded-none p-6 sm:p-10"
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <LiveDot />
          <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Tableau de bord
          </p>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
          DigitalTimes
        </span>
      </div>

      {/* ── Metric strip ── */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            className="rounded-sm border border-white/12 bg-white/8 px-3 py-5 text-center"
            initial={reduced ? undefined : { opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeOut" }}
          >
            <p className="display-font text-[2rem] leading-none tracking-[-0.055em] text-saffron">
              {m.display}
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ── Pipeline — small centered boxes with traveling dots ── */}
      <div className="mt-4 flex items-center justify-between rounded-sm border border-white/8 bg-white/4 px-5 py-5">
        {STAGES.map((stage, i) => (
          <div key={stage.label} className="flex items-center">
            <motion.div
              className="shrink-0 rounded-sm border border-white/12 bg-white/8 px-4 py-2.5 text-center"
              initial={reduced ? undefined : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
            >
              <p className="text-[12px] font-semibold leading-tight text-white">{stage.label}</p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80">
                {stage.sub}
              </p>
            </motion.div>

            {i < STAGES.length - 1 && (
              <div className="relative mx-3 h-px w-24 sm:w-40 lg:w-56 bg-gradient-to-r from-white/20 via-saffron/50 to-white/10">
                <TravelingDot delay={i * 0.8} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Activity feed — horizontal row ── */}
      <div className="mt-4">
        <p className="accent-font mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
          Activité récente
        </p>
        <div className="grid grid-cols-3 gap-3">
          {FEED.map((item, i) => (
            <motion.div
              key={item.brand}
              className="rounded-sm border border-white/10 bg-white/6 px-4 py-3"
              initial={reduced ? undefined : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.38, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 shrink-0 rounded-full ${item.dot}`} />
                <p className="text-[12px] font-semibold leading-none text-white/90">{item.brand}</p>
              </div>
              <p className="mt-1.5 text-[10px] text-white/60">{item.action}</p>
              <p className="mt-1 text-[10px] text-white/40">{item.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
