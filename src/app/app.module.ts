import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import { NavbarModule } from './navbar/navbar.module';

import { MenuItemContent, MenuModule } from 'primeng/menu';

import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import { ServicesComponent } from './services/services.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PanelMenuModule} from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { HomeModule } from './home/home.module';
import { ProductosModule } from './paginas/productos/productos.module';
import { ReactiveFormsModule } from '@angular/forms';

//firebase
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { LoginModule } from './auth/login/login.module';



@NgModule({
  declarations: [
    AppComponent,
    

    //NavbarComponentComponent,
    //HomeComponentComponent,
  
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,

    NavbarModule,
    HomeModule,
    LoginModule,
    ProductosModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ButtonModule,
    PanelMenuModule,
    FormsModule,
    MenubarModule,
    MenuModule,
    AccordionModule,
    ReactiveFormsModule,
    AngularFireAuthModule
    
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

