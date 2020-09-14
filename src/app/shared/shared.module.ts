import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppmaterialsModule } from '../appmaterials/appmaterials.module';


@NgModule({
  declarations: [FooterComponent,HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppmaterialsModule
  ],
  exports: [HeaderComponent,FooterComponent]
})
export class SharedModule { }
