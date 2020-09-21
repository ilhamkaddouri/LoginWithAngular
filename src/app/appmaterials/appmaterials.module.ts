import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
const materials = [MatButtonModule,MatToolbarModule,MatIconModule,
  MatFormFieldModule,MatTabsModule,MatCardModule,MatInputModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materials

  ],
  exports : [materials]

})
export class AppmaterialsModule { }
