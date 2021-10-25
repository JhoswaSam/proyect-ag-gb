import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { DashBoardAdminComponent } from './dashboardAdmin/dashboardAdmin.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { RequestComponent } from './request/request.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { RecordComponent } from './components/record/record.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DataPersonComponent } from './carrito/dataPerson/dataPerson.component';
import { CarListComponent } from './carrito/carritoList/carList.component';


const routes = [

  {path: '', component: IndexComponent },
  {path: 'about',  component: AboutComponent},
  {path: 'login',  component: LoginComponent},

  {path: 'contact',  component: ContactComponent},

  {path: 'cart',  component: CarListComponent},

  {path: 'data',  component: DataPersonComponent},


  {path: 'admin',  component: DashBoardAdminComponent, canActivate: [AuthGuard],
  children: [
    {path: 'inventory',  component: DatatableComponent},
    {path: 'orders',  component: OrdersComponent},
    {path: 'record',  component: RecordComponent},
    {path: 'contacts',  component: ContactsComponent},
    {path: 'clients',  component: ClientsComponent}
  ]},
  {path: 'peliculas',  component: PeliculasComponent},
  {path: 'request',  component: RequestComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
