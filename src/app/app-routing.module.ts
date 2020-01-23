import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoirAdoptionComponent } from './voir-adoption/voir-adoption.component';
import { GardeComponent } from './garde/garde.component';
import { PageBienvenueComponent } from './page-bienvenue/page-bienvenue.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GarderComponent } from './garder/garder.component';
import { FairegarderComponent } from './fairegarder/fairegarder.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: 'voirAdoption', component: VoirAdoptionComponent },
  { path: 'garde', component: GardeComponent },
  { path: 'garde/garder', component: GarderComponent },
  { path: 'bienvenue', component: PageBienvenueComponent },
  { path: 'garde/fairegarder', component: FairegarderComponent },
  { path: '', redirectTo: 'bienvenue', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent }

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
