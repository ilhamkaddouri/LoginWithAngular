import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component'
import { AppmaterialsModule } from 'src/app/appmaterials/appmaterials.module';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AppmaterialsModule,
    RouterModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
