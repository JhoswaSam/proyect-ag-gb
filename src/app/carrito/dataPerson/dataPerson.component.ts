import { Component, OnInit } from '@angular/core';
import { Person } from '../../interface/person';
import { Register } from '../../interface/register';
import { ThrowStmt } from '@angular/compiler';
import { ClienteService } from '../../service/API/cliente.service';

@Component({
  selector: 'app-dataPerson',
  templateUrl: './dataPerson.component.html',
})
export class DataPersonComponent implements OnInit {

  constructor(private personService: ClienteService) { }

  ngOnInit(): void { }

  public nuevaP : Person = {
    id: 0,
    nombre: "",
    apellidos: "",
    dni: "",
    celular: "",
    domicilio: "",
    fechaNacimiento: "",
    registros: null
  }
  // solicitud : Register = {
  //   id: "R002",
  //   ball: this.nuevoB,
  //   cliente: this.nuevaP,
  //   observaciones: "NINGUNA",
  //   fechaEntrega: "10-11-2021",
  //   fechaDevolucion: "12-11-2021"
  // }

  addClient(){
    localStorage.setItem("DNI",this.nuevaP.dni)
    // this.personService.agregarCliente(this.nuevaP);
  }
}
