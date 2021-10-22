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
    DatatableComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
