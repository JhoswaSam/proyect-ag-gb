import { Person } from './person';
import { Balon } from './balon';
import { Accion } from './accion';

export interface Register{
  id: number,
  fechaEntrega: string|undefined, // 1 dia maximo despues de hacer le pedido
  fechaDevolucion: string|undefined, // 30 dias maximo despues de el pedido
  balons: Balon[]|null,
  perteneceCliente: Person|null,
  tieneAccion: Accion|null,
}
