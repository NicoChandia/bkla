import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

import {MegaMenuItem} from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    NavbarComponentComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule,
    MenubarModule,
    //InputTextModule,
    //BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
   DialogModule, //esto
    
  ],
  exports:[
   NavbarComponentComponent,
  ],
  
 
  
})
export class NavbarModule { }
