import { useContext } from 'react';
import { SupabaseContext } from '../context/SupabaseContext';
import type { SupabaseContextType } from '../context/types';

export const useSupabase = (): SupabaseContextType => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};
