import { Component, OnInit } from "@angular/core";
import { registerService } from '../../service/register.service';
import { Register } from '../../interface/register';

@Component({
  selector: "app-record",
  templateUrl: "./record.component.html",
})
export class RecordComponent implements OnInit{
  constructor(
    private historial: registerService
  ){

  }
  ngOnInit(){

  }
  solicitudes: Register[] = this.historial.registros;


}
