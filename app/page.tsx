import { CTAButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { Accordion } from "@/components/accordion";
import { AboutVisual } from "@/components/about-visual";
import { landingContent } from "@/content/landing-content";
import { siteConfig } from "@/content/site-config";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

function SectionHeading({ eyebrow, title, description, inverse = false }: SectionHeadingProps) {
  const eyebrowClass = inverse ? "text-saffron" : "text-petrol";
  const titleClass = inverse ? "text-ivory" : "text-graphite";
  const descriptionClass = inverse ? "text-ivory/70" : "text-graphite/68";

  return (
    <div className="max-w-3xl">
      <p className={`accent-font text-[11px] font-semibold uppercase tracking-[0.32em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`display-font mt-4 text-4xl leading-tight tracking-[-0.045em] sm:text-5xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-5 max-w-2xl text-base leading-8 ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ivory text-graphite">
      <Hero />

      {/* ── Cas clients — Avant / Après ── */}
      <section id="cas-clients" className="pb-16 pt-10 sm:pb-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Cas clients"
              title="Ce qu'ils avaient avant. Ce qu'ils ont maintenant."
            />
          </Reveal>

          <div className="mt-14 space-y-20">

            {/* ── Cas 1 : Visunyx ── */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src="/logos/visunyx-real.png" alt="Visunyx" className="h-8 w-8 object-contain" />
                  <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.28em] text-petrol">Visunyx — Interface client automatisée</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded border border-[var(--line)] bg-mist">
                    <p className="accent-font text-[11px] uppercase tracking-[0.3em] text-graphite/30">Avant — photo à venir</p>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <div className="h-8 w-px bg-[var(--line)] lg:h-px lg:w-8" />
                    <p className="accent-font my-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-petrol">Avant / Après</p>
                    <div className="h-8 w-px bg-[var(--line)] lg:h-px lg:w-8" />
                  </div>
                  <div className="relative overflow-hidden rounded border border-[var(--line)]">
                    <video className="w-full" autoPlay muted loop playsInline>
                      <source src="/visunyx-demo.mp4" type="video/mp4" />
                    </video>
                    <p className="absolute bottom-6 right-6 display-font text-3xl tracking-[-0.04em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-4xl" style={{ transform: "rotate(-6deg)" }}>
                      +10 min/client
                    </p>
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/60">
                  Description à venir.
                </p>
              </div>
            </Reveal>

            {/* ── Cas 2 : Clickway ── */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src="/logos/clickway.png" alt="Clickway" className="h-8 w-8 object-contain" />
                  <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.28em] text-petrol">Clickway — Outil digital sur mesure</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded border border-[var(--line)] bg-mist">
                    <p className="accent-font text-[11px] uppercase tracking-[0.3em] text-graphite/30">Avant — photo à venir</p>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <div className="h-8 w-px bg-[var(--line)] lg:h-px lg:w-8" />
                    <p className="accent-font my-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-petrol">Avant / Après</p>
                    <div className="h-8 w-px bg-[var(--line)] lg:h-px lg:w-8" />
                  </div>
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded border border-[var(--line)] bg-mist">
                    <p className="accent-font text-[11px] uppercase tracking-[0.3em] text-graphite/30">Après — vidéo à venir</p>
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/60">
                  Description à venir.
                </p>
              </div>
            </Reveal>

            {/* ── Cas 3 : Scrollab ── */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src="/logos/scrollab-real.png" alt="Scrollab" className="h-8 w-8 object-contain" />
                  <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.28em] text-petrol">Scrollab — Automatisation interne</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded border border-[var(--line)] bg-mist">
                    <p className="accent-font text-[11px] uppercase tracking-[0.3em] text-graphite/30">Avant — photo à venir</p>
                  </div>
                  <div className="flex flex-col items-center py-2">
                    <div className="h-8 w-px bg-[var(--line)] lg:h-px lg:w-8" />
                    <p className="accent-font my-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-petrol">Avant / Après</p>
                    <div className="h-8 w-px bg-[var(--line)] lg:h-px lg:w-8" />
                  </div>
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded border border-[var(--line)] bg-mist">
                    <p className="accent-font text-[11px] uppercase tracking-[0.3em] text-graphite/30">Après — vidéo à venir</p>
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/60">
                  Description à venir.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* ── Comment ça marche ── */}
      <section id="abonnement" className="pb-16 pt-14 sm:pb-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Comment ça marche"
              title="Vite. Mais pas dans le flou."
            />
          </Reveal>

          {/* Les 4 étapes */}
          <div className="mt-14 grid gap-px border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {landingContent.timeline.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="flex h-full flex-col bg-ivory p-6">
                  <p className="display-font text-4xl leading-none tracking-[-0.06em] text-petrol">
                    0{index + 1}
                  </p>
                  <p className="accent-font mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-graphite/40">
                    {step.phase}
                  </p>
                  <p className="mt-4 text-lg font-semibold text-graphite">{step.title}</p>
                  <p className="mt-2 text-sm leading-7 text-graphite/60">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Maintenance mensuelle */}
          <Reveal>
            <div className="mt-6 dark-surface rounded p-6 text-ivory sm:p-8">
              <div className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-center">
                <div>
                  <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.28em] text-saffron">Et après ?</p>
                  <p className="display-font mt-3 text-3xl leading-tight tracking-[-0.04em] text-ivory">
                    La maintenance est incluse.
                  </p>
                  <p className="mt-3 text-base leading-8 text-ivory/60">
                    Ajustements mineurs, corrections, suivi des automatisations : c'est compris dans l'abonnement. Pas de frais en plus.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="rounded-sm border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/70">Ajustements mineurs inclus</div>
                  <div className="rounded-sm border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/70">Corrections gratuites</div>
                  <div className="rounded-sm border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/70">Suivi continu des automatisations</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section id="contact" className="pb-24 pt-14 sm:pb-32">
        <div className="section-shell">
          <Reveal className="dark-surface section-sheen rounded px-6 py-10 text-ivory sm:px-12 sm:py-14">
            <div className="relative z-10 max-w-4xl">
              <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.32em] text-saffron">{landingContent.finalCta.eyebrow}</p>
              <h2 className="display-font mt-5 text-4xl leading-tight tracking-[-0.045em] text-ivory sm:text-5xl">
                {landingContent.finalCta.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/74">
                {landingContent.finalCta.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {landingContent.finalCta.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-sm border border-white/10 bg-white/8 px-4 py-5 text-sm leading-6 text-white/76">
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={siteConfig.cta.bookingUrl}
                  className="inline-flex items-center justify-center bg-ivory px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-graphite transition duration-300 hover:bg-white"
                >
                  {siteConfig.cta.longLabel}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Qui je suis ── */}
      <section id="about" className="pb-16 pt-14 sm:pb-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow={landingContent.about.eyebrow}
              title={landingContent.about.title}
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="overflow-hidden rounded" style={{ height: "520px" }}>
                <img
                  src="/thomas.jpg.jpg"
                  alt="Thomas Gildas — fondateur de DigitalTimes"
                  className="h-full w-full object-cover object-[center_75%]"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <div className="grid gap-6 lg:content-start">
              <Reveal className="dark-surface rounded p-6 text-ivory">
                <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.3em] text-saffron">Mon histoire</p>
                <h3 className="display-font mt-4 text-3xl leading-tight tracking-[-0.045em] text-ivory">
                  J'ai commencé à <span className="accent-script text-saffron">construire</span> bien avant de connaître le mot.
                </h3>
                <p className="mt-4 text-base leading-8 text-ivory/72">
                  Tombola à 14 ans. Pelouses à 16 ans. Automatisations à 20 ans. Toujours par choix.
                </p>
              </Reveal>

              {landingContent.about.cards.map((card, index) => (
                <Reveal key={card.title + index} delay={index * 0.08}>
                  <div className="premium-panel rounded-sm p-6">
                    <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.3em] text-graphite/48">{card.title}</p>
                    <p className="mt-4 text-base leading-8 text-graphite/74">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
