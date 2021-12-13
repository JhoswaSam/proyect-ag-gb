import { Component, OnInit} from '@angular/core';
import { BalonService } from '../../service/API/balon.service';
import { Balon } from '../../interface/balon';
import { AccionService } from '../../service/API/accion.service';
import { EstadoService } from '../../service/API/estado.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
})
export class DatatableComponent implements OnInit{

  constructor(
    private serviceBalon : BalonService,
    private serviceEstado: EstadoService
  ){
    this.serviceBalon.listarBalones();
    this.serviceEstado.listarEstados();
  }

  ngOnInit(): void{  }

  public balonNuevo: Balon = {
    id: 0,
    capacidad: ""
  }

  get lista() {
    return this.serviceBalon.listaBalones;
  }

  get listaAcciones(){
    return this.serviceEstado.listaEstado;
  }


  crearBalon(){
    this.serviceBalon.agregarBalon(this.balonNuevo).then(value => {this.serviceBalon.listarBalones();});
  }

  eliminarBalon(id:number){
    this.serviceBalon.eliminarBalon(id).then(value => {this.serviceBalon.listarBalones();});
  }

  actualizarBalon(capacidad: string,id: string){
    this.balonNuevo.id = Number(id);
    this.balonNuevo.capacidad = capacidad;
    this.serviceBalon.actualizarBalon(this.balonNuevo,Number(id))
  }

}
