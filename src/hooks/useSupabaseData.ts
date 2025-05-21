import { useState, useEffect } from "react";
import { useSupabase } from "./useSupabase";
import type {
  HeroSection,
  ExpertiseCard,
  TeamMember,
  Industry,
} from "../types/supabase";

type Card = ExpertiseCard;

// Default values for fallback data
const defaultHero: HeroSection = {
  id: "default",
  title: "Welcome to Our Site",
  subtitle: "Experience the best service with us",
  cta_text: "Get Started",
  cta_link: "/contact",
  background_image: "https://via.placeholder.com/1920x1080",
  active: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

const defaultIndustries: Industry[] = [
  {
    id: "default",
    title: "Our Service",
    description: "Professional services tailored to your needs",
    slug: "default",
    overview_image_url: "https://via.placeholder.com/1920x1080",
    hero_title: "Welcome to Our Site",
    hero_subtitle: "Experience the best service with us",
    hero_image_url: "https://via.placeholder.com/1920x1080",
    sort_order: 0,
    overview_title: "Overview",
    overview_content: "Professional services tailored to your needs",
    challenges_title: "Challenges",
    challenges_content: "Professional services tailored to your needs",
    case_studies: "Professional services tailored to your needs",
    solutions_title: "Solutions",
    solutions_content: "Professional services tailored to your needs",
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const defaultCards: Card[] = [
  {
    id: "default",
    title: "Our Service",
    description: "Professional services tailored to your needs",
    slug: "default",
    icon: null,
    sort_order: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const defaultTeamMembers: TeamMember[] = [
  {
    id: "default",
    name: "John Doe",
    position: "Team Member",
    bio: "Experienced professional",
    image: "https://via.placeholder.com/200",
    sort_order: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const useHeroSection = () => {
  const [hero, setHero] = useState<HeroSection>(defaultHero);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { getHeroSection } = useSupabase();

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await getHeroSection();
        if (data) {
          setHero(data);
        }
      } catch (err) {
        setError(err as Error);
        console.error("Error fetching hero section:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, [getHeroSection]);

  return { hero, loading, error };
};

export const useExpertiseCards = () => {
  const [expertise, setExpertise] = useState<Card[]>(defaultCards);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { getExpertiseCards } = useSupabase();

  useEffect(() => {
    const fetchExpertise = async () => {
      try {
        const data = await getExpertiseCards();
        if (data && data.length > 0) {
          setExpertise(data);
        }
      } catch (err) {
        setError(err as Error);
        console.error("Error fetching expertise cards:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExpertise();
  }, [getExpertiseCards]);

  return { expertise, loading, error };
};

export const useIndustryCards = () => {
  const [industries, setIndustries] = useState<Industry[]>(defaultIndustries);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { getIndustries } = useSupabase();

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const data = await getIndustries();
        if (data && data.length > 0) {
          setIndustries(data);
        }
      } catch (err) {
        setError(err as Error);
        console.error("Error fetching industry cards:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, [getIndustries]);

  return { industries, loading, error };
};

export const useTeamMembers = () => {
  const [team, setTeam] = useState<TeamMember[]>(defaultTeamMembers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { getTeamMembers } = useSupabase();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getTeamMembers();
        if (data && data.length > 0) {
          setTeam(data);
        }
      } catch (err) {
        setError(err as Error);
        console.error("Error fetching team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [getTeamMembers]);

  return { team, loading, error };
};

export const useContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const { submitContactForm } = useSupabase();

  const submitForm = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await submitContactForm(formData);
      setSuccess(true);
    } catch (err) {
      setError(err as Error);
      console.error("Error submitting contact form:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return { submitForm, submitting, error, success };
};
