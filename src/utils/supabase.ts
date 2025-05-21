import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

type SupabaseError = {
  message: string;
  details?: string;
  hint?: string;
  code?: string;
};

// Check if environment variables are set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// Helper function to handle Supabase errors
const handleSupabaseError = (error: SupabaseError): never => {
  console.error('Supabase error:', {
    message: error.message,
    details: error.details,
    hint: error.hint,
    code: error.code,
  });
  throw new Error(error.message || 'An error occurred with the database');
};

// Hero Section
export const getHeroSection = async () => {
  const { data, error } = await supabase
    .from('hero_sections')
    .select('*')
    .eq('active', true)
    .single();

  if (error) handleSupabaseError(error);
  return data;
};

// Expertise Cards
export const getExpertiseCards = async () => {
  const { data, error } = await supabase
    .from('expertise_cards')
    .select('*')
    .order('order', { ascending: true });

  if (error) handleSupabaseError(error);
  return data || [];
};

// Industry Cards
export const getIndustryCards = async () => {
  const { data, error } = await supabase
    .from('industry_cards')
    .select('*')
    .order('order', { ascending: true });

  if (error) handleSupabaseError(error);
  return data || [];
};

// Team Members
export const getTeamMembers = async () => {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('order', { ascending: true });

  if (error) handleSupabaseError(error);
  return data || [];
};

// Contact Form Submission
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const submitContactForm = async (formData: ContactFormData) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData])
    .select();

  if (error) handleSupabaseError(error);
  return data?.[0];
};

// Example of a more complex query with joins
export const getPageData = async () => {
  const [hero, expertise, industries, team] = await Promise.all([
    getHeroSection(),
    getExpertiseCards(),
    getIndustryCards(),
    getTeamMembers(),
  ]);

  return {
    hero,
    expertise,
    industries,
    team,
  };
};