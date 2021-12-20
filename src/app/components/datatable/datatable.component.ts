import { Component, OnInit} from '@angular/core';
import { BalonService } from '../../service/API/balon.service';
import { Balon } from '../../interface/balon';
import { AccionService } from '../../service/API/accion.service';
import { EstadoService } from '../../service/API/estado.service';
import { Estado } from '../../interface/estado';

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
    capacidad: "",
    tieneEstado: null,
    perteneceAdministrador: null,
    perteneceRegistro: null
  }
  public idEstado!: number;

  get lista() {
    return this.serviceBalon.listaBalones;
  }

  get listaAcciones(){
    return this.serviceEstado.listaEstado;
  }


  crearBalon(){
    this.serviceEstado.buscarEstado(this.idEstado).then(value =>{
      console.log(value)
      this.balonNuevo.tieneEstado = value
      console.log(this.balonNuevo)
      this.serviceBalon.agregarBalon(this.balonNuevo).then(value => {this.serviceBalon.listarBalones();});
      this.balonNuevo = {
        id: 0,
        capacidad: "",
        tieneEstado: null,
        perteneceAdministrador: null,
        perteneceRegistro: null
      }
    });
  }

  eliminarBalon(id:number){
    console.log(id)
    this.serviceBalon.eliminarBalon(id).then(value => {this.serviceBalon.listarBalones();});
  }

  actualizarBalon(capacidad: string,id: string){
    this.balonNuevo.id = Number(id);
    this.balonNuevo.capacidad = capacidad;
    this.serviceEstado.buscarEstado(this.idEstado).then(value =>{
      this.balonNuevo.tieneEstado = value;
      this.serviceBalon.actualizarBalon(this.balonNuevo,Number(id)).then(value=>{this.serviceBalon.listarBalones();})
      this.balonNuevo = {
        id: 0,
        capacidad: "",
        tieneEstado: null,
        perteneceAdministrador: null,
        perteneceRegistro: null
      }
    })
    // this.serviceBalon.actualizarBalon(this.balonNuevo,Number(id)).then(value=>{this.serviceBalon.listarBalones();})
  }

}
