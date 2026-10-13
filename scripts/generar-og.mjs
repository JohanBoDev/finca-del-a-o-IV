/**
 * Genera las miniaturas del link, una por edición:
 *
 *   npm run og
 *
 *   · public/og.jpg     → la V (página principal). Foto de la finca + texto.
 *   · public/og-iv.jpg  → la IV (recuerdo). El flyer sobre lienzo horizontal.
 *
 * 1200x630 en JPEG: es el tamaño que WhatsApp muestra en grande (las
 * verticales las recorta a un cuadrito) y WhatsApp no lee AVIF ni WebP.
 *
 * Los resultados se commitean. No corre en cada build: solo cambian si
 * cambias la foto, el flyer o los datos de la fiesta.
 */
import sharp from 'sharp';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const raiz = fileURLToPath(new URL('..', import.meta.url));
const ANCHO = 1200;
const ALTO = 630;

const informar = (ruta) =>
  sharp(ruta)
    .metadata()
    .then(({ width, height }) =>
      console.log(`${ruta.replace(raiz, '')}  ${width}x${height}  ${Math.round(statSync(ruta).size / 1024)} kB`),
    );

const guardar = (imagen, destino) =>
  imagen.jpeg({ quality: 86, mozjpeg: true, progressive: true }).toFile(destino);

/* ------------------------------------------------------------
   La V: la piscina de Casa Blanca con el título encima.
   Impact porque es la condensada que hay en Windows y se parece
   a Anton, la tipografía de la página.
   ------------------------------------------------------------ */
async function finca5() {
  const FOTO = `${raiz}src/assets/fotos/v/01-piscina-con-vista.jpeg`;
  const DESTINO = `${raiz}public/og.jpg`;
  const ROSA = '#ff4fa3';
  const TURQUESA = '#22e0c4';

  const fondo = await sharp(FOTO)
    .resize(ANCHO, ALTO, { fit: 'cover', position: 'centre' })
    .modulate({ brightness: 0.9, saturation: 1.1 })
    .toBuffer();

  const texto = Buffer.from(`
    <svg width="${ANCHO}" height="${ALTO}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="velo" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#0c0816" stop-opacity="0.92"/>
          <stop offset="55%" stop-color="#0c0816" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0c0816" stop-opacity="0.05"/>
        </linearGradient>
        <filter id="brillo" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${ANCHO}" height="${ALTO}" fill="url(#velo)"/>
      <g font-family="Impact, 'Arial Black', sans-serif" transform="skewX(-8)">
        <text x="150" y="150" font-size="26" letter-spacing="9" fill="${TURQUESA}">QUINTA EDICIÓN</text>
        <text x="140" y="255" font-size="104" fill="#fbf7f1">LA FINCA</text>
        <text x="140" y="365" font-size="104" fill="${ROSA}" filter="url(#brillo)">DEL AÑO
          <tspan fill="${TURQUESA}"> V</tspan></text>
      </g>
      <rect x="110" y="400" width="300" height="3" fill="${ROSA}"/>
      <g font-family="'Arial', sans-serif" font-weight="bold">
        <text x="110" y="460" font-size="34" fill="#fbf7f1">SÁB 14 · DOM 15 NOV</text>
        <text x="110" y="505" font-size="26" fill="#bdb3cc">Casa Blanca · Nocaima · 3:00 PM</text>
      </g>
    </svg>
  `);

  await guardar(sharp(fondo).composite([{ input: texto }]), DESTINO);
  await informar(DESTINO);
}

/* ------------------------------------------------------------
   La IV: el flyer nítido sobre él mismo desenfocado.
   ------------------------------------------------------------ */
async function finca4() {
  const ORIGEN = `${raiz}src/assets/flyer-iv.png`;
  const DESTINO = `${raiz}public/og-iv.jpg`;

  const fondo = await sharp(ORIGEN)
    .resize(ANCHO, ALTO, { fit: 'cover', position: 'centre' })
    .blur(38)
    .modulate({ brightness: 0.5 })
    .toBuffer();

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

  const poster = await sharp(ORIGEN).resize({ height: 566, fit: 'inside' }).toBuffer();

  await guardar(
    sharp(fondo).composite([{ input: velo }, { input: poster, gravity: 'centre' }]),
    DESTINO,
  );
  await informar(DESTINO);
}

await finca5();
await finca4();
