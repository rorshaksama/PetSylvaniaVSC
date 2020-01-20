import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Menu1Component } from './menu1/menu1.component';
import { AlerteComponent } from './alerte/alerte.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Menu1Component,
    AlerteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
