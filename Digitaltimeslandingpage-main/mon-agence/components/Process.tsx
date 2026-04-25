import Reveal from "@/components/Reveal"

const steps = [
  {
    number: "01",
    title: "Comprendre le besoin",
    text:
      "On part du fonctionnement réel. Ce qui prend du temps, ce qui bloque, ce qui fatigue, ce qui ralentit ou ce qui pourrait être mieux structuré.",
    points: [
      "identifier la friction principale",
      "comprendre le process actuel",
      "cibler le vrai point d’amélioration",
    ],
  },
  {
    number: "02",
    title: "Choisir la bonne logique de solution",
    text:
      "Tout ne doit pas être automatisé. Tout ne doit pas devenir un outil. Le but est de choisir la réponse la plus utile et la plus simple à faire vivre.",
    points: [
      "définir le bon niveau de complexité",
      "retenir la solution la plus cohérente",
      "éviter les outils inutiles ou trop lourds",
    ],
  },
  {
    number: "03",
    title: "Concevoir et intégrer",
    text:
      "La solution est mise en place pour s’insérer proprement dans le quotidien. Elle doit être claire, fiable et adaptée à l’usage réel.",
    points: [
      "mise en place sur mesure",
      "intégration dans l’existant",
      "outil ou automatisation simple à utiliser",
    ],
  },
]

const gains = [
  "moins de charge manuelle",
  "moins de friction dans les process",
  "plus de temps utile pour l’activité",
]

export default function Process() {
  return (
    <section id="process" className="section-soft">
      <div className="container-premium">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <Reveal>
            <div className="card-premium p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="chip-premium">Process</span>
                <span className="chip-premium">Simple</span>
                <span className="chip-premium">Cadré</span>
                <span className="chip-premium">Sur mesure</span>
              </div>

              <p className="section-label mt-6">Déroulé de travail</p>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Un process clair pour concevoir une solution utile
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Le but n’est pas de partir sur une idée floue. Le but est de
                comprendre le besoin réel, choisir la bonne logique de solution,
                puis mettre en place un système simple et cohérent.
              </p>

              <div className="mt-10 space-y-5">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d4b173]/25 bg-[#d4b173]/10 text-base font-semibold tracking-[0.18em] text-[#f3d79c]">
                        {step.number}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/72 sm:text-[15px]">
                          {step.text}
                        </p>

                        <ul className="mt-4 grid gap-2">
                          {step.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm leading-7 text-white/78"
                            >
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d4b173]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="card-premium p-6 sm:p-8">
                <p className="section-label">Ce que ça apporte</p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Une logique utile avant une logique technique
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/72 sm:text-[15px]">
                  Chaque étape sert à garder une direction simple. Résoudre un
                  besoin réel, sans surcharger le fonctionnement ni ajouter un
                  outil de plus sans intérêt.
                </p>

                <div className="mt-6 space-y-3">
                  {gains.map((gain) => (
                    <div
                      key={gain}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/82"
                    >
                      {gain}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-premium p-6 sm:p-8">
                <p className="section-label">Premier échange</p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  On regarde ce qui mérite vraiment d’être simplifié
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/72 sm:text-[15px]">
                  On échange sur ton fonctionnement actuel, les pertes de temps,
                  les frictions et le type de solution le plus pertinent à mettre
                  en place.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#d4b173]">
                      Format
                    </p>
                    <p className="mt-2 text-sm text-white/82">
                      appel stratégique de 30 minutes
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#d4b173]">
                      Objectif
                    </p>
                    <p className="mt-2 text-sm text-white/82">
                      cadrer un besoin concret et la bonne réponse technique
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://calendly.com/thomas-digitaltimes/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Réserver un rendez-vous
                  </a>

                  <a href="#examples" className="btn-secondary">
                    Voir des exemples
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}