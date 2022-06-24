import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CarouselModule } from 'primeng/carousel';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponentComponent } from '../navbar/navbar-component/navbar-component.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    HomeComponentComponent,
    //NavbarComponentComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    AccordionModule,
    BrowserModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    //NavbarModule
  ],
  exports:[
    HomeComponentComponent
  ]
})
export class HomeModule { }
