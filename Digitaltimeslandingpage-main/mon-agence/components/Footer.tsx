export default function Footer() {
  return (
    <footer className="pb-10 pt-0">
      <div className="container-premium">
        <div className="card-premium overflow-hidden px-6 py-10 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#d4b173]">
                Digital Times
              </p>

              <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                Des solutions informatiques sur mesure pour gagner du temps et fluidifier l’activité
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
                Automatisations, outils métier, interfaces web utiles, intégrations n8n
                et systèmes simples à utiliser. L’objectif reste le même.
                Retirer de la friction, réduire la charge manuelle et rendre le
                business plus fluide.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#d4b173]">
                  Ce que je conçois
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  des solutions utiles, sur mesure, pensées pour le fonctionnement réel
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#d4b173]">
                  Résultat visé
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  moins de tâches manuelles, moins de friction, plus de fluidité
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#d4b173]">
                  Premier échange
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  30 minutes pour cadrer un besoin concret et la bonne réponse technique
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(212,177,115,0.28),rgba(255,255,255,0))]" />

          <div className="mt-6 flex flex-col gap-3 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
            <p>© Digital Times</p>
            <p>Solutions sur mesure • Automatisation • Outils utiles</p>
          </div>
        </div>
      </div>
    </footer>
  )
}