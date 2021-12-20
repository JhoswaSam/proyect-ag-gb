import { Administrador } from "./administrador";
import { Estado } from "./estado";
import { Register } from './register';

export interface Balon {
  id: number;
  capacidad: string;
  perteneceAdministrador: Administrador|null;
  perteneceRegistro: Register|null;
  tieneEstado: Estado|null;
}
