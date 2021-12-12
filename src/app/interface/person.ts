import { Register } from './register';
export interface Person{
  id: number;
  nombre: string;
  apellidoS: string;
  dni: string;
  celular: string;
  domicilio: string;
  fechaNacimiento: string;
  // registros: Register[];
}
