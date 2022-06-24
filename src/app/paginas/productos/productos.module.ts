import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosCompComponent } from './productos-comp/productos-comp.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    ProductosCompComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    MatGridListModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule

    
  ]
})
export class ProductosModule {
  
}



