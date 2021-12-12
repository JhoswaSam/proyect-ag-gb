import { Register } from './register';
export interface Accion {
  id:        number;
  nombre:    string;
  registros: Register[];
}
