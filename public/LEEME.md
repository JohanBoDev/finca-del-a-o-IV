# Carpeta public

Lo que va aquí se sirve tal cual, sin procesar.

## Falta un archivo: `flyer.jpg`

Deja la pancarta de la fiesta en esta carpeta con el nombre exacto
**`flyer.jpg`**. Se usa en dos lugares:

1. **Fondo del hero** — difuminado y oscurecido detrás del título.
2. **Preview del link en WhatsApp** — la imagen que se ve cuando pegas
   el link en el chat. Sin esto, el link sale sin miniatura.

Si tu archivo es `.png`, o lo renombras a `.jpg`, o cambias la ruta en
`src/layouts/Layout.astro` y `src/components/Hero.astro`.

> La página funciona igual sin el flyer: se ve el degradado nocturno de fondo.
> Solo pierdes la textura y la miniatura del link.

Las fotos de la finca **no** van aquí — van en `src/assets/fotos/`.
