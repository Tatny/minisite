import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{HistoriaComponent} from '../pages/historia/historia.component';
import{InicioComponent} from '../pages/inicio/inicio.component';
import {TurismoComponent} from '../pages/turismo/turismo.component';
import{ContactComponent}from '../pages/contact/contact.component'
const routes: Routes =[
  {path: "historia", component: HistoriaComponent},
  {path: "inicio", component: InicioComponent},
  {path: "turismo", component: TurismoComponent},
  {path: "contact", component: ContactComponent},
  {path:"",pathMatch:'full', redirectTo:'/inicio'},
  {path:"turismo",pathMatch:'full', redirectTo:'/turismo'},
  {path:"historia",pathMatch:'full', redirectTo:'/historia'},
  {path:"contact",pathMatch:'full', redirectTo:'/contact'}

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
