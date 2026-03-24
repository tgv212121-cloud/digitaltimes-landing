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
        <header className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-graphite text-sm font-bold tracking-[0.28em] text-ivory shadow-[0_10px_30px_rgba(12,27,51,0.18)]">
              DT
            </div>
            <div>
              <p className="accent-font text-[11px] uppercase tracking-[0.28em] text-graphite/56">DigitalTimes</p>
              <p className="text-sm text-graphite/72">{siteConfig.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-[var(--line)] bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite/58 lg:inline-flex">
              Build initial + mensuel
            </div>
            <CTAButton href={siteConfig.cta.bookingUrl} label={siteConfig.cta.shortLabel} />
          </div>
        </header>

        <div className="grid gap-10 pb-10 pt-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end lg:gap-14 lg:pb-16 lg:pt-20">
          <div className="max-w-3xl">
            <span className="eyebrow-tag">{landingContent.hero.eyebrow}</span>

            <h1 className="display-font mt-7 max-w-5xl text-5xl leading-[0.88] tracking-[-0.055em] text-graphite sm:text-6xl xl:text-[5.3rem]">
              Je transforme les idees de ton agence en <span className="accent-word">mini-outils</span>, <span className="gradient-text">automatisations IA</span>
              <br className="hidden sm:block" /> et systemes qui <RotatingWord words={landingContent.hero.rotatingWords} className="accent-script text-petrol" />.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/74 sm:text-lg">
              {landingContent.hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="inline-flex rounded-full border border-petrol/14 bg-petrol/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-petrol">
                {landingContent.hero.promise}
              </div>
              <div className="inline-flex rounded-full border border-saffron/18 bg-saffron/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-saffron">
                Si ton agence sent qu'il lui faut ca, l'appel sert a le cadrer vite
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={siteConfig.cta.bookingUrl} label={siteConfig.cta.longLabel} />
              <CTAButton href="#abonnement" label="Voir le modele mensuel" variant="secondary" />
            </div>
          </div>

          <div className="relative lg:pl-10">
            <motion.div
              className="floating-badge absolute -left-2 top-5 z-10 hidden rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/78 backdrop-blur lg:block"
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              Lead magnet interactif
            </motion.div>
            <motion.div
              className="floating-badge absolute right-0 top-28 z-10 hidden rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/78 backdrop-blur xl:block"
              animate={reduceMotion ? undefined : { y: [0, 9, 0] }}
              transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              n8n + IA + API
            </motion.div>
            <div className="outline-orb left-10 top-0 hidden h-24 w-24 lg:block" aria-hidden="true" />
            <div className="outline-orb bottom-16 right-8 hidden h-32 w-32 lg:block" aria-hidden="true" />

            <motion.div
              className="spotlight-card dark-surface section-sheen relative rounded-[2.25rem] p-5 text-ivory sm:p-7"
              style={spotlightStyle}
              onMouseMove={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect();
                pointerX.set(event.clientX - bounds.left);
                pointerY.set(event.clientY - bounds.top);
              }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden="true" />

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="accent-font text-[11px] uppercase tracking-[0.28em] text-white/52">Ce que je peux livrer</p>
                  <p className="mt-2 text-lg font-semibold text-white">De l'idee a un actif digital utile</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-saffron">
                  Build + suivi
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {landingContent.hero.workflow.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className="rounded-[1.55rem] border border-white/10 bg-white/6 p-4 backdrop-blur-sm"
                    whileHover={reduceMotion ? undefined : { x: 4 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="accent-font text-[11px] uppercase tracking-[0.26em] text-white/44">
                          Use case {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] text-white/82">
                        {step.tag}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/68">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {landingContent.hero.signalCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-[1.55rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="display-font text-3xl leading-none tracking-[-0.05em] text-saffron">{card.value}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/56">{card.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div id="hero-proof" className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="premium-panel rounded-[2rem] px-5 py-6 sm:px-7">
            <p className="accent-font text-[11px] uppercase tracking-[0.3em] text-petrol">Ce que cela debloque</p>
            <h2 className="display-font mt-4 text-3xl leading-tight tracking-[-0.045em] text-graphite sm:text-4xl">
              Tu arrives avec une <span className="accent-script">idee</span>. Tu repars avec un <span className="gradient-text">outil utile</span> qui peut continuer a tourner.
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite/68">
              L'objectif n'est pas juste de faire joli. L'objectif est de construire un levier que ton agence peut utiliser pour capter, executer ou vendre mieux chaque mois.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {landingContent.hero.outcomes.map((outcome) => (
              <motion.div
                key={outcome.title}
                className="premium-panel rounded-[1.75rem] p-5"
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite/44">{outcome.title}</p>
                <p className="mt-4 text-base leading-7 text-graphite/74">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="ticker-shell mt-6">
          <div className="ticker-track">
            {brandLoop.map((brand, index) => (
              <a
                key={`${brand.name}-${index}`}
                className="ticker-item"
                href={brand.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="accent-font text-[11px] uppercase tracking-[0.28em] text-petrol">Travail realise pour</span>
                <span className="text-base font-semibold text-graphite">{brand.name}</span>
                <span className="text-sm text-graphite/58">{brand.note}</span>
                <span className="ticker-divider" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
