import { Person } from './person';
import { Balon } from './balon';
import { Accion } from './accion';

export interface Register{
  id: number,
  fechaEntrega: string|undefined,
  fechaDevolucion: string|undefined,
  balons: Balon[]|null,
  perteneceCliente: Person|null,
  tieneAccion: Accion|null,
}
