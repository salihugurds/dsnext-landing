import type {
  HeroSection,
  ExpertiseCard,
  TeamMember,
  Database,
} from "../types/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type Industry = Database["public"]["Tables"]["industries"]["Row"];

export type SupabaseContextType = {
  supabase: SupabaseClient<Database>;
  getHeroSection: () => Promise<HeroSection | null>;
  getExpertiseCards: () => Promise<ExpertiseCard[]>;
  getTeamMembers: () => Promise<TeamMember[]>;
  getIndustries: () => Promise<Industry[]>;
  getIndustryBySlug: (slug: string) => Promise<Industry | null>;
  submitContactForm: (
    formData: ContactFormData
  ) => Promise<
    Database["public"]["Tables"]["contact_submissions"]["Row"] | null
  >;
};
