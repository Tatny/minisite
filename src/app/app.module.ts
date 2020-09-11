import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';



import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import{AppRoutingModule} from '../app/app-routing/app-routing.module'
import {MatGridListModule} from '@angular/material/grid-list';
import { ContactComponent } from './pages/contact/contact.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HistoriaComponent,
    TurismoComponent,
    NavbarComponent,
    ContactComponent
    
  ],
  imports: [
   
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
