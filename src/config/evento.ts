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
  // La fiesta son DOS días: viernes 7 y sábado 8 de agosto.
  //
  // Formato ISO con zona horaria de Colombia (-05:00).
  // De `fechaISO` sale la cuenta regresiva: apunta al arranque, o sea
  // el viernes a las 2:00 PM.
  fechaISO: '2026-08-07T14:00:00-05:00',
  // Cierre real (la salida del domingo). No se muestra en ningún lado:
  // está acá para el día que se genere el archivo de calendario.
  fechaFinISO: '2026-08-09T11:00:00-05:00',

  /**
   * Los dos días, para el bloque de fecha del hero.
   * `rotulo` va arriba en pequeño y `numero` grande debajo.
   */
  dias: [
    { rotulo: 'Vie', numero: '07' },
    { rotulo: 'Sáb', numero: '08' },
  ],
  mesTexto: 'Agosto 2026',

  /** Versión en prosa, para el título del navegador y la preview del link. */
  fechaTexto: 'Viernes 7 y Sábado 8 de agosto de 2026',
  /** Versión sin el mes, para la tarjeta "Cuándo" y el pie de página. */
  fechaBreve: 'Viernes 7 y Sábado 8',

  // Se duerme viernes y sábado. En la página solo se muestran los dos
  // días de fiesta (el domingo es solo la salida), así que va "2 días,
  // 2 noches" a propósito.
  duracionTexto: '2 días, 2 noches',
  horaTexto: '2:00 PM',
  notaHora: 'Llegada libre — desde las 2:00 PM del viernes',

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
  confirmados: 21,

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
    mensaje:
      '¡Hola! Confirmo mi asistencia a La Finca del Año IV 🌴 (7 y 8 de agosto)\n\nNombre: ',
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
