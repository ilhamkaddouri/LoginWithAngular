import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepComponent } from './homep/homep.component';
import { AuthenticationModule } from '../authentication/authentication.module';


@NgModule({
  declarations: [HomepComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AuthenticationModule
  ]
})
export class HomeModule { }
