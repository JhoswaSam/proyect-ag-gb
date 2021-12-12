import { Usuario } from "./usuario";
import { Balon } from './balon';

export interface Administrador {
  id: number;
  nombre: string;
  apellido: string;
  tieneUsuario: Usuario;
  balons: Balon[];
}
