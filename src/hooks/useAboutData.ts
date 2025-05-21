import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Company, Leadership, Customer } from '../types/supabase';

export const useCompany = () => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('company')
          .select('*')
          .single();

        if (fetchError) throw fetchError;
        setCompany(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  return { company, loading, error };
};

export const useLeadership = () => {
  const [leadership, setLeadership] = useState<Leadership[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLeadership = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('leadership')
          .select('*')
          .order('order', { ascending: true });

        if (fetchError) throw fetchError;
        setLeadership(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeadership();
  }, []);

  return { leadership, loading, error };
};

export const useCustomers = (featuredOnly = false) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        let query = supabase.from('customers').select('*');
        
        if (featuredOnly) {
          query = query.eq('featured', true);
        }
        
        query = query.order('order', { ascending: true });
        
        const { data, error: fetchError } = await query;

        if (fetchError) throw fetchError;
        setCustomers(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [featuredOnly]);

  return { customers, loading, error };
};

export const useLeadershipMember = (id: string) => {
  const [member, setMember] = useState<Leadership | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('leadership')
          .select('*')
          .eq('id', id)
          .single();

        if (fetchError) throw fetchError;
        setMember(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMember();
    } else {
      setLoading(false);
    }
  }, [id]);

  return { member, loading, error };
};
