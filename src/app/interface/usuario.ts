import { Administrador } from "./administrador";

export interface Usuario {
  id: number;
  login: string;
  password: string;
  administrador: Administrador;
}
