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
    const promesa = this.http.post<any>(this.url,balon).toPromise();
    return promesa.then(resp => {return true});
    // this.http.post(this.url,balon).subscribe();
  }

  eliminarBalon(id:number){
    const promesa = this.http.delete<any>(this.url+"/"+id).toPromise();
    return promesa.then(resp => {return true});
    // this.http.delete(this.url+"/"+id).subscribe();
  }

  actualizarBalon(balon:Balon,id :number){
    const promesa = this.http.put<any>(this.url+"/"+id,balon).toPromise();
    return promesa.then(resp => {return true});
    // this.http.put(this.url+"/"+id,balon).subscribe();
  }
}
