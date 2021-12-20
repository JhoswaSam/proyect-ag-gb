import { Component, OnInit } from "@angular/core";
import { ClienteService } from '../../service/API/cliente.service';
import { Person } from '../../interface/person';

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
})
export class ClientsComponent implements OnInit{

  constructor(private serviceCliente: ClienteService){
    this.serviceCliente.listarClientes();
  }

  public clientUpdate: Person = {
    id: 0,
    nombre: "",
    apellidos: "",
    celular: "",
    dni:"",
    domicilio:"",
    fechaNacimiento:""
  }

  ngOnInit(){  }

  get lista(){
    return this.serviceCliente.listaCliente;
  }

  eliminarCliente(id: number){
    this.serviceCliente.eliminarCliente(id).then(value =>{this.serviceCliente.listarClientes();});
  }

  data(id:number){
    this.serviceCliente.buscarClienteID(id).then(value =>{
      this.clientUpdate = value
    })
  }

  actualizarCliente(id: number){
    this.serviceCliente.actualizarCliente(this.clientUpdate,id).then(value =>{
      this.serviceCliente.listarClientes();
    })
  }
}
