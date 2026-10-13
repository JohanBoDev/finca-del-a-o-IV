/**
 * ============================================================
 *  LA FINCA DEL AÑO V — la que viene
 * ------------------------------------------------------------
 *  Este es el archivo que vas a estar tocando. Cambias un valor,
 *  guardas, haces push y Vercel redespliega solo en ~30 segundos.
 * ============================================================
 */
import { navegacion, type Evento } from './evento';

// Plus code 3JM3+8V, Nocaima → coordenadas exactas de Casa Blanca.
const LAT = 5.083313;
const LNG = -74.395313;

export const FINCA_V: Evento = {
  // --- Identidad -------------------------------------------
  nombre: 'La Finca del Año',
  edicion: 'V',
  tagline: 'Quinta edición',
  carpetaFotos: 'v',
  tema: 'v',
  og: '/og.jpg',

  // --- Cuándo ----------------------------------------------
  // Sábado 14 a las 3:00 PM hasta el domingo 15 a las 5:00 PM.
  fechaISO: '2026-11-14T15:00:00-05:00',
  fechaFinISO: '2026-11-15T17:00:00-05:00',
  dias: [
    { rotulo: 'Sáb', numero: '14' },
    { rotulo: 'Dom', numero: '15' },
  ],
  mesTexto: 'Noviembre 2026',
  fechaTexto: 'Sábado 14 y Domingo 15 de noviembre de 2026',
  fechaBreve: 'Sábado 14 y Domingo 15',
  duracionTexto: '2 días, 1 noche',
  horaTexto: '3:00 PM',
  notaHora: 'Llegada desde las 3:00 PM del sábado · salida el domingo a las 5:00 PM',

  // --- Dónde -----------------------------------------------
  lugar: 'Finca Casa Blanca',
  ubicacion: 'Nocaima, Cundinamarca',
  distancia: 'A hora y media de Bogotá',
  ...navegacion(LAT, LNG),
  mapaEmbed: `https://maps.google.com/maps?q=${LAT},${LNG}&t=k&z=16&hl=es&output=embed`,

  // --- Cupos -----------------------------------------------
  cupoMaximo: 30,
  dormir: '4 habitaciones',

  /**
   * 👇 EL CONTADOR DE CONFIRMADOS
   * Súbelo a mano cada vez que te confirmen por WhatsApp.
   */
  confirmados: 12,

  // --- Confirmación por WhatsApp ---------------------------
  whatsapp: {
    numero: '573224395306',
    // Termina en "Nombre: " para que la persona solo escriba y envíe.
    mensaje:
      '¡Hola! Confirmo mi asistencia a La Finca del Año V 🌴 (14 y 15 de noviembre)\n\nNombre: ',
  },
};
