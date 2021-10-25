import { Component, OnInit } from "@angular/core";
import { AuthService, AuthModule } from '@auth0/auth0-angular';


@Component({
  selector: "app-dashboardAdmin",
  templateUrl: "./dashboardAdmin.component.html",
})
export class DashBoardAdminComponent implements OnInit{
  constructor(public auth: AuthService){

  }
  ngOnInit(){

  }
  Logout(){
    this.auth.logout();

  }


}
