"use client";

import { motion, useReducedMotion } from "framer-motion";

const TOOLS = [
  { name: "Drive", icon: "/logos/google-drive.png" },
  { name: "WhatsApp", icon: "/logos/whatsapp.png" },
  { name: "Monday", icon: "/logos/monday.png" },
  { name: "Notion", icon: "/logos/notion.png" },
  { name: "HubSpot", icon: "/logos/hubspot.png" },
  { name: "Gmail", icon: "/logos/gmail.png" },
  { name: "Pennylane", icon: "/logos/pennylane.png" },
  { name: "Slack", icon: "/logos/slack.png" },
  { name: "Zapier", icon: "/logos/zapier.png" },
  { name: "Trello", icon: "/logos/trello.png" },
  { name: "Fireflies", icon: "/logos/fireflies.png" },
  { name: "Excel", icon: "/logos/excel.png" },
  { name: "Airtable", icon: "/logos/airtable.png" },
  { name: "n8n", icon: "/logos/n8n.png" },
];

const ORBIT_RADIUS = 200;
const ORBIT_DURATION = 35;

export function OrbitingTools() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto flex items-center justify-center" style={{ height: 500, width: 500 }}>

      {/* Orbit ring */}
      <div
        className="absolute rounded-full border border-[var(--line)]"
        style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
      />

      {/* Center — DigitalTimes */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex select-none items-baseline gap-0">
          <span className="display-font text-[28px] font-[600] leading-none tracking-[-0.03em] text-graphite">
            Digital
          </span>
          <span className="display-font text-[28px] font-[800] leading-none tracking-[-0.03em] text-petrol" style={{ fontStyle: "italic" }}>
            Times
          </span>
        </div>
        <p className="mt-2 text-[11px] tracking-[0.15em] text-graphite/40">TOUT AU MÊME ENDROIT</p>
      </div>

      {/* Orbiting tools */}
      <motion.div
        className="absolute"
        style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
      >
        {TOOLS.map((tool, i) => {
          const angle = (i / TOOLS.length) * 2 * Math.PI;
          const x = Math.cos(angle) * ORBIT_RADIUS + ORBIT_RADIUS;
          const y = Math.sin(angle) * ORBIT_RADIUS + ORBIT_RADIUS;

          return (
            <motion.div
              key={tool.name}
              className="absolute flex flex-col items-center gap-1"
              style={{
                left: x - 24,
                top: y - 28,
                width: 48,
              }}
              animate={reduced ? undefined : { rotate: -360 }}
              transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
            >
              <div className="flex h-12 w-12 items-center justify-center bg-white border border-[var(--line)] p-1.5">
                <img src={tool.icon} alt={tool.name} className="h-full w-full object-contain" />
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-graphite/40">
                {tool.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
