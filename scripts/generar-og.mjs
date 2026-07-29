/**
 * Genera la miniatura del link: public/og.jpg
 *
 *   npm run og
 *
 * Por qué existe: el flyer es vertical (532x803) y WhatsApp recorta las
 * imágenes verticales a un cuadrito en vez de mostrar preview grande.
 * Este script lo monta sobre un lienzo horizontal de 1200x630 — el
 * tamaño que funciona en WhatsApp, Facebook y Twitter por igual.
 *
 * El resultado se commitea. No corre en cada build: la miniatura solo
 * cambia si cambias el flyer.
 */
import sharp from 'sharp';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const raiz = fileURLToPath(new URL('..', import.meta.url));
const ORIGEN = `${raiz}src/assets/flyer.png`;
const DESTINO = `${raiz}public/og.jpg`;

const ANCHO = 1200;
const ALTO = 630;

// 1. Fondo: el mismo flyer estirado a lo ancho, desenfocado y oscurecido.
const fondo = await sharp(ORIGEN)
  .resize(ANCHO, ALTO, { fit: 'cover', position: 'centre' })
  .blur(38)
  .modulate({ brightness: 0.5 })
  .toBuffer();

// 2. Velo con las auroras de la página, para que combine con el sitio.
const velo = Buffer.from(`
  <svg width="${ANCHO}" height="${ALTO}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="azul">
        <stop offset="0%" stop-color="#14a5f5" stop-opacity="0.40"/>
        <stop offset="100%" stop-color="#14a5f5" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="neon">
        <stop offset="0%" stop-color="#d8e600" stop-opacity="0.26"/>
        <stop offset="100%" stop-color="#d8e600" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${ANCHO}" height="${ALTO}" fill="#070c16" opacity="0.60"/>
    <ellipse cx="150" cy="110" rx="440" ry="330" fill="url(#azul)"/>
    <ellipse cx="1060" cy="560" rx="420" ry="310" fill="url(#neon)"/>
    <ellipse cx="1120" cy="60"  rx="300" ry="240" fill="url(#azul)"/>
  </svg>
`);

// 3. El flyer nítido, centrado, con aire arriba y abajo.
const poster = await sharp(ORIGEN).resize({ height: 566, fit: 'inside' }).toBuffer();

await sharp(fondo)
  .composite([{ input: velo }, { input: poster, gravity: 'centre' }])
  .jpeg({ quality: 86, mozjpeg: true, progressive: true })
  .toFile(DESTINO);

const { width, height } = await sharp(DESTINO).metadata();
console.log(`public/og.jpg  ${width}x${height}  ${Math.round(statSync(DESTINO).size / 1024)} kB`);
