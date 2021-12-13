import { Injectable } from '@angular/core';
import { Register } from '../../interface/register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url : string = "http://localhost:8080/api/registro"

  constructor(private http: HttpClient) { }

  public listaRegistros: Register[]=[];

  listarRegistros(){
    this.http.get<Register[]>(this.url)
    .subscribe(resp => {
      this.listaRegistros = resp;
    });
  }

  agregarRegistro(registro: Register){
    this.http.post(this.url,registro).subscribe();
  }

  eliminarRegistro(id:Number){
    const promesa = this.http.delete<any>(this.url+"/"+id).toPromise();
    return promesa.then(resp => {return true});
  }

  actualizarRegistro(registro: Register, id: number){
    const promesa = this.http.put<any>(this.url+"/"+id,registro).toPromise();
    return promesa.then(resp => {return true});
  }

}
