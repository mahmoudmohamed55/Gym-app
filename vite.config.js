import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // لو انت فعلاً محتاجها

export default defineConfig({
  plugins: [react(), tailwindcss()]  // لازم كلها جوه مصفوفة plugins
})
