import { Administrador } from "./administrador";
import { Estado } from "./estado";
import { Register } from './register';

export interface Balon {
  id: number;
  capacidad: string;
  perteneceAdministrador: Administrador|null;
  tieneEstado: Estado|null;
}
