import { createClient } from '@supabase/supabase-js'

const URL = 'https://ohhmnwkvylihxmvasucw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oaG1ud2t2eWxpaHhtdmFzdWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Nzg2NzksImV4cCI6MjA2MDA1NDY3OX0.hrFTPlBgQ_RGlRtP8Qp35aITEazjfrSpcdhnAIFiNYo';

export const supabase = createClient(URL, API_KEY);
