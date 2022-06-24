import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponentComponent } from 'src/app/navbar/navbar-component/navbar-component.component';


@NgModule({
  declarations: [
    LoginComponentComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MatGridListModule,
  ],
})
export class LoginModule { }
