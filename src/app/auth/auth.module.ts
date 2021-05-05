import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';


import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
