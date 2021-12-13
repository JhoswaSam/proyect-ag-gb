import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accion } from '../../interface/accion';

@Injectable({
  providedIn: 'root'
})
export class AccionService {

  private url: string= "http://localhost:8080/api/accion"

  constructor(private http: HttpClient) { }

  public listaAcciones: Accion[]=[]

  listarAcciones(){
    this.http.get<Accion[]>(this.url)
    .subscribe(resp => {
      this.listaAcciones = resp;
    });
  }
}
