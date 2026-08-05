# La Finca del Año IV

Página de información y confirmación para la fiesta del **viernes 7 y sábado 8
de agosto de 2026** en la Finca Palma Azul (Nocaima, sector Cocunche).

Se comparte por WhatsApp: quien abre el link ve la fecha, la cuenta regresiva,
cómo llegar, las fotos del lugar y un botón que devuelve la confirmación al chat.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # revisa el build antes de desplegar
```

## Lo que vas a estar editando

Casi todo vive en un solo archivo: **`src/config/evento.ts`**.

### Subir el contador de confirmados

Las confirmaciones llegan por WhatsApp, así que el número se lleva a mano:

```ts
confirmados: 15,   // ← súbelo cuando te confirmen
```

Guardas, haces `git push` y Vercel redespliega solo en unos 30 segundos.

### Otros valores en ese mismo archivo

| Campo | Qué controla |
| --- | --- |
| `fechaISO` | La cuenta regresiva (apunta al arranque: viernes 2:00 PM) |
| `dias`, `mesTexto` | Las casillas de fecha del hero |
| `fechaTexto`, `fechaBreve` | La fecha escrita (título, tarjeta, pie) |
| `duracionTexto` | La etiqueta de "2 días, 2 noches" |
| `cupoMaximo` | El denominador del contador (30) |
| `camas` | Los cupos para dormir (14) |
| `whatsapp.numero` | A dónde llegan las confirmaciones |
| `whatsapp.mensaje` | El texto que va prellenado |
| `coordenadas`, `mapsUrl`, `wazeUrl` | Los botones de navegación |
| `mapaEmbed` | El mapa satelital incrustado |

## Agregar o cambiar fotos

Suelta los archivos en **`src/assets/fotos/`** y ya. La galería lee la carpeta
sola — no hay que registrar nada en código.

- Formatos: `.jpg` `.jpeg` `.png` `.webp` `.avif`
- El orden es alfabético, así que numéralas si quieres controlarlo:
  `01-piscina.jpg`, `02-terraza.jpg`…
- El nombre del archivo se convierte en el texto alternativo. Los nombres
  automáticos (WhatsApp, UUID, capturas) se reemplazan por uno genérico.
- Súbelas grandes: Astro las comprime a AVIF y WebP en varios tamaños.
- Las verticales ocupan dos filas del mosaico automáticamente.

## La miniatura del link

Lo que se ve al pegar el link en WhatsApp es **`public/og.jpg`** (1200×630):
el flyer montado sobre un lienzo horizontal.

Si cambias `src/assets/flyer.png`, regenérala:

```bash
npm run og
```

No corre en cada build a propósito. La miniatura solo cambia si cambias el
flyer, y la URL tiene que quedarse fija: WhatsApp cachea la preview por link,
así que una ruta con hash rompería el caché en cada despliegue sin necesidad.

Tres detalles que no son negociables si la vas a tocar:

- **1200×630 horizontal.** WhatsApp recorta las verticales a un cuadrito.
- **JPEG.** No lee AVIF ni WebP en las previews.
- **Ruta sin hash**, por el caché.

El flyer en sí no aparece en ninguna parte de la página.

## Estructura

```
src/
├─ config/evento.ts        ← todos los datos del evento
├─ assets/
│  ├─ fotos/               ← las fotos de la finca
│  └─ flyer.png            ← miniatura del link
├─ layouts/Layout.astro    ← head, metadatos, tipografías
├─ styles/global.css       ← paleta y utilidades de neón
├─ components/
│  ├─ FondoParticulas      ← auroras + partículas interactivas
│  ├─ Hero                 ← título y cuenta regresiva
│  ├─ Contador             ← confirmados / cupo
│  ├─ Datos                ← cuándo, dónde y mapa
│  ├─ Galeria              ← mosaico con visor
│  └─ Rsvp                 ← botón de WhatsApp
└─ pages/index.astro
```

## Despliegue

Vercel detecta Astro solo. No hay que configurar nada:

- Build: `npm run build`
- Salida: `dist`

La URL de la miniatura de WhatsApp se arma en tiempo de build desde
`VERCEL_PROJECT_PRODUCTION_URL`, así que no hay que escribirla a mano.

## Hecho con

Astro · Tailwind CSS · lucide-react

Los íconos se renderizan a HTML durante el build, así que al navegador no le
llega nada de React.
