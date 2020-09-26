import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component'
import {LoginComponent} from './modules/authentication/authentication/login/login.component'
import {LoginsuccesComponent} from './modules/authentication/authentication/loginsucces/loginsucces.component'
const routes: Routes = [
  {
    path:'',
    component : DefaultComponent
   },
   {
    path:'loginuser',
    component : LoginComponent
   },
   {
    path:'home',
    component : LoginsuccesComponent
   }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
