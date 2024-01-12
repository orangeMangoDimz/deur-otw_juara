import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.hdr", "**/*.glb"], // add this option
  plugins: [react()],
})
