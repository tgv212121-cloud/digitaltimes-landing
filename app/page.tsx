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

      <section id="collabs" className="pb-6 pt-2 sm:pb-10">
        <div className="section-shell grid gap-5 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
          <Reveal className="premium-panel rounded-[2.2rem] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Preuve sociale"
              title="Des marques m'ont deja confie des missions et des projets."
              description="Je n'invente pas ce positionnement dans le vide. DigitalTimes a deja travaille avec plusieurs marques et agences, et cette preuve sociale doit maintenant remonter plus fort dans la page."
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {landingContent.hero.brands.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.08}>
                <a
                  className="collab-card premium-panel block rounded-[1.8rem] p-5 transition duration-500 hover:-translate-y-2 hover:shadow-glow"
                  href={brand.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.28em] text-petrol">Collaboration</p>
                  <h3 className="display-font mt-4 text-3xl tracking-[-0.04em] text-graphite">{brand.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-graphite/68">{brand.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="avant-apres" className="pb-10 pt-6 sm:pb-16 sm:pt-10">
        <div className="section-shell">
          <Reveal className="dark-surface section-sheen rounded-[2.4rem] px-5 py-6 text-ivory sm:px-8 sm:py-8">
            <SectionHeading
              eyebrow={landingContent.comparison.eyebrow}
              title={landingContent.comparison.title}
              description="Le point n'est pas seulement de gagner du temps. Le point est surtout d'avoir un actif digital qui augmente la valeur percue de l'agence et rend son execution plus nette."
              inverse
            />

            <div className="mt-8 hidden rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/46 lg:grid lg:grid-cols-[0.24fr_0.38fr_0.38fr]">
              <span>Point de friction</span>
              <span>Sans l'outil</span>
              <span>Avec DigitalTimes</span>
            </div>

            <div className="mt-4 space-y-4">
              {landingContent.comparison.rows.map((row, index) => (
                <Reveal key={row.label} delay={index * 0.08}>
                  <div className="grid gap-4 rounded-[1.6rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/10 lg:grid-cols-[0.24fr_0.38fr_0.38fr]">
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

      <section id="solutions" className="pb-10 pt-10 sm:pb-16">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow={landingContent.services.eyebrow}
              title={landingContent.services.title}
              description="Chaque bloc ci-dessous correspond a un vrai type de besoin que peut avoir une agence digitale. L'idee est de montrer rapidement que tu ne vends pas une technologie vague mais des solutions tres concretes."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {landingContent.services.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article
                  className={`group relative overflow-hidden rounded-[2.15rem] border p-6 transition duration-500 hover:-translate-y-2 hover:shadow-glow ${
                    index === 1
                      ? "border-petrol/14 bg-gradient-to-br from-[rgba(30,94,255,0.12)] via-[rgba(255,255,255,0.82)] to-[rgba(127,183,255,0.18)]"
                      : "premium-panel border-[var(--line)]"
                  }`}
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" aria-hidden="true" />
                  <div className="absolute right-5 top-5 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite/56">
                    {card.kicker}
                  </div>
                  <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.3em] text-petrol">Solution</p>
                  <h3 className="display-font mt-5 text-3xl leading-tight tracking-[-0.04em] text-graphite">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-graphite/72">{card.description}</p>
                  <div className="mt-6 space-y-3">
                    {card.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[1.2rem] border border-[var(--line)] bg-white/62 px-4 py-3 text-sm leading-6 text-graphite/74 transition duration-300 group-hover:bg-white/82"
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

      <section id="abonnement" className="pb-10 pt-10 sm:pb-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="premium-panel rounded-[2.2rem] p-6 sm:p-8">
              <SectionHeading
                eyebrow={landingContent.subscription.eyebrow}
                title={landingContent.subscription.title}
                description={landingContent.subscription.description}
              />
            </div>
          </Reveal>

          <div className="grid gap-5">
            {landingContent.subscription.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <div className={`rounded-[2rem] border p-6 transition duration-500 hover:-translate-y-1 ${index === 1 ? "dark-surface text-ivory" : "premium-panel"}`}>
                  <p className={`accent-font text-[11px] font-semibold uppercase tracking-[0.28em] ${index === 1 ? "text-saffron" : "text-petrol"}`}>
                    {card.title}
                  </p>
                  <p className={`display-font mt-4 text-3xl leading-tight tracking-[-0.04em] ${index === 1 ? "text-ivory" : "text-graphite"}`}>
                    {card.description}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {card.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className={`rounded-[1.2rem] border px-4 py-3 text-sm leading-6 ${
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

      <section id="process" className="pb-10 pt-10 sm:pb-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <div className="premium-panel rounded-[2.2rem] p-6 sm:p-8">
              <SectionHeading
                eyebrow={landingContent.timeline.eyebrow}
                title={landingContent.timeline.title}
                description="Le bon angle ici n'est pas de vendre une promesse abstraite. C'est de montrer que tu sais cadrer vite, produire vite et sortir quelque chose de suffisamment net pour etre teste ou vendu rapidement."
              />
            </div>
          </Reveal>

          <div className="grid gap-4">
            {landingContent.timeline.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className={`rounded-[2rem] border p-5 transition duration-500 hover:-translate-y-1 ${index % 2 === 0 ? "premium-panel" : "dark-surface text-ivory"}`}>
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
      </section>

      <section id="about" className="pb-10 pt-10 sm:pb-16">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow={landingContent.about.eyebrow}
              title={landingContent.about.title}
              description={landingContent.about.intro}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="dark-surface rounded-[2.2rem] p-6 text-ivory sm:p-8">
              <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.3em] text-saffron">Positionnement</p>
              <h3 className="display-font mt-5 text-4xl leading-tight tracking-[-0.045em] text-ivory">
                J'aide les agences a transformer une <span className="accent-script text-saffron">bonne idee</span> en systeme utile, vendable ou automatisable.
              </h3>
              <p className="mt-5 text-base leading-8 text-ivory/72">
                Cette zone reste volontairement premium et lisible. Des que tu me donnes plus d'elements personnels, je peux la transformer en une section beaucoup plus forte avec preuve, posture et credibilite.
              </p>
              <div className="mt-8">
                <AboutVisual />
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {landingContent.about.cards.map((card, index) => (
                <Reveal key={card.title + index} delay={index * 0.08}>
                  <div className="premium-panel rounded-[1.8rem] p-5">
                    <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.3em] text-graphite/48">{card.title}</p>
                    <p className="mt-4 text-base leading-8 text-graphite/74">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pb-20 pt-10 sm:pb-24">
        <div className="section-shell">
          <Reveal className="dark-surface section-sheen rounded-[2.5rem] px-6 py-8 text-ivory sm:px-10 sm:py-10">
            <div className="relative z-10 max-w-4xl">
              <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.32em] text-saffron">{landingContent.finalCta.eyebrow}</p>
              <h2 className="display-font mt-4 text-4xl leading-tight tracking-[-0.045em] text-ivory sm:text-5xl">
                {landingContent.finalCta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ivory/74">
                {landingContent.finalCta.description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {landingContent.finalCta.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-6 text-white/76">
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={siteConfig.cta.bookingUrl} label={siteConfig.cta.longLabel} className="bg-ivory text-graphite hover:bg-white" />
                <CTAButton href="#abonnement" label="Comprendre l'abonnement mensuel" variant="secondary" className="border-white/16 bg-white/8 text-ivory hover:bg-white/12" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
