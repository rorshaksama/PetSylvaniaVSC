import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoirAdoptionComponent } from './voir-adoption/voir-adoption.component';
import { GardeComponent } from './garde/garde.component';
import { PageBienvenueComponent } from './page-bienvenue/page-bienvenue.component';
import { InscriptionComponent } from './inscription/inscription.component';



const routes: Routes = [
  { path: 'voirAdoption', component: VoirAdoptionComponent },
  { path: 'garde', component: GardeComponent },
  { path: 'bienvenue', component: PageBienvenueComponent },
  { path: '', redirectTo: 'bienvenue', pathMatch: 'full' }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
