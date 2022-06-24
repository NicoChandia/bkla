import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './auth/login/login-component/login-component.component';

import { HomeComponentComponent } from './home/home-component/home-component.component';
import { NavbarComponentComponent } from './navbar/navbar-component/navbar-component.component';
import { ContactosCompComponent } from './paginas/contactos/contactos-comp/contactos-comp.component';
import { NosotrosCompComponent } from './paginas/nosotros/nosotros-comp/nosotros-comp.component';
import { ProductosCompComponent } from './paginas/productos/productos-comp/productos-comp.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'home', component: HomeComponentComponent},
  {path: 'nosotros', component: NosotrosCompComponent},
  {path: 'contactos', component: ContactosCompComponent},
  {path: 'productos', component: ProductosCompComponent},
  {path: 'login', component: LoginComponentComponent},  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
