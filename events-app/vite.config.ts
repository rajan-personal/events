import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/events/', // Add this line - should match your repository name
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify('https://mbmedsfsokjqzxdwhaiq.supabase.co'),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibWVkc2Zzb2tqcXp4ZHdoYWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODg4MTQsImV4cCI6MjA0OTY2NDgxNH0.AK95YkmHQ13Da59KNx5yh5OlIeMQjt2TEp2R5dD22Uo'),
  }
})
