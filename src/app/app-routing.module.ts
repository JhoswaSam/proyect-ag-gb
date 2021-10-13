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


const routes = [
  {path: '', component: IndexComponent },
  {path: 'about',  component: AboutComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'list',  component: ListBComponent},
  {path: 'error',  component: ErrorComponent},
  {path: 'contact',  component: ContactComponent},
  {path: 'admin',  component: DashBoardAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
