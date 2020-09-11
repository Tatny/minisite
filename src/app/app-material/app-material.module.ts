import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatInputModule
  ],

  exports:[

    MatMenuModule,
    MatCardModule,MatButtonModule,MatTabsModule, MatGridListModule,MatInputModule

  ]
})
export class AppMaterialModule { }
