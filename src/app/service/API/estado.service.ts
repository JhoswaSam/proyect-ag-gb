import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from '../../interface/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private url: string = "http://localhost:8080/api/estado";

  constructor(private http: HttpClient) { }

  public listaEstado: Estado[]=[];
  public estadoBuscado: Estado|undefined;

  listarEstados(){
    this.http.get<Estado[]>(this.url)
    .subscribe(resp =>{
      this.listaEstado = resp;
    });
  }

  buscarEstado(id: number):Promise<Estado>{
    return this.http.get<Estado>(this.url+"/"+id).toPromise();
    // this.http.get<Estado>(this.url+"/"+id)
    // .subscribe(resp =>{
    //   // console.log(resp)
    //   this.estadoBuscado = resp;
    // });
    // return this.estadoBuscado;
  }

}
