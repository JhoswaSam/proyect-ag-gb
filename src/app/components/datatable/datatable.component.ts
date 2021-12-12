import { Component, OnInit} from '@angular/core';
import { BalonService } from '../../service/API/balon.service';
import { Balon } from '../../interface/balon';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
})
export class DatatableComponent implements OnInit{

  constructor(private serviceBalon :BalonService ){
    this.serviceBalon.listarBalones();
  }

  ngOnInit(): void{
  }

  public balonNuevo: Balon = {
    id: 0,
    capacidad: ""
  }

  get lista() {
    return this.serviceBalon.listaBalones;
  }

  crearBalon(){
    this.serviceBalon.agregarBalon(this.balonNuevo);
  }

  eliminarBalon(id:number){
    this.serviceBalon.eliminarBalon(id);
  }

  actualizarBalon(capacidad: string,id: string){

    this.balonNuevo.id = Number(id);
    this.balonNuevo.capacidad = capacidad;
    this.serviceBalon.actualizarBalon(this.balonNuevo,Number(id))
  }

}
