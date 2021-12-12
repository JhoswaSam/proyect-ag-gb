import { Component, OnInit } from '@angular/core';
import { Balon } from '../interface/balon';
import { BalonService } from '../service/API/balon.service';
import { carService } from '../service/car.service';

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
})
export class RequestComponent implements OnInit{

  constructor(
    private serviceBalon: BalonService,
    private serviceItem: carService
    ){
    this.serviceBalon.listarBalones();
  }

  ngOnInit(): void{  }

  get lista(){
    return this.serviceBalon.listaBalones;
  }

  addCarItem(item : Balon, $event: MouseEvent):void{
    ($event.target as HTMLButtonElement).disabled = true;
    this.serviceItem.agregarItem(item);
  }
}
