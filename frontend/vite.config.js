import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {

     plugins: [react(), tailwindcss()],
      server: {
        host:true,
        port: 5173,
        hmr: {
          clientPort: 5173
        }
       
      },
      define: {
          'process.env.CLIENT_ID': JSON.stringify(env.CLIENT_ID),
          'process.env.CLIENT_SECRET': JSON.stringify(env.CLIENT_SECRET),
      },
  };
});
