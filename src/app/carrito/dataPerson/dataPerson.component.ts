import { Component, OnInit } from '@angular/core';
import { Person } from '../../interface/person';
import { Register } from '../../interface/register';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-dataPerson',
  templateUrl: './dataPerson.component.html',
})
export class DataPersonComponent implements OnInit {

  constructor(  ) { }

  ngOnInit(): void {
  }

  nuevaP : Person = {
    id: 0,
    nombre: "",
    apellidoS: "",
    dni: "",
    celular: "",
    domicilio: "",
    fechaNacimiento: ""
    // registros: Register[]
  }
  // solicitud : Register = {
  //   id: "R002",
  //   ball: this.nuevoB,
  //   cliente: this.nuevaP,
  //   observaciones: "NINGUNA",
  //   fechaEntrega: "10-11-2021",
  //   fechaDevolucion: "12-11-2021"
  // }

  newPerson():void {

  }
}
