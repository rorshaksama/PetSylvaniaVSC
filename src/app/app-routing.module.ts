import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  VoirAdoptionComponent } from './voir-adoption/voir-adoption.component';
import { GardeComponent } from './garde/garde.component';



const routes: Routes = [
  {path: 'voirAdoption', component: VoirAdoptionComponent},
  {path: 'garde', component: GardeComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
