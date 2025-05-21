import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// API Base URLs
export const API_BASE_URL = 'https://api.editafy.com';
export const AGORA_APP_ID = import.meta.env.VITE_AGORA_APP_ID;