# La Finca del Año

Página de información y confirmación de la fiesta. La principal es la **V**
(sábado 21 y domingo 22 de noviembre de 2026, Finca Casa Blanca, Nocaima);
la **IV** queda en `/iv` como recuerdo.

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

Cada edición tiene su propio archivo en `src/config/`:

| Archivo | Página | Qué es |
| --- | --- | --- |
| **`finca-v.ts`** | `/` | La que viene. **Es el que vas a tocar.** |
| `finca-iv.ts` | `/iv` | Recuerdo de la anterior: solo fotos, sin confirmar |

### Subir el contador de confirmados

En `src/config/finca-v.ts`:

```ts
confirmados: 12,   // ← súbelo cuando te confirmen
```

Guardas, haces `git push` y Vercel redespliega solo en unos 30 segundos.

Ahí mismo están la fecha (`fechaISO` alimenta la cuenta regresiva), el lugar,
el cupo (`cupoMaximo`), dónde se duerme (`dormir`), el WhatsApp y el mapa.

## Fotos

Cada edición tiene su carpeta: **`src/assets/fotos/v/`** y
**`src/assets/fotos/iv/`**. Sueltas los archivos ahí y la galería los lee sola.

- El orden es alfabético: numéralas (`01-piscina.jpg`, `02-la-casa.jpg`…).
- El nombre se convierte en el texto alternativo; los automáticos
  (WhatsApp, UUID) se reemplazan por uno genérico.
- La primera foto de la IV es la portada de su tarjeta en "Nuestras fincas".

## Paletas

Cada edición tiene su paleta en `src/styles/global.css`. La IV usa los
valores base (amarillo neón + azul) y la V los sobrescribe en el bloque
`html[data-edicion="v"]` (rosa + turquesa). El fondo de partículas toma los
colores de ahí mismo.

## La miniatura del link

`npm run og` genera las dos (1200×630, JPEG):

- **`public/og.jpg`** → la V: `fotos/v/01-piscina-con-vista.jpeg` con el título encima.
- **`public/og-iv.jpg`** → la IV: su flyer (`src/assets/flyer-iv.png`).

No corre en cada build a propósito: la URL tiene que quedarse fija porque
WhatsApp cachea la preview por link. Si cambias la fecha o el lugar de la V,
cambia también el texto en `scripts/generar-og.mjs` y vuelve a correrlo.

## Para la próxima edición (la VI)

1. Copia `finca-v.ts` a `finca-vi.ts` y cambia los datos.
2. `pages/index.astro` pasa a importar la VI; crea `pages/v.astro` copiando `iv.astro`.
3. Agrega la V a la lista de `components/EdicionesPasadas.astro`.
4. Paleta nueva en `global.css`, fotos en `fotos/vi/`, y `npm run og`.

## Estructura

```
src/
├─ config/
│  ├─ evento.ts            ← forma común de una edición + utilidades
│  ├─ finca-v.ts           ← la que viene (/)
│  └─ finca-iv.ts          ← recuerdo (/iv)
├─ assets/fotos/{v,iv}/    ← fotos de cada finca
├─ layouts/Layout.astro    ← head, metadatos, paleta por edición
├─ styles/global.css       ← paletas y utilidades de neón
├─ components/             ← reciben la edición como prop `evento`
│  ├─ Hero                 ← título, cuenta regresiva (o modo recuerdo)
│  ├─ Contador · Datos · Galeria · Rsvp · Footer
│  └─ EdicionesPasadas     ← tarjetas "Nuestras fincas"
└─ pages/
   ├─ index.astro          ← la V
   └─ iv.astro             ← la IV
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
