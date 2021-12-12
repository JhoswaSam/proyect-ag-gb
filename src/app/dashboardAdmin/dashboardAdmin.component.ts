import { Component, OnInit } from "@angular/core";
import { AuthService } from '@auth0/auth0-angular';
import { userService } from '../service/user.service';


@Component({
  selector: "app-dashboardAdmin",
  templateUrl: "./dashboardAdmin.component.html",
})
export class DashBoardAdminComponent implements OnInit{
  constructor(
    public auth: AuthService,
    public user: userService
  ){  }

  ngOnInit(){
    // this.user.DatosUsuario()
    // console.log(this.auth.user$.toPromise().then(resolve =>{return resolve?.nickname}))
  }

  // get data_user(){
  //   return this.user.user
  // }

  // access_data(){
  //   return new Promise((resolve)=>{resolve(this.user.user)})
  // }

  Logout(){
    this.auth.logout();
  }
}
