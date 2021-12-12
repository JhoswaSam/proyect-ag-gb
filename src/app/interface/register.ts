import { Person } from './person';
import { Balon } from './balon';
import { Accion } from './accion';

export interface Register{
  id: number,
  fechaEntrega: string,
  fechaDevolucion: string
  balons: Balon[],
  perteneceCliente: Person,
  tieneAccion: Accion,
}
