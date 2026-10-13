/**
 * ============================================================
 *  LA FINCA DEL AÑO IV — recuerdo (/iv)
 * ------------------------------------------------------------
 *  Ya pasó. Se deja tal cual quedó para mostrar cómo son
 *  nuestras fincas; no hace falta volver a tocarlo.
 * ============================================================
 */
import type { Evento } from './evento';

export const FINCA_IV: Evento = {
  nombre: 'La Finca del Año',
  edicion: 'IV',
  tagline: 'Cuarta edición',
  carpetaFotos: 'iv',
  tema: 'iv',
  og: '/og-iv.jpg',

  fechaISO: '2026-08-07T14:00:00-05:00',
  fechaFinISO: '2026-08-09T11:00:00-05:00',
  dias: [
    { rotulo: 'Vie', numero: '07' },
    { rotulo: 'Sáb', numero: '08' },
  ],
  mesTexto: 'Agosto 2026',
  fechaTexto: 'Viernes 7 y Sábado 8 de agosto de 2026',
  fechaBreve: 'Viernes 7 y Sábado 8',
  duracionTexto: '2 días, 2 noches',
  horaTexto: '2:00 PM',
  notaHora: 'Llegada libre — desde las 2:00 PM del viernes',

  lugar: 'Finca Palma Azul',
  ubicacion: 'Nocaima · Sector Cocunche',
  distancia: 'A 30 minutos de Nocaima',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5.068736%2C-74.419496',
  wazeUrl: 'https://waze.com/ul?ll=5.068736%2C-74.419496&navigate=yes',
  mapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4714.2065352890995!2d-74.41949612432329!3d5.068736238355683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4091cfa8f86f7b%3A0xe332c1c10f59b7d5!2sPalma%20Azul!5e1!3m2!1ses-419!2sco!4v1785346695991!5m2!1ses-419!2sco',

  cupoMaximo: 30,
  dormir: '14 camas',
  confirmados: 21,

  whatsapp: {
    numero: '573224395306',
    mensaje:
      '¡Hola! Confirmo mi asistencia a La Finca del Año IV 🌴 (7 y 8 de agosto)\n\nNombre: ',
  },
};
