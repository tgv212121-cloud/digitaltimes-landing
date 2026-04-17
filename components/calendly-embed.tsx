// <!-- Integrated via Catalogue by Thomas Gildas (digitaltimes.fr) — 2026-04-13 -->
// Source : https://help.calendly.com/hc/en-us/articles/223147027
// Library : Calendly inline widget

"use client";

import { useEffect } from "react";

type CalendlyEmbedProps = {
  url: string;
  height?: number;
};

export function CalendlyEmbed({ url, height = 700 }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch {}
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
}
