import { createContext } from 'react';
import type { SupabaseContextType } from './types';

export const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);
