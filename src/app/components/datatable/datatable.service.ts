import { Injectable } from "@angular/core";
import { Ball } from '../../interface/balls';

@Injectable()
export class datatableService{

  _balones: Ball[] = [
    {id: Math.round(Math.random() * ( 999 - 100 )+100).toString() ,tamanio: "10",estado: "Available"},
    {id: Math.round(Math.random() * ( 999 - 100 )+100).toString() ,tamanio: "8",estado: "Not available"},
    {id: Math.round(Math.random() * ( 999 - 100 )+100).toString() ,tamanio: "11",estado: "Not available"},
    {id: Math.round(Math.random() * ( 999 - 100 )+100).toString() ,tamanio: "9",estado: "Available"},
    {id: Math.round(Math.random() * ( 999 - 100 )+100).toString() ,tamanio: "8",estado: "In maintenance"},
    {id: Math.round(Math.random() * ( 999 - 100 )+100).toString() ,tamanio: "11",estado: "Not available"},
    {id: Math.round(Math.random() * ( 999 - 100 )+100).toString() ,tamanio: "10",estado: "In maintenance"}
  ]
  get balones(): Ball[]{
    return this._balones;
  }

  agregar(nuevoBall : Ball):void{
    this.balones.push(nuevoBall);
  }

  eliminar():void{
    this._balones.pop();
  }

}
