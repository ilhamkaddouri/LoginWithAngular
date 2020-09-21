import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component'
import {LoginComponent} from './modules/authentication/authentication/login/login.component'
const routes: Routes = [
  {
    path:'',
    component : DefaultComponent
   },
   {
    path:'login',
    component : LoginComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
