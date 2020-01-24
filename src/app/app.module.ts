import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Menu1Component } from './menu1/menu1.component';
import { VoirAdoptionComponent } from './voir-adoption/voir-adoption.component';
import { FormulaireAlerteComponent } from './formulaire-alerte/formulaire-alerte.component';
import { AlerteComponent } from './alerte/alerte.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { from } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { GardeComponent } from './garde/garde.component';
import { GarderComponent } from './garder/garder.component';
import { PageBienvenueComponent } from './page-bienvenue/page-bienvenue.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { Menu2Component } from './menu2/menu2.component';
import { FairegarderComponent } from './fairegarder/fairegarder.component';
import { ProfileComponent } from './profile/profile.component';
import { PopupgardeComponent } from './popupgarde/popupgarde.component';
import { HistogardeComponent } from './histogarde/histogarde.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Menu1Component,
    VoirAdoptionComponent,
    AlerteComponent,
    FormulaireAlerteComponent,
    PopupComponent,
    GardeComponent,
    GarderComponent,
    PageBienvenueComponent,
    InscriptionComponent,
    Menu2Component,
    FairegarderComponent,
    ProfileComponent,
    PopupgardeComponent,
    HistogardeComponent
  ],
  // tslint:disable-next-line: max-line-length
  entryComponents: [PopupComponent, FormulaireAlerteComponent, AlerteComponent, ConnexionComponent, InscriptionComponent,
     PopupgardeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
