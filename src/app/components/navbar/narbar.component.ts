import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit{
  constructor(public auth: AuthService){

  }
  ngOnInit(){
  }

  // Section for autentication

  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }
}
