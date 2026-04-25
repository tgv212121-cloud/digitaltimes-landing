"use client";

import { CTAButton } from "@/components/cta-button";
import { landingContent } from "@/content/landing-content";
import { siteConfig } from "@/content/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-5 sm:pb-28 sm:pt-8">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="section-shell relative z-10">
        {/* ── Nav (minimal, border-bottom only) ── */}
        <header className="flex items-center justify-between border-b border-[var(--line)] pb-4">
          <div className="flex select-none items-baseline gap-0">
            <span className="display-font text-[20px] font-[600] leading-none tracking-[-0.03em] text-graphite">
              Digital
            </span>
            <span className="display-font text-[20px] font-[800] leading-none tracking-[-0.03em] text-petrol" style={{ fontStyle: "italic" }}>
              Times
            </span>
          </div>
          <CTAButton href="#contact" label={siteConfig.cta.shortLabel} />
        </header>

        {/* ── Headline (starts lower, bleeds left optically) ── */}
        <div className="pb-6 pt-20 sm:pt-28 lg:pt-32">
          <div className="max-w-5xl" style={{ marginLeft: "-0.04em" }}>
            <h1 className="display-font text-[clamp(2.8rem,8vw,6.5rem)] font-[800] leading-[0.86] tracking-[-0.07em] text-graphite">
              Ton bordel d'outils.<br />
              Rassemblé en <span className="accent-script">7 jours</span>.
            </h1>
          </div>

          <p className="mt-8 max-w-[55ch] text-[15px] leading-[1.8] text-graphite/70">
            {landingContent.hero.description}
          </p>

          <div className="mt-10">
            <CTAButton href="#abonnement" label="Voir le modèle mensuel" />
          </div>
        </div>

        {/* ── Horizontal rule as design element ── */}
      </div>
    </section>
  );
}
