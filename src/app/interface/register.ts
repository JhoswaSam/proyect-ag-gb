import { Person } from './person';
import { Accion } from './accion';

export interface Register{
  id: number,
  fechaEntrega: string|undefined,
  fechaDevolucion: string|undefined,
  perteneceCliente: Person|null,
  tieneAccion: Accion|null,
}
