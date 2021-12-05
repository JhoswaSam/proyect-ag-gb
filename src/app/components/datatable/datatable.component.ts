
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
    id: (datatableService.serie+=1).toString() ,
    tamanio: "",
    estado: ""
  };


  newBall(): void{
    this.nuevoBService.agregar(this.nuevoB);
    this.nuevoB = {
      id: (datatableService.serie+=1).toString() ,
      tamanio: "",
      estado: ""
    }
  }

  deleteBall(id: string){
    this.nuevoBService.eliminar(id);
  }

  trackByFn(index: number , balon: Ball):string{
    return balon.id;
  }

}
