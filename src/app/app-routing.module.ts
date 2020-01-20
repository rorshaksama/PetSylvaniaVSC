import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  VoirAdoptionComponent } from './voir-adoption/voir-adoption.component';



const routes: Routes = [
  {path: 'voirAdoption', component: VoirAdoptionComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
