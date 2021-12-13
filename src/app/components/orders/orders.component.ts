import { Component, OnInit } from "@angular/core";
import { Register } from "src/app/interface/register";
import { RegistroService } from '../../service/API/registro.service';

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
})
export class OrdersComponent implements OnInit{

  constructor(private serviceRegistros: RegistroService){
    this.serviceRegistros.listarRegistros();
  }

  ngOnInit():void{ }

  get lista(){
    return this.serviceRegistros.listaRegistros;
  }

  eliminarRegistro(id: number){
    this.serviceRegistros.eliminarRegistro(id).then(value=>{this.serviceRegistros.listarRegistros();});
  }
}
