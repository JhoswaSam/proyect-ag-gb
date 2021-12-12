import { Component, OnInit } from '@angular/core';
import { carService } from '../../service/car.service';
import { Balon } from '../../interface/balon';

@Component({
  selector: 'app-carList',
  templateUrl: './carList.component.html',
})
export class CarListComponent implements OnInit {

  constructor(private itemService: carService) { }

  ngOnInit(): void {
  }

  Items: Balon[] = this.itemService.Items;

  removeItem(id: number){
    this.itemService.eliminar(id);
  }

}
