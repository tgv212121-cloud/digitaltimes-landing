import { CTAButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { OrbitingTools } from "@/components/orbiting-tools";
import { PixelatedImage } from "@/components/pixelated-image";
import { AgendaCalendar } from "@/components/agenda-calendar";
import { ContactForm } from "@/components/contact-form";
import { landingContent } from "@/content/landing-content";
import { siteConfig } from "@/content/site-config";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ivory text-graphite">
      <Hero />

      {/* ══════════════════════════════════════════
          TOUT AU MÊME ENDROIT — Orbiting tools
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">Le problème</p>
                <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
                  10 outils qui ne se parlent pas.
                </h2>
                <p className="mt-5 max-w-[45ch] text-[15px] leading-[1.8] text-graphite/70">
                  Drive, WhatsApp, Notion, Gmail, Slack, Trello, Excel. Rien n'est relié. Les infos se perdent. L'équipe perd du temps.
                </p>
                <p className="mt-4 max-w-[45ch] text-[15px] font-semibold leading-[1.8] text-graphite">
                  Je ramène tout au même endroit. Clients, freelances, comptabilité, gestion. Une interface, zéro friction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <OrbitingTools />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LE COÛT DES ABONNEMENTS
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="section-shell">

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <Reveal>
              <div>
                <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">Le vrai problème</p>
                <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
                  +150€/mois d'abonnements.<br />Rien ne communique.
                </h2>
                <p className="mt-6 max-w-[50ch] text-[15px] leading-[1.8] text-graphite/70">
                  Slack, Notion, Airtable, Drive, Trello, Monday, HubSpot, Pennylane, Zapier, Gmail, Fireflies... Tu paies chacun séparément. Chacun a ses limites. Les données sont éparpillées. L'équipe jongle entre 10 onglets.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="bg-[#0e0c0a] p-6 text-ivory sm:p-8">
                <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-saffron">Avec DigitalTimes</p>
                <p className="display-font mt-3 text-[clamp(1.3rem,2.5vw,1.8rem)] font-[800] leading-[0.95] tracking-[-0.04em] text-ivory">
                  Un abonnement entre 20 et 100€/mois.
                </p>
                <div className="mt-5 grid gap-0">
                  <div className="flex items-start gap-3 border-b border-white/8 py-3">
                    <span className="mt-0.5 text-[14px] text-emerald-400">✓</span>
                    <p className="text-[14px] leading-[1.7] text-ivory/80">Un outil construit pour ton agence</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-white/8 py-3">
                    <span className="mt-0.5 text-[14px] text-emerald-400">✓</span>
                    <p className="text-[14px] leading-[1.7] text-ivory/80">Personnalisé, maintenu, connecté</p>
                  </div>
                  <div className="flex items-start gap-3 py-3">
                    <span className="mt-0.5 text-[14px] text-emerald-400">✓</span>
                    <p className="text-[14px] leading-[1.7] text-ivory/80">Pas de features inutiles, pas de limites prédéfinies</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AVEC / SANS L'AGENCE
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="section-shell">

          <div className="mt-10">
            <Reveal>
              <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">Pourquoi nous</p>
              <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
                La différence est simple.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-0 lg:grid-cols-2">
            {/* Sans */}
            <Reveal>
              <div className="border border-[var(--line)] p-6 sm:p-8">
                <p className="display-font text-[clamp(1.3rem,2.5vw,1.8rem)] font-[800] leading-[0.95] tracking-[-0.04em] text-graphite/40">Sans DigitalTimes</p>
                <div className="mt-8 grid gap-0">
                  <div className="flex items-start gap-3 border-b border-[var(--line)] py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">Le projet livré, le freelance disparaît</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-[var(--line)] py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">Une modification ? Nouveau devis, nouvelle attente</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-[var(--line)] py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">Hébergement et serveurs à tes frais</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-[var(--line)] py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">Aucun suivi, aucune maintenance</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-[var(--line)] py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">Si ça casse, tu te débrouilles</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-[var(--line)] py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">L'outil vieillit et personne ne le touche</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-[var(--line)] py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">Un SaaS générique qui s'adapte à toutes les agences</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-[var(--line)] py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">« Livré dans quelques semaines », sans engagement ferme</p>
                  </div>
                  <div className="flex items-start gap-3 py-4">
                    <span className="mt-0.5 text-[16px] text-red-500">✕</span>
                    <p className="text-[15px] leading-[1.8] text-graphite/55">Prix caché, devis final au-dessus du budget</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Avec */}
            <Reveal delay={0.08}>
              <div className="bg-[#0e0c0a] p-6 text-ivory sm:p-8">
                <p className="display-font text-[clamp(1.3rem,2.5vw,1.8rem)] font-[800] leading-[0.95] tracking-[-0.04em] text-ivory">Avec DigitalTimes</p>
                <div className="mt-8 grid gap-0">
                  <div className="flex items-start gap-3 border-b border-white/8 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">Je livre et je reste, sur la durée</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-white/8 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">Modifications mineures incluses dans l'abonnement</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-white/8 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">Hébergement et serveurs compris</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-white/8 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">Suivi continu, je surveille ce qui tourne</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-white/8 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">Si ça casse, je le répare le jour même</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-white/8 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">L'outil évolue avec ton agence</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-white/8 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">Conçu pour TON agence, pensé pour ton workflow</p>
                  </div>
                  <div className="flex items-start gap-3 border-b border-white/8 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">V1 fonctionnelle en 7 jours. Utilisable dès le jour 1.</p>
                  </div>
                  <div className="flex items-start gap-3 py-4">
                    <span className="mt-0.5 text-[16px] text-emerald-400">✓</span>
                    <p className="text-[15px] font-semibold leading-[1.8] text-ivory/85">À partir de 200 €, setup payé à la signature. Zéro surprise.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMENT ÇA MARCHE
          4 steps horizontal, then dark maintenance block
      ══════════════════════════════════════════ */}
      <section id="abonnement" className="py-20 sm:py-32">
        <div className="section-shell">

          <div className="mt-10">
            <Reveal>
              <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">Comment ça marche</p>
              <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
                Vite. Mais pas dans le flou.
              </h2>
            </Reveal>
          </div>

          {/* 4 étapes — horizontal grid with gap-px for 1px borders */}
          <div className="mt-14 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {landingContent.timeline.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="flex h-full flex-col bg-ivory p-5 sm:p-6">
                  <p className="display-font text-[clamp(2.5rem,4vw,3.5rem)] font-[800] leading-none tracking-[-0.07em] text-petrol">
                    0{index + 1}
                  </p>
                  <p className="accent-font mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-graphite/35">
                    {step.phase}
                  </p>
                  <p className="mt-4 text-[15px] font-semibold text-graphite">{step.title}</p>
                  <p className="mt-1 text-[13px] leading-[1.7] text-graphite/55">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Maintenance block */}
          <Reveal>
            <div className="mt-1 bg-[#0e0c0a] px-6 py-8 text-ivory sm:px-10 sm:py-10">
              <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
                <div>
                  <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.2em] text-saffron">Et après ?</p>
                  <p className="display-font mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-[800] leading-[0.92] tracking-[-0.04em] text-ivory">
                    Maintenance disponible en abonnement.
                  </p>
                  <p className="mt-3 max-w-[45ch] text-[14px] leading-[1.8] text-ivory/55">
                    Prix d'installation + abonnement mensuel pour la maintenance. Ajustements mineurs, corrections et suivi des automatisations couverts par l'abonnement.
                  </p>
                </div>
                <div className="grid gap-1">
                  <p className="border-b border-white/8 py-2.5 text-[13px] text-white/60">Prix d'installation unique</p>
                  <p className="border-b border-white/8 py-2.5 text-[13px] text-white/60">Abonnement mensuel pour la maintenance</p>
                  <p className="py-2.5 text-[13px] text-white/60">Corrections et ajustements couverts par l'abo</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CAS CLIENTS — Avant / Après
      ══════════════════════════════════════════ */}
      <section id="cas-clients" className="py-20 sm:py-32">
        <div className="section-shell">
          <Reveal>
            <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">Cas clients</p>
            <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
              Ce qu'ils avaient avant.<br />
              Ce qu'ils ont maintenant.
            </h2>
          </Reveal>

          {/* ── Visunyx ── */}
          <div className="mt-16 border-t border-[var(--line)] pt-8">
            <Reveal>
              <div className="flex items-center gap-3">
                <img src="/logos/visunyx-real.png" alt="Visunyx" className="h-7 w-7 object-contain" />
                <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite/50">Visunyx</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 overflow-hidden">
                <video className="w-full" autoPlay muted loop playsInline>
                  <source src="/visunyx-apres.mp4" type="video/mp4" />
                </video>
              </div>
            </Reveal>
            <Reveal>
              <div className="pull-quote mt-8 max-w-[55ch]">
                <p className="text-[17px] font-semibold leading-snug tracking-[-0.02em] text-graphite">
                  30 minutes par client. Maintenant zéro.
                </p>
                <p className="mt-3 text-[15px] leading-[1.8] text-graphite/70">
                  Créer un Drive, rédiger un brief, chercher un prompt, remplir un tableau. Tout ça, supprimé. Formulaire brandé → brief auto → interface client → dashboard designer.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL — Formulaire gauche + Agenda droite
      ══════════════════════════════════════════ */}
      <section id="contact" className="bg-[#0e0c0a] py-20 text-ivory sm:py-24">
        <div className="section-shell">
          {/* Header */}
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.28em] text-saffron">
                — {landingContent.finalCta.eyebrow} —
              </p>
              <h2 className="display-font mt-5 text-[clamp(2rem,5vw,3.4rem)] font-[800] leading-[0.92] tracking-[-0.05em] text-ivory">
                {landingContent.finalCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-[1.8] text-ivory/55">
                {landingContent.finalCta.description}
              </p>
            </div>
          </Reveal>

          {/* Grid 2 colonnes : Formulaire gauche, Agenda droite */}
          <div className="mt-14 grid gap-0 lg:grid-cols-2">
            {/* Left : Form */}
            <Reveal>
              <div className="flex h-full flex-col border border-saffron/30 bg-black/30 p-8 sm:p-10">
                <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.2em] text-saffron">
                  Étape 1 · Recommandé
                </p>
                <p className="display-font mt-3 text-[clamp(1.6rem,3vw,2.2rem)] font-[800] leading-[1.05] tracking-[-0.04em] text-ivory">
                  Remplis le<br />formulaire.
                </p>
                <p className="mt-4 mb-8 max-w-[36ch] text-[14px] leading-[1.7] text-ivory/60">
                  Quelques questions pour comprendre ton besoin. Je te réponds avec une proposition concrète sous 24 h.
                </p>

                <ContactForm />
              </div>
            </Reveal>

            {/* Right : Agenda */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col">
                <div className="border border-white/10 border-b-0 bg-black/20 p-6 sm:p-8">
                  <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/40">
                    Étape alternative
                  </p>
                  <p className="display-font mt-3 text-[clamp(1.3rem,2.5vw,1.8rem)] font-[400] italic leading-[1.2] tracking-[-0.02em] text-ivory">
                    Ou prends un <span className="text-saffron">rendez-vous</span>.
                  </p>
                  <p className="mt-2 text-[13px] text-ivory/50">
                    30 minutes. Europe/Paris.
                  </p>
                </div>
                <div className="flex-1">
                  <AgendaCalendar />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUI JE SUIS
          Photo + story, editorial asymmetry
      ══════════════════════════════════════════ */}
      <section id="about" className="pb-20 sm:pb-32">
        <div className="section-shell">

          <div className="mt-10">
            <Reveal>
              <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">{landingContent.about.eyebrow}</p>
              <h2 className="display-font mt-3 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
                {landingContent.about.title}
              </h2>
            </Reveal>
          </div>

          {/* Asymmetric grid: 55/45 — photo bleeds taller */}
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
            <PixelatedImage
              src="/thomas.jpg.jpg"
              alt="Thomas Gildas"
              slices={8}
              className="h-[560px]"
              objectPosition="center 75%"
            />

            <div className="flex flex-col gap-0 lg:pt-2">
              <Reveal>
                <div className="bg-[#0e0c0a] p-6 text-ivory">
                  <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.2em] text-saffron">Mon histoire</p>
                  <p className="display-font mt-3 text-[clamp(1.4rem,2.5vw,1.8rem)] font-[800] leading-[0.92] tracking-[-0.04em] text-ivory">
                    J'ai commencé à <span className="accent-script text-saffron">construire</span> bien avant de connaître le mot.
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.8] text-ivory/55">
                    Tombola à 14 ans. Pelouses à 16 ans. Automatisations à 20 ans. Toujours par choix.
                  </p>
                </div>
              </Reveal>

              {landingContent.about.cards.map((card, index) => (
                <Reveal key={card.title + index} delay={index * 0.06}>
                  <div className="border-b border-[var(--line)] py-5" style={{ paddingLeft: "2px" }}>
                    <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.2em] text-graphite/35">{card.title}</p>
                    <p className="mt-2 max-w-[45ch] text-[14px] leading-[1.8] text-graphite/70">{card.text}</p>
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
