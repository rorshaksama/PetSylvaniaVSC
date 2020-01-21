import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Menu1Component } from './menu1/menu1.component';
import { VoirAdoptionComponent } from './voir-adoption/voir-adoption.component';
import { AlerteComponent } from './alerte/alerte.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Menu1Component,
<<<<<<< HEAD
    VoirAdoptionComponent
=======
    VoirAdoptionComponent,
    AlerteComponent
>>>>>>> 0db4c8d7818e342e37a93f35d8bb0ed9ef22aba1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
