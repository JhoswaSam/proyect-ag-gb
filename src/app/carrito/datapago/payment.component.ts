import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../service/API/registro.service';
import { Register } from '../../interface/register';
import { carService } from '../../service/car.service';
import { Balon } from '../../interface/balon';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private registerService: RegistroService,
    private itemService: carService
  ) { }

  ngOnInit(): void {  }

  today = Date.now();

  fechaActual= this.datePipe.transform(this.today,"yyyy-MM-dd");

  Items: Balon[] = this.itemService.Items;

  public registroNew: Register ={
    id:0,
    fechaEntrega: this.fechaActual?.toString(),
    fechaDevolucion: this.fechaActual?.toString(),
    balons:this.Items
  }

  addRegister(){
    console.log(this.registroNew)
    this.registerService.agregarRegistro(this.registroNew);
  }
}
