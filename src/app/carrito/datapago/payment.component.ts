import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../service/API/registro.service';
import { Register } from '../../interface/register';
import { carService } from '../../service/car.service';
import { Balon } from '../../interface/balon';
import { ClienteService } from '../../service/API/cliente.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private registerService: RegistroService,
    private itemService: carService,
    private clientService: ClienteService
  ) { }

  ngOnInit(): void {  }

  today = Date.now();


  fechaActual= this.datePipe.transform(this.today,"yyyy-MM-dd");
  fechaEntrega = this.datePipe.transform(this.today+86400000,"yyyy-MM-dd")
  fechaDevolucion = this.datePipe.transform(this.today+2592000000,"yyyy-MM-dd");

  Items: Balon[] = JSON.parse(localStorage.getItem("car")!);

  public registroNew: Register ={
    id:0,
    fechaEntrega: this.fechaEntrega?.toString(),
    fechaDevolucion: this.fechaDevolucion?.toString(),
    balons:this.Items,
    perteneceCliente: null,
    tieneAccion: {
      "id":5,
      "nombre":"Delivery"
    }
  }

  addRegister(){
    const dni = localStorage.getItem("DNI")
    this.clientService.buscarCliente(dni).then(value =>{
      this.registroNew.perteneceCliente =  value
      this.registerService.agregarRegistro(this.registroNew);
      localStorage.removeItem("DNI")
      localStorage.removeItem("car")
    })
  }
}
