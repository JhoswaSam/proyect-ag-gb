import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/narbar.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DashBoardAdminComponent } from './dashboardAdmin/dashboardAdmin.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HttpClientModule } from '@angular/common/http';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { RequestComponent } from './request/request.component';
import { FormsModule } from '@angular/forms';
import { RecordComponent } from './components/record/record.component';
import { ClientsComponent } from './components/clients/clients.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DataPersonComponent } from './carrito/dataPerson/dataPerson.component';
import { CarListComponent } from './carrito/carritoList/carList.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { userService } from './service/user.service';
import { carService } from './service/car.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    AboutComponent,
    ErrorComponent,
    LoginComponent,
    ContactComponent,
    DashBoardAdminComponent,
    DatatableComponent,
    PeliculasComponent,
    RequestComponent,
    RecordComponent,
    ClientsComponent,
    OrdersComponent,
    DataPersonComponent,
    CarListComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

      // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-4qlklexx.us.auth0.com',
      clientId: 'Hbm7iNSJ48x7PCq0vmLCyJRUxmUbUnpE',
      cacheLocation: "localstorage", // Guardar autentificacion
      useRefreshTokens: true // Modulo de actualizacion de token automatico
    }),
  ],
  providers: [userService, carService],
  bootstrap: [AppComponent]
})
export class AppModule { }
