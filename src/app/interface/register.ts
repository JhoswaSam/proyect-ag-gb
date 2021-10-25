import { Ball } from './balls';
import { Person } from './person';

export interface Register{
  id: string,
  ball: Ball,
  cliente: Person,
  observaciones: string,
  fechaEntrega: string,
  fechaDevolucion: string
}
