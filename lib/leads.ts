import { supabase } from "./supabase";

export type LeadInput = {
  nom: string;
  email: string;
  agence?: string;
  type_agence?: string;
  description: string;
  budget?: string;
  delai?: string;
};

export async function createLead(input: LeadInput): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const { data, error } = await supabase.rpc("create_lead", {
    p_nom: input.nom,
    p_email: input.email,
    p_agence: input.agence ?? "",
    p_type_agence: input.type_agence ?? null,
    p_description: input.description,
    p_budget: input.budget ?? null,
    p_delai: input.delai ?? null,
  });

  if (error) {
    return { ok: false, error: error.message || "Erreur lors de l'envoi" };
  }

  return { ok: true, id: data as string };
}
