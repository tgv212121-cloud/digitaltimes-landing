import ScrollStack, { ScrollStackItem } from "@/components/scroll-stack";

export default function TestStack() {
  return (
    <main className="h-screen bg-ivory">
      <ScrollStack
        itemDistance={120}
        itemScale={0.04}
        itemStackDistance={25}
        blurAmount={2}
        baseScale={0.88}
      >
        {/* Section 1 : Hero */}
        <ScrollStackItem className="bg-ivory border border-[var(--line)]">
          <div className="p-8 sm:p-12">
            <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">Hero</p>
            <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
              Je construis ce qui manque à ton agence pour atteindre les 100K€/mois.
            </h2>
            <p className="mt-4 max-w-[55ch] text-[15px] leading-[1.8] text-graphite/70">
              Outils, automatisations IA et systèmes qui vendent, qualifient et délivrent sans toi dans la boucle.
            </p>
          </div>
        </ScrollStackItem>

        {/* Section 2 : Le problème */}
        <ScrollStackItem className="bg-ivory border border-[var(--line)]">
          <div className="p-8 sm:p-12">
            <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">Le problème</p>
            <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
              10 outils qui ne se parlent pas.
            </h2>
            <p className="mt-4 max-w-[55ch] text-[15px] leading-[1.8] text-graphite/70">
              Drive, WhatsApp, Notion, Gmail, Slack, Trello... Rien n'est relié. L'équipe perd du temps.
            </p>
          </div>
        </ScrollStackItem>

        {/* Section 3 : Coût */}
        <ScrollStackItem className="bg-[#0e0c0a] text-ivory">
          <div className="p-8 sm:p-12">
            <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-saffron">Le vrai problème</p>
            <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-ivory">
              +150€/mois d'abonnements. Rien ne communique.
            </h2>
          </div>
        </ScrollStackItem>

        {/* Section 4 : Comment ça marche */}
        <ScrollStackItem className="bg-ivory border border-[var(--line)]">
          <div className="p-8 sm:p-12">
            <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">Comment ça marche</p>
            <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
              Vite. Mais pas dans le flou.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              <div>
                <p className="display-font text-3xl font-[800] text-petrol">01</p>
                <p className="mt-1 text-[13px] text-graphite/60">Cadrage</p>
              </div>
              <div>
                <p className="display-font text-3xl font-[800] text-petrol">02</p>
                <p className="mt-1 text-[13px] text-graphite/60">Structure</p>
              </div>
              <div>
                <p className="display-font text-3xl font-[800] text-petrol">03</p>
                <p className="mt-1 text-[13px] text-graphite/60">V1 livrée</p>
              </div>
              <div>
                <p className="display-font text-3xl font-[800] text-petrol">04</p>
                <p className="mt-1 text-[13px] text-graphite/60">Maintenance</p>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Section 5 : CTA */}
        <ScrollStackItem className="bg-[#0e0c0a] text-ivory">
          <div className="p-8 sm:p-12">
            <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-saffron">Prêt ?</p>
            <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-ivory">
              Réserve l'appel. 30 minutes pour cadrer le bon use case.
            </h2>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </main>
  );
}
