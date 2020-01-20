import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Menu1Component } from './menu1/menu1.component';
<<<<<<< HEAD
import { VoirAdoptionComponent } from './voir-adoption/voir-adoption.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
=======
import { AlerteComponent } from './alerte/alerte.component';
>>>>>>> f18b725da36da30038ce73e59b0bbb97538fc438

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Menu1Component,
<<<<<<< HEAD
    VoirAdoptionComponent
=======
    AlerteComponent
>>>>>>> f18b725da36da30038ce73e59b0bbb97538fc438
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
