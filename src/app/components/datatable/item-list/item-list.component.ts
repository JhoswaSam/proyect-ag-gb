import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ball } from 'src/app/interface/balls';
import { datatableService } from 'src/app/service/datatable.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()  balon: Ball | undefined;

  @Output() remove = new EventEmitter<string>();

  constructor(
  private nuevoBService: datatableService
  ) { }

  ngOnInit(): void {
  }


  removeEmiter(){
    this.remove.emit(this.balon?.id);
    console.log(this.balon?.id);
  }

  deleteBall(id: string |undefined){
    if(id == undefined){
      console.log("error al encontar id")
    }else{
      console.log(this.balon);
      this.nuevoBService.eliminar(id);
    }
  }
}
