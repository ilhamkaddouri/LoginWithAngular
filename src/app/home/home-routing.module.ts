import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepComponent } from './homep/homep.component';

const routes: Routes = [
  {path:'',component:HomepComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
