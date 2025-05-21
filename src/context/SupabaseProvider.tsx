import { ReactNode, useCallback } from "react";
import { supabase } from "../utils/supabase";
import { SupabaseContext } from "./SupabaseContext";
import type { SupabaseContextType } from "./types";

export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
  const getHeroSection = async () => {
    const { data, error } = await supabase
      .from("hero_sections")
      .select("*")
      .eq("active", true)
      .single();

    if (error) throw error;
    return data;
  };

  const getExpertiseCards = async () => {
    const { data, error } = await supabase
      .from("expertise_cards")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data || [];
  };

  const getIndustryCards = async () => {
    const { data, error } = await supabase
      .from("industry_cards")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data || [];
  };

  const getTeamMembers = async () => {
    const { data, error } = await supabase
      .from("team_members")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data || [];
  };

  const submitContactForm = async (
    formData: Parameters<SupabaseContextType["submitContactForm"]>[0]
  ) => {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([formData])
      .select();

    if (error) throw error;
    return data?.[0] || null;
  };

  const getIndustries = useCallback(async () => {
    const { data, error } = await supabase
      .from("industries")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data || [];
  }, []);

  const getIndustryBySlug = useCallback(async (slug: string) => {
    const { data, error } = await supabase
      .from("industries")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;
    return data;
  }, []);

  const value: SupabaseContextType = {
    supabase,
    getHeroSection,
    getExpertiseCards,
    getIndustryCards,
    getTeamMembers,
    getIndustries,
    getIndustryBySlug,
    submitContactForm,
  };

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
};

export default SupabaseProvider;
