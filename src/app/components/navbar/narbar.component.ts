import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthService } from '@auth0/auth0-angular';
import { carService } from '../../service/car.service';
import { Balon } from '../../interface/balon';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit{
  constructor(
    public auth: AuthService,
    private serviceItem: carService
  ){  }
  ngOnInit(){
  }
  Items: Balon[] = this.serviceItem.Items;
  // Section for autentication

  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }
}
