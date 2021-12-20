
import { Injectable, OnInit } from '@angular/core';
import { Balon } from '../interface/balon';

@Injectable()
export class carService implements OnInit{

  _Items : Balon[] = [];

  constructor(  ){  }
  ngOnInit(): void{  }

  get Items(): Balon[]{
    return this._Items;
  }

  agregarItem(Item:Balon){
    this.Items.push(Item);
  }

  private buscarItem(id: number){
    for (let index = 0; index < this._Items.length; index++) {
      if(this._Items[index].id == id){return index}
    }return -1
  }

  eliminar(id:number){
    let posicion = this.buscarItem(id);
    if(!(posicion == -1)){
      this._Items.splice(posicion,1);
    }
  }

}
