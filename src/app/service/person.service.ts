import { Injectable } from "@angular/core";
import { Person } from "../interface/person";

@Injectable()
export class personService{

  _personas: Person[] = [
    {id: Math.round(Math.random() * ( 999 - 100 )+100).toString(), nombre: "Jhoswa",apellidoS: "Samanez Ccoscco", DNI:"12345678",celular: "999 999 999", region: "Cusco",provincia: "Cusco", direccion:"San Martin T-7"},
  ]


  // Base de datos de clientes
  get personas(): Person[]{
    return this._personas;
  }

  agregar(nuevaPersona : Person):void{
    this.personas.push(nuevaPersona);
  }

  eliminar():void{
    this._personas.pop();
  }

}
