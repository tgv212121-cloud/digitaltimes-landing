"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  tag?: string;
  content: React.ReactNode;
  dark?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: number;
};

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="grid gap-0">
      {items.map((item, i) => {
        const isOpen = open === i;
        const bgClass = item.dark
          ? "dark-surface text-ivory"
          : "premium-panel";
        const titleColor = item.dark
          ? "text-saffron"
          : "text-petrol";
        const borderColor = isOpen
          ? item.dark ? "border-l-saffron" : "border-l-petrol"
          : "border-l-transparent";

        return (
          <div
            key={i}
            className={`border-b border-[var(--line)] ${item.dark ? "border-b-white/8" : ""} ${bgClass}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
            >
              <div className={`border-l-2 ${borderColor} pl-4 transition-colors duration-200`}>
                <p className={`accent-font text-[11px] font-semibold uppercase tracking-[0.28em] ${titleColor}`}>
                  {item.title}
                </p>
                {item.tag && (
                  <p className={`mt-1 text-[10px] uppercase tracking-[0.2em] ${item.dark ? "text-white/40" : "text-graphite/40"}`}>
                    {item.tag}
                  </p>
                )}
              </div>
              <span className={`shrink-0 text-lg ${item.dark ? "text-white/40" : "text-graphite/40"}`}>
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
