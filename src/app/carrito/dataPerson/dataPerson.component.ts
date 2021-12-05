import { Component, OnInit } from '@angular/core';
import { personService } from '../../service/person.service';
import { Person } from '../../interface/person';
import { Ball } from '../../interface/balls';
import { requestService } from '../../service/request.service';
import { Register } from '../../interface/register';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-dataPerson',
  templateUrl: './dataPerson.component.html',
})
export class DataPersonComponent implements OnInit {

  constructor(
    private registerPerson: personService,
    private requestN : requestService
  ) { }

  ngOnInit(): void {
  }

  // Data for defaul


  nuevaP : Person = {
    id: "002",
    nombre: "",
    apellidoS: "",
    DNI:"",
    celular: "",
    region: "",
    provincia: "",
    direccion:""
  }

  nuevoB : Ball = {
    id: "001",
    tamanio: "10",
    estado: "Disponible"
  }

  solicitud : Register = {
    id: "R002",
    ball: this.nuevoB,
    cliente: this.nuevaP,
    observaciones: "NINGUNA",
    fechaEntrega: "10-11-2021",
    fechaDevolucion: "12-11-2021"
  }

  newPerson():void {
    this.registerPerson.agregar(this.nuevaP)
    this.requestN.agregar(this.solicitud)
    this.nuevaP = {
      id: "",
      nombre: "",
      apellidoS: "",
      DNI:"",
      celular: "",
      region: "",
      provincia: "",
      direccion:""
    }
  }
}
