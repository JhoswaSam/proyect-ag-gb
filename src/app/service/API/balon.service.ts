import { Injectable } from '@angular/core';
import { Balon } from '../../interface/balon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalonService {

  private url: string ="http://localhost:8080/api/balon";

  constructor(private http:HttpClient) { }

  public listaBalones: Balon[] = [];

  listarBalones(){
    this.http.get<Balon[]>(this.url)
    .subscribe(resp=>{
      this.listaBalones = resp;
    });
  }

  agregarBalon(balon: Balon){
    this.http.post(this.url,balon).subscribe();
  }

  eliminarBalon(id:number){
    this.http.delete(this.url+"/"+id).subscribe();
  }

  actualizarBalon(balon:Balon,id :number){
    this.http.put(this.url+"/"+id,balon).subscribe();
  }

}
