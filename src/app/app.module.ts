import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Rutas*/
import {APP_ROUING} from './app.routes';

/*componentes*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
