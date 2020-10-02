import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component'
import { AuthGuard } from './core/guards/authguard.guard';
const routes: Routes = [
  {
    path:'',
    component : DefaultComponent
   },
   {
    path:'auth',
    loadChildren : ()=>import('./authentication/authentication.module').then(m=> m.AuthenticationModule)
  },
  {
    path:'home',
    loadChildren : ()=>import('../app/home/home.module').then(m=> m.HomeModule),
    canActivate:[AuthGuard]
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
