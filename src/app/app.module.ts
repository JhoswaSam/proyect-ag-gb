import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/narbar.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ListBComponent } from './listB/listB.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DashBoardAdminComponent } from './dashboardAdmin/dashboardAdmin.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    AboutComponent,
    ListBComponent,
    ErrorComponent,
    LoginComponent,
    ContactComponent,
    DashBoardAdminComponent,
    DatatableComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-4qlklexx.us.auth0.com',
      clientId: 'Hbm7iNSJ48x7PCq0vmLCyJRUxmUbUnpE',
      cacheLocation: "localstorage", // Guardar autentificacion
      useRefreshTokens: true // Modulo de actualizacion de token automatico
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
