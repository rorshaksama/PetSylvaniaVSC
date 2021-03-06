import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoirAdoptionComponent } from './voir-adoption/voir-adoption.component';
import { GardeComponent } from './garde/garde.component';
import { PageBienvenueComponent } from './page-bienvenue/page-bienvenue.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GarderComponent } from './garder/garder.component';
import { FairegarderComponent } from './fairegarder/fairegarder.component';
import { ProfileComponent } from './profile/profile.component';
import { HistogardeComponent } from './histogarde/histogarde.component';
import { VetoComponent } from './veto/veto.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { PopupAnimalComponent } from './popup-animal/popup-animal.component';
import { FichesComponent } from './fiches/fiches.component';



const routes: Routes = [
  { path: 'voirAdoption', component: VoirAdoptionComponent },
  {
    path: 'garde', component: GardeComponent,
    children: [
      {
        path: 'garder', component: GarderComponent
      },
      {
        path: 'fairegarder', component: FairegarderComponent
      },
      {
        path: 'mesgardes', component: HistogardeComponent
      }
    ]
  },
  { path: 'bienvenue', component: PageBienvenueComponent },
  { path: '', redirectTo: 'bienvenue', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'veto', component: VetoComponent },
  { path: 'nouvelAnimal', component: NewAnimalComponent },
  { path: 'pAnimal', component: PopupAnimalComponent },
  { path: 'fiches', component: FichesComponent },

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
