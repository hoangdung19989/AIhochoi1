
import { createClient } from '@supabase/supabase-js';
import { API_KEYS } from '../constants';

// Robustly retrieve Supabase credentials
// 1. Prioritize keys from constants.tsx for Studio environment
// 2. Fallback to standard Vite env vars (import.meta.env) for production
// 3. Fallback to process.env (polyfilled by vite.config.ts) for Vercel
const getSupabaseVar = (key: 'URL' | 'ANON_KEY'): string | undefined => {
    const constKey = `SUPABASE_${key}` as const;
    const constPlaceholder = `YOUR_SUPABASE_${key}_HERE`;
    if (API_KEYS[constKey] && API_KEYS[constKey] !== constPlaceholder) {
        return API_KEYS[constKey];
    }
    
    const viteKey = `VITE_SUPABASE_${key}`;
    // @ts-ignore
    const viteEnv = import.meta && import.meta.env ? import.meta.env[viteKey] : undefined;
    // @ts-ignore
    const processEnv = typeof process !== 'undefined' && process.env ? process.env[viteKey] : undefined;
    
    return viteEnv || processEnv;
};


const supabaseUrl = getSupabaseVar('URL');
const supabaseAnonKey = getSupabaseVar('ANON_KEY');

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Cảnh báo: Thiếu thông tin kết nối Supabase. Hãy điền vào file constants.tsx hoặc cấu hình trên Vercel. Tính năng đăng nhập sẽ không hoạt động.');
}

// Initialize Supabase client with real credentials or placeholders to prevent crash
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);
