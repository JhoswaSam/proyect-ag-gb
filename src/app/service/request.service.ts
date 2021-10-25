import { Injectable } from "@angular/core";
import { Register } from '../interface/register';
import { Ball } from '../interface/balls';
import { Person } from '../interface/person';

@Injectable()
export class requestService{

  _solicitudes: Register[] = [
    {id: "001",
    ball: {id:"B001",tamanio: "10", estado: "disponible"},
    cliente: {id: "C001", nombre: "Jhoswa",apellidoS: "Samanez Ccoscco", DNI:"12345678",celular: "999 999 999", region: "Cusco",provincia: "Cusco", direccion:"San Martin T-7"},
    observaciones: "ninguna",
    fechaEntrega: "10-08-2021",
    fechaDevolucion: "12-08-2021"
  }
  ]

  get solicitudes(): Register[]{
    return this._solicitudes;
  }

  agregar(nuevoR : Register):void{
    this.solicitudes.push(nuevoR);
  }

  eliminar():void{
    this._solicitudes.pop();
  }

}
