import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Mentions légales · DigitalTimes",
  description: "Mentions légales du site DigitalTimes.",
};

export default function MentionsLegales() {
  return (
    <>
      <main className="min-h-screen bg-ivory text-graphite">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">

          {/* Back link */}
          <Link
            href="/"
            className="accent-font inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-petrol transition hover:opacity-70"
          >
            ← Retour
          </Link>

          <h1 className="display-font mt-8 text-5xl leading-tight tracking-[-0.045em] text-graphite">
            Mentions légales
          </h1>
          <p className="mt-4 text-sm text-graphite/50">Dernière mise à jour : mars 2026</p>

          <div className="mt-12 space-y-10 text-base leading-8 text-graphite/80">

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">1. Éditeur du site</h2>
              <div className="mt-4 space-y-1">
                <p><span className="font-semibold text-graphite">Nom :</span> Thomas Gildas</p>
                <p><span className="font-semibold text-graphite">Statut :</span> Auto-entrepreneur</p>
                <p><span className="font-semibold text-graphite">SIRET :</span> 951 880 590 00017</p>
                <p><span className="font-semibold text-graphite">SIREN :</span> 951 880 590</p>
                <p><span className="font-semibold text-graphite">Adresse :</span> 293 rue Solferino, 59000 Lille, France</p>
                <p><span className="font-semibold text-graphite">Email :</span>{" "}
                  <a href="mailto:Thomas@digitaltimes.fr" className="text-petrol hover:underline">Thomas@digitaltimes.fr</a>
                </p>
                <p><span className="font-semibold text-graphite">Téléphone :</span> 06 15 72 45 70</p>
              </div>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">2. Directeur de la publication</h2>
              <p className="mt-4">Thomas Gildas, en qualité d'auto-entrepreneur et responsable du site DigitalTimes.</p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">3. Hébergeur</h2>
              <div className="mt-4 space-y-1">
                <p><span className="font-semibold text-graphite">Société :</span> Vercel Inc.</p>
                <p><span className="font-semibold text-graphite">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
                <p><span className="font-semibold text-graphite">Site :</span>{" "}
                  <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-petrol hover:underline">vercel.com</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">4. Propriété intellectuelle</h2>
              <p className="mt-4">
                L'ensemble des contenus présents sur le site DigitalTimes (textes, visuels, structure, code) sont la propriété exclusive de Thomas Gildas, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable écrite est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">5. Limitation de responsabilité</h2>
              <p className="mt-4">
                Thomas Gildas s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, il ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus à partir d'un usage non conforme des informations publiées. Les liens externes présents sur le site sont fournis à titre indicatif, sans engagement de DigitalTimes quant à leur contenu.
              </p>
            </section>

            <section>
              <h2 className="display-font text-2xl tracking-[-0.03em] text-graphite">6. Droit applicable</h2>
              <p className="mt-4">
                Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux français.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
