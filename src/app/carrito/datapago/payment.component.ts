import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../service/API/registro.service';
import { Register } from '../../interface/register';
import { carService } from '../../service/car.service';
import { Balon } from '../../interface/balon';
import { ClienteService } from '../../service/API/cliente.service';
import { BalonService } from '../../service/API/balon.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private registerService: RegistroService,
    private itemService: carService,
    private clientService: ClienteService,
    private balonService: BalonService
  ) { this.registerService.listarRegistros() }

  ngOnInit(): void { }

  today = Date.now();


  fechaActual= this.datePipe.transform(this.today,"yyyy-MM-dd");
  fechaEntrega = this.datePipe.transform(this.today+86400000,"yyyy-MM-dd")
  fechaDevolucion = this.datePipe.transform(this.today+2592000000,"yyyy-MM-dd");

  Items: Balon[] = this.itemService.Items;

  public registroNew: Register ={
    id:0,
    fechaEntrega: this.fechaEntrega?.toString(),
    fechaDevolucion: this.fechaDevolucion?.toString(),
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
      this.registerService.agregarRegistro(this.registroNew).then(value =>{
        this.Items.forEach(balon =>{
          this.balonService.buscarBalon(balon.id).then(value =>{
            let B = value;
            B.tieneEstado = {"id":5,"nombre":"Not available"}
            B.perteneceRegistro = this.registerService.listaRegistros[this.registerService.listaRegistros.length-1]
            this.balonService.actualizarBalon(B,B.id)
          })
        })
      });
      localStorage.removeItem("DNI")
    })
  }
}
