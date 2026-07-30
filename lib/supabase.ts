import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client para uso en el browser (read-only, public buckets)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client con service role (solo server-side / API routes)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const STORAGE_URL = `${supabaseUrl}/storage/v1/object/public`;

export function getPublicUrl(bucket: string, path: string) {
  return `${STORAGE_URL}/${bucket}/${path}`;
}
