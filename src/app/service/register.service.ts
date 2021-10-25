import { Injectable } from "@angular/core";
import { Register } from "../interface/register";

@Injectable()
export class registerService{
  _registros: Register[] = []
  get registros(): Register[]{
    return this._registros;
  }

  agregar(nuevoR : Register):void{
    this.registros.push(nuevoR);
  }

}
