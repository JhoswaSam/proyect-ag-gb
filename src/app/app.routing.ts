import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/narbar.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
  {path: '',
  component: NavbarComponent},
  {path: 'LOGIN',
  component: LoginComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
