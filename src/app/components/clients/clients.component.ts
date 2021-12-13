import { Component, OnInit } from "@angular/core";
import { ClienteService } from '../../service/API/cliente.service';

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
})
export class ClientsComponent implements OnInit{

  constructor(private serviceCliente: ClienteService){
    this.serviceCliente.listarClientes();
  }

  ngOnInit(){  }

  get lista(){
    return this.serviceCliente.listaCliente;
  }

  eliminarCliente(id: number){
    this.serviceCliente.eliminarCliente(id).then(value =>{this.serviceCliente.listarClientes();});
  }

  actualizarCliente(){
    console.log("ACTUALIZADO");
  }

}
