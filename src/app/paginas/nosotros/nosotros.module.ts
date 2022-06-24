import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotroscompComponent } from './nosotroscomp/nosotroscomp.component';
import { NosotrosCompComponent } from './nosotros-comp/nosotros-comp.component';



@NgModule({
  declarations: [
    NosotroscompComponent,
    NosotrosCompComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NosotrosModule { }
