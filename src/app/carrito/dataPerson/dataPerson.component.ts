import { Component, OnInit } from '@angular/core';
import { Person } from '../../interface/person';
import { ClienteService } from '../../service/API/cliente.service';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-dataPerson',
  templateUrl: './dataPerson.component.html',
})
export class DataPersonComponent implements OnInit {

  constructor(
    private personService: ClienteService,
    private route: Router
  ) { }

  ngOnInit(): void { }

  public nuevaP : Person = {
    id: 0,
    nombre: "",
    apellidos: "",
    dni: "",
    celular: "",
    domicilio: "",
    fechaNacimiento: ""
  }

  addClient(){
    this.route.navigate(["/payment"]);
    localStorage.setItem("DNI",this.nuevaP.dni)
    this.personService.agregarCliente(this.nuevaP);
  }
}
