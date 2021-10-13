import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styles: [
  ]
})


export class DatatableComponent {
  constructor(){}
}
  




/*
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;

implements OnDestroy, OnInit

  constructor(){}

//USO DE API

  constructor(private http: HttpClient) { }

//importamos los datos de pruba de la página de abajo API
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    .subscribe((res: any) => {
      this.data = res.data;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
*/