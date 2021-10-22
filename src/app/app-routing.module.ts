import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ListBComponent } from './listB/listB.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { DashBoardAdminComponent } from './dashboardAdmin/dashboardAdmin.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { RequestComponent } from './request/request.component';
import { AuthGuard } from '@auth0/auth0-angular';


const routes = [

  {path: '', component: IndexComponent },
  {path: 'about',  component: AboutComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'list',  component: ListBComponent},

  {path: 'contact',  component: ContactComponent},
  {path: 'admin',  component: DashBoardAdminComponent, canActivate: [AuthGuard],
  children: [
    {path: 'table',  component: DatatableComponent}
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
