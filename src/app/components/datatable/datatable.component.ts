
import { Component, OnInit} from '@angular/core';


import { Ball } from '../../interface/balls';
import { datatableService } from "../../service/datatable.service";



@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
})
export class DatatableComponent implements OnInit{

  constructor(
    private nuevoBService: datatableService
  ){ }

  ngOnInit(): void{ }

  balones: Ball[] = this.nuevoBService.balones;

  nuevoB: Ball = {
    id: Math.round(Math.random() * ( 999 - 100 )+100).toString(),
    tamanio: "",
    estado: ""
  };


  newBall(): void{
    this.nuevoBService.agregar(this.nuevoB);
    this.nuevoB = {
      id: "",
      tamanio: "",
      estado: ""
    }
  }

  deleteBall(){
    this.nuevoBService.eliminar();
  }

}
