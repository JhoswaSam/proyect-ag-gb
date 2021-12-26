import { Component, OnInit } from "@angular/core";
import { Register } from "src/app/interface/register";
import { RegistroService } from '../../service/API/registro.service';
import { AccionService } from '../../service/API/accion.service';

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
})
export class OrdersComponent implements OnInit{

  constructor(
    private serviceRegistros: RegistroService,
    private serviceAccion: AccionService
  ){
    this.serviceRegistros.listarRegistros();
    this.serviceAccion.listarAcciones();
  }

  public reservaUpdate:Register={
    id: 0,
    fechaDevolucion: "",
    fechaEntrega:"",
    perteneceCliente: null,
    tieneAccion:null
  }

  public idAccion!: number;

  get listaAcciones(){
    return this.serviceAccion.listaAcciones;
  }

  ngOnInit():void{

  }

  get lista(){
    return this.serviceRegistros.listaRegistros;
  }

  eliminarRegistro(id: number){
    this.serviceRegistros.eliminarRegistro(id).then(value=>{this.serviceRegistros.listarRegistros();});
  }

  data(id: number){
    this.serviceRegistros.buscarRegistro(id).then(value=>{
      this.reservaUpdate = value
    })
  }

  actualizarOrden(id:number){
    this.serviceAccion.buscarAccion(this.idAccion).then(value=>{
      this.reservaUpdate.tieneAccion = value
      this.serviceRegistros.actualizarRegistro(this.reservaUpdate,id).then(value=>{this.serviceRegistros.listarRegistros();});
    })
  }
}
