import { Injectable } from "@angular/core";
import { Ball } from '../interface/balls';

@Injectable()
export class datatableService{
  static serie: number = 0;
  _balones: Ball[] = [
    {id: (datatableService.serie+=1).toString() ,tamanio: "10",estado: "Available"},
    {id: (datatableService.serie+=1).toString() ,tamanio: "8",estado: "Not available"},
    {id: (datatableService.serie+=1).toString() ,tamanio: "11",estado: "Not available"},
    {id: (datatableService.serie+=1).toString() ,tamanio: "9",estado: "Available"},
    {id: (datatableService.serie+=1).toString() ,tamanio: "8",estado: "In maintenance"},
    {id: (datatableService.serie+=1).toString() ,tamanio: "11",estado: "Not available"},
    {id: (datatableService.serie+=1).toString() ,tamanio: "10",estado: "In maintenance"}
  ]
  get balones(): Ball[]{
    return this._balones;
  }

  agregar(nuevoBall : Ball):void{
    this.balones.push(nuevoBall);
  }

  private buscar(id: string) {
    for(var i=0; i< this._balones.length ;i++){
      if(this._balones[i].id == id){ return i }
    }return -1
  }

  eliminar(id:string):void{
    let posicion = this.buscar(id);
    if(!(posicion == -1)){
      this._balones.splice(posicion,1);
    }
  }

}
