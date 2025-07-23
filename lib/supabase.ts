import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lfvokdiatflpxnohmofo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxmdm9rZGlhdGZscHhub2htb2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMjA2MzQsImV4cCI6MjA2ODc5NjYzNH0.yO2kIK4xrmB5SXWxfqn6hOtnPerdW51GJfTo6yFyKBs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 