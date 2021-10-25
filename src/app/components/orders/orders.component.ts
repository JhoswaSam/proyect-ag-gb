import { Component, OnInit } from "@angular/core";
import { Register } from "src/app/interface/register";
import { requestService } from '../../service/request.service';

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
})
export class OrdersComponent implements OnInit{
  constructor(
    private nuevoOService: requestService){

  }
  ngOnInit():void{ }


  solicitudes: Register[] = this.nuevoOService.solicitudes;



  deleteO(){
    this.nuevoOService.eliminar();
  }
}
