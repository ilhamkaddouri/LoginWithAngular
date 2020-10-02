import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/authguard.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HeadersInterceptor} from './interceptors/headers.interceptor'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  providers : [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true
  }
]
})
export class CoreModule { }
