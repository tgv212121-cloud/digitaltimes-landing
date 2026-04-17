"use client";

import { useState, type FormEvent } from "react";
import { createLead } from "@/lib/leads";

const TYPE_AGENCE_OPTIONS = [
  "Marketing / SEO / Ads",
  "Développement / Tech",
  "Design / Branding",
  "Consulting / Stratégie",
  "Communication / RP",
  "RH / Recrutement",
  "Autre",
];

const BUDGET_OPTIONS = [
  "Moins de 500 €",
  "500 € – 1 500 €",
  "1 500 € – 3 000 €",
  "3 000 € – 7 000 €",
  "Plus de 7 000 €",
  "Pas encore défini",
];

const DELAI_OPTIONS = [
  "Moins de 3 jours",
  "Moins d'une semaine",
  "1 à 4 semaines",
  "1 à 3 mois",
  "Flexible",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [agence, setAgence] = useState("");
  const [typeAgence, setTypeAgence] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [delai, setDelai] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const res = await createLead({
      nom,
      email,
      agence,
      type_agence: typeAgence || undefined,
      description,
      budget: budget || undefined,
      delai: delai || undefined,
    });

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(res.error);
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center py-10 text-center">
        <p className="accent-font text-[10px] font-semibold uppercase tracking-[0.28em] text-saffron">
          Reçu.
        </p>
        <p className="display-font mt-4 text-[clamp(1.4rem,2.5vw,1.9rem)] font-[800] leading-[1.1] tracking-[-0.04em] text-ivory">
          Message bien reçu, {nom.split(" ")[0] || "merci"}.
        </p>
        <p className="mt-4 max-w-[38ch] text-[14px] leading-[1.7] text-ivory/60">
          Je lis ton brief et je te réponds par mail sous 24 h avec une proposition concrète.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-white/15 bg-black/40 px-4 py-3 text-[14px] text-ivory placeholder:text-ivory/30 focus:border-saffron focus:outline-none transition-colors [color-scheme:dark]";
  const labelClass =
    "accent-font block text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/55 mb-2";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      {/* Nom + Email sur la même ligne sur desktop */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={labelClass}>
            Ton nom *
          </label>
          <input
            id="nom"
            type="text"
            required
            minLength={2}
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Jean Dupont"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email pro *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jean@agence.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Agence */}
      <div>
        <label htmlFor="agence" className={labelClass}>
          Nom de ton agence
        </label>
        <input
          id="agence"
          type="text"
          value={agence}
          onChange={(e) => setAgence(e.target.value)}
          placeholder="Acme Studio"
          className={inputClass}
        />
      </div>

      {/* Type d'agence */}
      <div>
        <label htmlFor="type_agence" className={labelClass}>
          Type d'agence
        </label>
        <select
          id="type_agence"
          value={typeAgence}
          onChange={(e) => setTypeAgence(e.target.value)}
          className={inputClass}
        >
          <option value="">Choisir...</option>
          {TYPE_AGENCE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className={labelClass}>
          Décris ton besoin en 3 lignes *
        </label>
        <textarea
          id="description"
          required
          minLength={10}
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ce que tu veux que l'interface fasse, pour qui, et pourquoi c'est urgent aujourd'hui."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Budget + Délai sur la même ligne sur desktop */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget envisagé
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={inputClass}
          >
            <option value="">Choisir...</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="delai" className={labelClass}>
            Délai visé
          </label>
          <select
            id="delai"
            value={delai}
            onChange={(e) => setDelai(e.target.value)}
            className={inputClass}
          >
            <option value="">Choisir...</option>
            {DELAI_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Erreur */}
      {status === "error" && errorMsg && (
        <p className="text-[13px] text-red-400">
          Erreur : {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center bg-saffron px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-graphite transition-[letter-spacing] duration-500 hover:tracking-[0.24em] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Envoi..." : "Envoyer mon brief"}
      </button>

      <p className="text-[11px] text-ivory/35">
        * Champs obligatoires. Tes infos restent entre nous.
      </p>
    </form>
  );
}
