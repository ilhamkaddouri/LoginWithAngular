import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component'
import { AppmaterialsModule } from 'src/app/appmaterials/appmaterials.module';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationService } from '../authentication/login/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import {LoginsuccesComponent} from './loginsucces/loginsucces.component'
@NgModule({
  declarations: [LoginComponent,LoginsuccesComponent],
  imports: [
    CommonModule,
    AppmaterialsModule,
    RouterModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[AuthenticationService]
})
export class AuthenticationModule { }
