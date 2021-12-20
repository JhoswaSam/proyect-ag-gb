import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../interface/person';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = "http://localhost:8080/api/cliente";

  constructor(private http: HttpClient) { }

  public listaCliente: Person[] = [];

  listarClientes(){
    this.http.get<Person[]>(this.url)
    .subscribe(resp => {
      this.listaCliente = resp;
    });
  }

  agregarCliente(cliente: Person){
    this.http.post(this.url,cliente).subscribe();
  }

  eliminarCliente(id:number){
    const promesa = this.http.delete<any>(this.url+"/"+id).toPromise();
    return promesa.then(resp => {return true});
  }

  actualizarCliente(cliente: Person, id: number){
    const promesa = this.http.put<any>(this.url+"/"+id,cliente).toPromise();
    return promesa.then(resp => {return true});
  }

  buscarCliente(dni: string|null):Promise<Person>{
    if (dni == null) {
      return new Promise((resolve, reject)=>{ })
    }else{
      return this.http.get<Person>(this.url+"/get/"+dni).toPromise();
    }
  }

  buscarClienteID(id:number):Promise<Person>{
    return this.http.get<Person>(this.url+"/"+id).toPromise();
  }
}
