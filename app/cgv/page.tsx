import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Conditions Générales de Vente · DigitalTimes",
  description: "Conditions générales de vente des prestations DigitalTimes.",
};

export default function CGV() {
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
            Conditions Générales de Vente
          </h1>
          <p className="mt-4 text-sm text-graphite/50">Dernière mise à jour : mars 2026</p>

          <div className="mt-12 space-y-10 text-base leading-8 text-graphite/80">

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">1. Identification du prestataire</h2>
              <div className="mt-4 space-y-1">
                <p><span className="font-semibold text-graphite">Nom :</span> Thomas Gildas · DigitalTimes</p>
                <p><span className="font-semibold text-graphite">Statut :</span> Auto-entrepreneur</p>
                <p><span className="font-semibold text-graphite">SIRET :</span> 951 880 590 00017</p>
                <p><span className="font-semibold text-graphite">Adresse :</span> 293 rue Solferino, 59000 Lille, France</p>
                <p><span className="font-semibold text-graphite">Email :</span>{" "}
                  <a href="mailto:Thomas@digitaltimes.fr" className="text-petrol hover:underline">Thomas@digitaltimes.fr</a>
                </p>
                <p><span className="font-semibold text-graphite">Téléphone :</span> 06 15 72 45 70</p>
              </div>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">2. Champ d'application</h2>
              <p className="mt-4">
                Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services proposées par DigitalTimes, notamment : création de mini-outils web, automatisations n8n, solutions IA sur mesure, interfaces digitales et abonnements de maintenance mensuelle. Elles s'appliquent à toute commande passée par un client professionnel (B2B).
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">3. Commande et formation du contrat</h2>
              <p className="mt-4">
                Toute prestation débute par un appel de cadrage permettant de définir le périmètre, les livrables et le tarif. Un devis écrit est ensuite adressé au client. La commande est confirmée à réception du devis signé. DigitalTimes se réserve le droit de refuser toute commande ne correspondant pas à son domaine d'activité.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">4. Tarifs</h2>
              <p className="mt-4">
                Les prix sont indiqués en euros hors taxes (HT). En tant qu'auto-entrepreneur bénéficiant de la franchise en base de TVA (article 293B du CGI), DigitalTimes ne collecte pas de TVA. Mention portée sur les factures : « TVA non applicable, art. 293B du CGI ». Les tarifs communiqués dans les devis sont fermes pour une durée de 30 jours à compter de leur émission.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">5. Modalités de paiement</h2>
              <p className="mt-4">Les paiements s'effectuent par virement bancaire ou via les moyens convenus dans le devis. Sauf accord contraire :</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Le paiement est dû à la livraison de la V1, une fois le résultat escompté obtenu par le client</li>
                <li>Aucun acompte n'est exigé : le client ne paie qu'à la réception du livrable</li>
                <li>Les abonnements mensuels sont facturés tous les mois à compter de la date de la première facture (facturation à l'anniversaire, non en début de mois calendaire)</li>
              </ul>
              <p className="mt-4">
                Tout retard de paiement entraîne l'application de pénalités de retard au taux légal en vigueur, ainsi qu'une indemnité forfaitaire de recouvrement de 40 €.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">6. Délais et livraison</h2>
              <p className="mt-4">
                DigitalTimes s'engage à livrer une première version (V1) exploitable dans un délai de 7 jours ouvrés à compter de la validation de la commande et de la réception des éléments nécessaires fournis par le client. Ce délai est indicatif et peut varier selon la complexité du projet et la réactivité du client dans la transmission des informations requises.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">7. Obligations du client</h2>
              <p className="mt-4">Le client s'engage à :</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Fournir en temps utile les informations, accès et contenus nécessaires à la réalisation de la prestation</li>
                <li>Désigner un interlocuteur disponible pour les échanges et validations</li>
                <li>Régler les factures dans les délais convenus</li>
              </ul>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">8. Propriété intellectuelle et hébergement des outils</h2>
              <p className="mt-4">
                Les outils, automatisations, workflows et interfaces développés par DigitalTimes restent hébergés sur les serveurs et l'infrastructure de DigitalTimes. Le client n'acquiert pas le code source, la base de données ni l'accès technique à l'outil : il bénéficie d'un droit d'usage de l'outil tant que l'abonnement mensuel est actif.
              </p>
              <p className="mt-4">
                En cas de résiliation de l'abonnement, l'accès à l'outil est suspendu. DigitalTimes reste propriétaire de l'ensemble des composants techniques, logiques et visuels développés. Le client ne peut en aucun cas reproduire, revendre ou transférer l'outil à un tiers.
              </p>
              <p className="mt-4">
                DigitalTimes conserve le droit de mentionner la réalisation dans ses références commerciales, sauf accord contraire exprès du client.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">9. Confidentialité</h2>
              <p className="mt-4">
                Chaque partie s'engage à traiter avec la plus stricte confidentialité toutes les informations échangées dans le cadre de la prestation. Cet engagement est valable pendant toute la durée de la relation commerciale et 2 ans après sa cessation.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">10. Résiliation</h2>
              <p className="mt-4">
                En cas de résiliation à l'initiative du client après validation de la commande et démarrage des travaux, une indemnité correspondant au temps de travail déjà engagé pourra être facturée, sur la base d'un tarif journalier communiqué dans le devis. En cas de résiliation à l'initiative de DigitalTimes (cas de force majeure ou manquement grave du client), aucune somme ne sera due si le livrable n'a pas encore été remis.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">11. Responsabilité</h2>
              <p className="mt-4">
                DigitalTimes est soumis à une obligation de moyens. Sa responsabilité ne saurait être engagée en cas d'utilisation non conforme des livrables par le client, de retards imputables au client, ou d'événements hors de son contrôle. En tout état de cause, la responsabilité de DigitalTimes est limitée au montant des sommes effectivement perçues au titre de la prestation concernée.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">12. Médiation et litiges</h2>
              <p className="mt-4">
                En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut, le litige sera soumis aux tribunaux compétents de Lille. Les présentes CGV sont soumises au droit français.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
