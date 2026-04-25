import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Politique de confidentialité · DigitalTimes",
  description: "Politique de confidentialité et traitement des données personnelles de DigitalTimes.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <main className="min-h-screen bg-ivory text-graphite">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">

          <Link
            href="/"
            className="accent-font inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-petrol transition hover:opacity-70"
          >
            ← Retour
          </Link>

          <h1 className="display-font mt-8 text-5xl leading-tight tracking-[-0.045em] text-graphite">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm text-graphite/50">Dernière mise à jour : mars 2026</p>

          <div className="mt-12 space-y-10 text-base leading-8 text-graphite/80">

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">1. Responsable du traitement</h2>
              <div className="mt-4 space-y-1">
                <p>Thomas Gildas · Auto-entrepreneur</p>
                <p>293 rue Solferino, 59000 Lille, France</p>
                <p>
                  <a href="mailto:Thomas@digitaltimes.fr" className="text-petrol hover:underline">Thomas@digitaltimes.fr</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">2. Données collectées</h2>
              <p className="mt-4">Dans le cadre de l'utilisation du site DigitalTimes, les données suivantes peuvent être collectées :</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Données d'identification : nom, prénom, adresse email, numéro de téléphone (lors d'une prise de contact ou réservation d'appel)</li>
                <li>Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite (via des outils d'analyse anonymisés)</li>
                <li>Données liées à la prestation : éléments transmis dans le cadre d'un projet ou d'une collaboration</li>
              </ul>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">3. Finalités du traitement</h2>
              <p className="mt-4">Les données collectées sont utilisées exclusivement pour :</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Répondre aux demandes de contact et organiser les appels de cadrage</li>
                <li>Assurer la réalisation et le suivi des prestations commandées</li>
                <li>Améliorer l'expérience de navigation sur le site</li>
                <li>Respecter les obligations légales et comptables</li>
              </ul>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">4. Base légale du traitement</h2>
              <p className="mt-4">
                Le traitement des données repose sur : l'exécution d'un contrat (prestations commandées), le consentement de l'utilisateur (prise de contact), et l'intérêt légitime (amélioration du site).
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">5. Durée de conservation</h2>
              <p className="mt-4">
                Les données sont conservées pour la durée strictement nécessaire à la finalité pour laquelle elles ont été collectées, et au maximum 3 ans à compter du dernier contact. Les données comptables sont conservées 10 ans conformément à la loi.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">6. Partage des données</h2>
              <p className="mt-4">
                Les données personnelles ne sont jamais vendues ni cédées à des tiers. Elles peuvent être transmises à des sous-traitants techniques (hébergement, outils de planification comme Calendly) dans le strict cadre de la prestation, et dans le respect du RGPD.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">7. Vos droits</h2>
              <p className="mt-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li><span className="font-semibold text-graphite">Droit d'accès</span> : obtenir une copie de vos données</li>
                <li><span className="font-semibold text-graphite">Droit de rectification</span> : corriger des données inexactes</li>
                <li><span className="font-semibold text-graphite">Droit à l'effacement</span> : demander la suppression de vos données</li>
                <li><span className="font-semibold text-graphite">Droit d'opposition</span> : vous opposer à certains traitements</li>
                <li><span className="font-semibold text-graphite">Droit à la portabilité</span> : recevoir vos données dans un format structuré</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez : <a href="mailto:Thomas@digitaltimes.fr" className="text-petrol hover:underline">Thomas@digitaltimes.fr</a>. En cas de désaccord, vous pouvez saisir la <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-petrol hover:underline">CNIL</a>.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">8. Cookies</h2>
              <p className="mt-4">
                Le site DigitalTimes utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
