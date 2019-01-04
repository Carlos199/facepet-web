import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsuariosComponent} from './components/usuarios/usuarios.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUING = RouterModule.forRoot(APP_ROUTES);
