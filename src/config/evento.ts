/**
 * ============================================================
 *  FORMA DE UNA EDICIÓN
 * ------------------------------------------------------------
 *  Cada fiesta vive en su propio archivo:
 *
 *    · finca-v.ts   → la que viene (página principal, /)
 *    · finca-iv.ts  → el recuerdo de la anterior (/iv)
 *
 *  Para la próxima edición: copia finca-v.ts, cambia los datos,
 *  y la V pasa a ser recuerdo igual que pasó con la IV.
 * ============================================================
 */

export interface Evento {
  nombre: string;
  edicion: string;
  tagline: string;

  /** Carpeta dentro de src/assets/fotos/ con las fotos de esta finca. */
  carpetaFotos: string;
  /** Paleta: coincide con un bloque `html[data-edicion=…]` en global.css. */
  tema: 'iv' | 'v';
  /** Miniatura del link, dentro de public/. 1200x630, JPEG. */
  og: string;

  /** Arranque, con zona horaria de Colombia. De aquí sale la cuenta regresiva. */
  fechaISO: string;
  fechaFinISO: string;
  dias: readonly { rotulo: string; numero: string }[];
  mesTexto: string;
  fechaTexto: string;
  fechaBreve: string;
  duracionTexto: string;
  horaTexto: string;
  notaHora: string;

  lugar: string;
  ubicacion: string;
  distancia: string;
  mapsUrl: string;
  wazeUrl: string;
  mapaEmbed: string;

  cupoMaximo: number;
  /** Dónde se duerme, ya en texto: "14 camas", "4 habitaciones"… */
  dormir: string;
  confirmados: number;

  whatsapp: { numero: string; mensaje: string };
}

/** Link de WhatsApp con el mensaje ya escrito. */
export const whatsappUrl = (e: Evento) =>
  `https://wa.me/${e.whatsapp.numero}?text=${encodeURIComponent(e.whatsapp.mensaje)}`;

/** Cupos que todavía quedan libres. */
export const cuposRestantes = (e: Evento) => Math.max(0, e.cupoMaximo - e.confirmados);

/** Porcentaje de ocupación, para la barra de progreso. */
export const porcentajeOcupado = (e: Evento) =>
  Math.min(100, Math.round((e.confirmados / e.cupoMaximo) * 100));

/** Links de navegación a partir de las coordenadas exactas. */
export const navegacion = (lat: number, lng: number) => ({
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`,
  wazeUrl: `https://waze.com/ul?ll=${lat}%2C${lng}&navigate=yes`,
});
