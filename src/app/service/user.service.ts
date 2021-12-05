//import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";


@Injectable()
export class userService implements OnInit{
  constructor(
    public auth: AuthService,
    //private http: HttpClient
  ){
  }

  public user : any

  ngOnInit(): void{
  }


  DatosUsuario(){


    this.auth.getAccessTokenSilently().toPromise()
      .then(respuesta=>{
        fetch(`https://dev-4qlklexx.us.auth0.com/userinfo?access_token=${(respuesta)}`)
          .then( (respuest) =>{
            respuest.json().then( (datos) =>{
              this.user = datos;
            })
          })
      })
    /**
 *
       this.auth.getAccessTokenSilently().toPromise().then(respuesta => {
         this.http.get(`https://dev-4qlklexx.us.auth0.com/userinfo?access_token=${(respuesta)}`)
           .subscribe((respuesta: any) => {
             this.user = respuesta
           })
       })
       this.http.get(`https://dev-4qlklexx.us.auth0.com/userinfo?access_token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtNHFsa2xleHgudXMuYXV0aDAuY29tLyJ9..jAxwZsADXIyTPKP9.aDvkc3NZ3krPUMIQcjItbDfz4CqNL_o-CazXmj6PNZtmmp8uEfzRc4U4pYn9X5rfmcdZY344gEkfh2c9-4yEl6FsLZLjyMnvqFj5S6jcIZbK1mKi0Ka1f5Ju3DU2OAzUrSwEUeEDbtBWQRMi8EGJuf5Ct2PNUbqMRswLxXI6xl9eI8oxWEkrfIFZtdB2eVXdKx46aOcu6HtfS8kVYHlPN5I0Xk9hHAeWl7VJjI-03rGCnVUB_h44U7aTN1arvBsp3zU57qwcABYevdZPDS2xnVmLYyU1t4-hJG8dZUwBTUznsNFMgPPaj6BOu7heJtYUUTXLmifZTyjnnWvhHNBi3U9S48Kqcw.oUzYSzkNiUDUvTvCmxv_hg`)
           .subscribe((respuesta: any) => {
             console.log(respuesta)
           })
 */

  }
}
