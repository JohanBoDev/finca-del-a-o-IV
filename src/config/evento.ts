/**
 * ============================================================
 *  CONFIGURACIÓN DEL EVENTO
 * ------------------------------------------------------------
 *  Este es el único archivo que necesitas tocar para actualizar
 *  la página. Cambias un valor, guardas, haces push y Vercel
 *  redespliega solo en ~30 segundos.
 * ============================================================
 */

export const EVENTO = {
  // --- Identidad -------------------------------------------
  nombre: 'La Finca del Año',
  edicion: 'IV',
  tagline: 'Cuarta edición',

  // --- Cuándo ----------------------------------------------
  // Formato ISO con zona horaria de Colombia (-05:00).
  // De aquí salen la cuenta regresiva y el archivo de calendario.
  fechaISO: '2026-08-08T14:00:00-05:00',
  fechaTexto: 'Sábado 08.08.2026',
  horaTexto: '2:00 PM',
  notaHora: 'Llegada libre — desde las 2:00 PM en adelante',

  // --- Dónde -----------------------------------------------
  lugar: 'Finca Palma Azul',
  ubicacion: 'Nocaima · Sector Cocunche',
  distancia: 'A 30 minutos de Nocaima',

  // Coordenadas exactas de la finca. De aquí salen los tres botones de
  // navegación, así que apuntan al punto real y no a un pueblo cercano.
  coordenadas: { lat: 5.068736, lng: -74.419496 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5.068736%2C-74.419496',
  wazeUrl: 'https://waze.com/ul?ll=5.068736%2C-74.419496&navigate=yes',

  /** Mapa incrustado, en vista satelital. */
  mapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4714.2065352890995!2d-74.41949612432329!3d5.068736238355683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4091cfa8f86f7b%3A0xe332c1c10f59b7d5!2sPalma%20Azul!5e1!3m2!1ses-419!2sco!4v1785346695991!5m2!1ses-419!2sco',

  // --- Cupos -----------------------------------------------
  cupoMaximo: 30,
  camas: 14,

  /**
   * 👇 EL CONTADOR DE CONFIRMADOS
   * Sube este número a mano cada vez que te confirmen por WhatsApp.
   * Es el único valor que vas a estar editando seguido.
   */
  confirmados: 15,

  // --- Confirmación por WhatsApp ---------------------------
  whatsapp: {
    // Con indicativo de Colombia (57) y sin signos.
    numero: '573224395306',

    /**
     * Texto que llega prellenado al chat.
     *
     * Termina en "Nombre: " a propósito: WhatsApp deja el cursor al
     * final del mensaje, así que la persona solo escribe y envía. Sin
     * este campo llegan confirmaciones de números desconocidos.
     */
    mensaje: '¡Hola! Confirmo mi asistencia a La Finca del Año IV 🌴 (8 de agosto)\n\nNombre: ',
  },
} as const;

/** Link de WhatsApp con el mensaje ya escrito. */
export const whatsappUrl = `https://wa.me/${EVENTO.whatsapp.numero}?text=${encodeURIComponent(
  EVENTO.whatsapp.mensaje,
)}`;

/** Cupos que todavía quedan libres. */
export const cuposRestantes = Math.max(0, EVENTO.cupoMaximo - EVENTO.confirmados);

/** Porcentaje de ocupación, para la barra de progreso. */
export const porcentajeOcupado = Math.min(
  100,
  Math.round((EVENTO.confirmados / EVENTO.cupoMaximo) * 100),
);
