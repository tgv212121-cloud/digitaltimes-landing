"use client";

import type { CSSProperties } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { CTAButton } from "@/components/cta-button";
import { RotatingWord } from "@/components/rotating-word";
import { landingContent } from "@/content/landing-content";
import { siteConfig } from "@/content/site-config";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const brandLoop = [...landingContent.hero.brands, ...landingContent.hero.brands];
  const pointerX = useMotionValue(260);
  const pointerY = useMotionValue(200);
  const spotlightStyle = {
    "--pointer-x": useMotionTemplate`${pointerX}px`,
    "--pointer-y": useMotionTemplate`${pointerY}px`,
  } as CSSProperties;

  return (
    <section className="grain-overlay relative isolate overflow-hidden pb-14 pt-5 sm:pb-24 sm:pt-8">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_64%)]"
        aria-hidden="true"
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[-4rem] top-24 h-48 w-48 rounded-full bg-saffron/20 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.3, 0.55, 0.3],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[8%] top-20 hidden h-56 w-56 rounded-full bg-petrol/14 blur-3xl lg:block"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.28, 0.55, 0.28],
                scale: [1, 1.1, 1],
              }
        }
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="section-shell relative z-10">
        <header className="glass-panel flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex select-none items-baseline gap-0">
              <span className="display-font text-[22px] font-[500] leading-none tracking-[-0.02em] text-graphite">
                Digital
              </span>
              <span className="display-font text-[22px] font-bold italic leading-none tracking-[-0.02em] text-petrol">
                Times
              </span>
            </div>
          </div>

          <CTAButton href={siteConfig.cta.bookingUrl} label={siteConfig.cta.shortLabel} />
        </header>

        <div className="pb-10 pt-16 lg:pb-16 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="display-font mt-7 text-5xl leading-[0.92] tracking-[-0.06em] text-graphite sm:text-6xl xl:text-[5.3rem]">
              Je construis ce qui <span className="accent-script text-petrol">manque</span> à ton agence pour atteindre les <RotatingWord words={["100K€/mois", "200K€/mois", "300K€/mois", "400K€/mois", "500K€/mois"]} className="display-font font-[800] text-graphite" />.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-graphite/74 sm:text-lg">
              {landingContent.hero.description}
            </p>

            <div className="mt-8 flex justify-center">
              <CTAButton href="#abonnement" label="Voir le modèle mensuel" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
