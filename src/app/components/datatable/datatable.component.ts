import { Component, OnInit } from '@angular/core';

interface Ball{
  id: string,
  tamanio: string,
  estado: string
}



@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
})
export class DatatableComponent implements OnInit{
  Ball1: Ball = {id: "001",tamanio: "10",estado: "Disponible"};
  Ball2: Ball = {id: "002",tamanio: "8",estado: "No Disponible"};
  Ball3: Ball = {id: "003",tamanio: "11",estado: "activo"};
  Ball4: Ball = {id: "004",tamanio: "9",estado: "activo"};
  Ball5: Ball = {id: "005",tamanio: "8",estado: "En Mantenimiento"};
  Ball6: Ball = {id: "006",tamanio: "11",estado: "activo"};
  Ball7: Ball = {id: "007",tamanio: "10",estado: "activo"};

  Almacen: Ball[] = [this.Ball1,this.Ball2,this.Ball3,this.Ball4,this.Ball5,this.Ball6,this.Ball7];
  constructor(){ }
  ngOnInit(): void{ }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  nuevoB: Ball = {id: "",tamanio: "",estado: ""};
  newBall(){
    this.showModal = !this.showModal;
    if(this.nuevoB.tamanio.trim().length == 0){
      alert("tamaño no valido")
      return
    }else{
      this.Almacen.push(this.nuevoB);
      alert(this.nuevoB);
    }

  }

}
