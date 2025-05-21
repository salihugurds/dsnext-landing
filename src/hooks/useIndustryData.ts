import { useState, useEffect, useCallback } from 'react';
import { useSupabase } from '../context/SupabaseContext';
import type { Industry } from '../context/types';

export const useIndustryList = () => {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { getIndustries } = useSupabase();

  const fetchIndustries = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getIndustries();
      setIndustries(data);
    } catch (err) {
      console.error('Error fetching industries:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [getIndustries]);

  useEffect(() => {
    fetchIndustries();
  }, [fetchIndustries]);

  return { industries, loading, error, refetch: fetchIndustries };
};

export const useIndustryBySlug = (slug: string) => {
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { getIndustryBySlug } = useSupabase();

  const fetchIndustry = useCallback(async () => {
    if (!slug) return;
    
    try {
      setLoading(true);
      const data = await getIndustryBySlug(slug);
      setIndustry(data);
    } catch (err) {
      console.error(`Error fetching industry with slug ${slug}:`, err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [slug, getIndustryBySlug]);

  useEffect(() => {
    fetchIndustry();
  }, [fetchIndustry]);

  return { industry, loading, error, refetch: fetchIndustry };
};
