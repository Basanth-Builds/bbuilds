import { createClient } from '@supabase/supabase-js';

const getSupabaseUrl = () => {
    let url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
    if (!url.startsWith('http')) {
        url = `https://${url}`;
    }
    return url;
};

const supabaseUrl = getSupabaseUrl();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations with service role key
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key';
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
