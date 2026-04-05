import { CTAButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
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

      {/* ── Collaborations ── */}
      <section id="collabs" className="pb-12 pt-6 sm:pb-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
          <Reveal className="premium-panel rounded p-6 sm:p-8">
            <SectionHeading
              eyebrow="Preuve sociale"
              title="Des marques m'ont déjà confié des missions et des projets."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {landingContent.hero.brands.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.08}>
                <a
                  className="collab-card premium-panel flex flex-col items-center rounded-sm p-6 text-center transition duration-500 hover:translate-x-1 hover:border-petrol/30"
                  href={brand.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex h-16 w-full items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      className="max-h-14 max-w-[140px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="accent-font mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-petrol">Collaboration</p>
                  <p className="mt-3 text-sm leading-7 text-graphite/68">{brand.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avant / Après ── */}
      <section id="avant-apres" className="pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="section-shell">
          <Reveal className="dark-surface section-sheen rounded px-5 py-8 text-ivory sm:px-10 sm:py-12">
            <SectionHeading
              eyebrow={landingContent.comparison.eyebrow}
              title={landingContent.comparison.title}
              inverse
            />

            <div className="mt-10 hidden rounded-sm border border-white/10 bg-white/6 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/46 lg:grid lg:grid-cols-[0.24fr_0.38fr_0.38fr]">
              <span>Point de friction</span>
              <span>Sans l'outil</span>
              <span>Avec DigitalTimes</span>
            </div>

            <div className="mt-5 space-y-5">
              {landingContent.comparison.rows.map((row, index) => (
                <Reveal key={row.label} delay={index * 0.08}>
                  <div className="grid gap-4 rounded-sm border border-white/10 bg-white/6 p-6 backdrop-blur-sm transition duration-500 hover:translate-x-0.5 hover:bg-white/10 lg:grid-cols-[0.24fr_0.38fr_0.38fr]">
                    <div>
                      <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.28em] text-saffron">{row.label}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42 lg:hidden">Sans l'outil</p>
                      <p className="mt-2 text-base leading-7 text-white/62 lg:mt-0">{row.before}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42 lg:hidden">Avec DigitalTimes</p>
                      <p className="mt-2 text-base leading-7 text-white/78 lg:mt-0">{row.after}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section id="solutions" className="pb-16 pt-14 sm:pb-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow={landingContent.services.eyebrow}
              title={landingContent.services.title}
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {landingContent.services.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article
                  className={`group relative overflow-hidden rounded border p-8 transition duration-500 hover:translate-x-1 hover:border-petrol/30 ${
                    index === 1
                      ? "border-petrol/20 bg-[rgba(200,75,49,0.04)]"
                      : "premium-panel border-[var(--line)]"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-[var(--line)]" aria-hidden="true" />
                  <div className="absolute right-5 top-5 border border-[var(--line)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite/56">
                    {card.kicker}
                  </div>
                  <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.3em] text-petrol">Solution</p>
                  <h3 className="display-font mt-6 text-3xl leading-tight tracking-[-0.04em] text-graphite">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-graphite/72">{card.description}</p>
                  <div className="mt-8 space-y-3">
                    {card.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-sm border border-[var(--line)] bg-white/62 px-4 py-3 text-sm leading-6 text-graphite/74 transition duration-300 group-hover:bg-white/82"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Abonnement ── */}
      <section id="abonnement" className="pb-12 pt-10 sm:pb-18">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="premium-panel rounded p-6 sm:p-8">
              <SectionHeading
                eyebrow={landingContent.subscription.eyebrow}
                title={landingContent.subscription.title}
                description={landingContent.subscription.description}
              />
            </div>
          </Reveal>

          <div className="grid gap-4">
            {landingContent.subscription.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <div className={`rounded border p-5 transition duration-500 hover:translate-x-0.5 ${index === 1 ? "dark-surface text-ivory" : "premium-panel"}`}>
                  <p className={`accent-font text-[11px] font-semibold uppercase tracking-[0.28em] ${index === 1 ? "text-saffron" : "text-petrol"}`}>
                    {card.title}
                  </p>
                  <p className={`display-font mt-3 text-2xl leading-tight tracking-[-0.04em] ${index === 1 ? "text-ivory" : "text-graphite"}`}>
                    {card.description}
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                    {card.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className={`rounded-sm border px-4 py-3 text-sm leading-6 ${
                          index === 1
                            ? "border-white/10 bg-white/8 text-white/76"
                            : "border-[var(--line)] bg-white/60 text-graphite/74"
                        }`}
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process + Pipeline ── */}
      <section id="process" className="pb-16 pt-14 sm:pb-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <div className="premium-panel rounded p-6 sm:p-8">
              <SectionHeading
                eyebrow={landingContent.timeline.eyebrow}
                title={landingContent.timeline.title}
              />
            </div>
          </Reveal>

          <div className="grid gap-5">
            {landingContent.timeline.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className={`rounded border p-6 transition duration-500 hover:translate-x-0.5 ${index % 2 === 0 ? "premium-panel" : "dark-surface text-ivory"}`}>
                  <div className="grid gap-4 sm:grid-cols-[0.22fr_0.78fr] sm:items-start">
                    <div>
                      <p className={`display-font text-5xl leading-none tracking-[-0.06em] ${index % 2 === 0 ? "text-petrol/80" : "text-saffron"}`}>
                        0{index + 1}
                      </p>
                      <p className={`accent-font mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${index % 2 === 0 ? "text-petrol" : "text-saffron"}`}>
                        {step.phase}
                      </p>
                    </div>
                    <div>
                      <p className={`text-lg font-semibold ${index % 2 === 0 ? "text-graphite" : "text-white"}`}>{step.title}</p>
                      <p className={`mt-2 text-sm leading-7 ${index % 2 === 0 ? "text-graphite/70" : "text-white/70"}`}>{step.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pipeline — pleine largeur */}
        <div className="mt-12">
          <Reveal>
            <AboutVisual />
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
            {/* Colonne gauche : photo recadrée */}
            <Reveal>
              <div className="overflow-hidden rounded" style={{ maxHeight: "520px" }}>
                <img
                  src="/thomas.jpg.jpg"
                  alt="Thomas Gildas — fondateur de DigitalTimes"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </Reveal>

            {/* Colonne droite : histoire + cards */}
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
    </main>
  );
}
