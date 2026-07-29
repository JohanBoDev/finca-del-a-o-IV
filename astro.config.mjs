// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

/**
 * La URL del sitio se toma de Vercel en tiempo de build.
 *
 * De aquí sale la URL absoluta de `og:image` — la miniatura que se ve
 * al pegar el link en WhatsApp. Si estuviera escrita a mano habría que
 * acordarse de cambiarla al desplegar; así se resuelve sola.
 *
 * VERCEL_PROJECT_PRODUCTION_URL trae el dominio de producción sin el
 * "https://". En local no existe y se cae al servidor de desarrollo.
 */
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
