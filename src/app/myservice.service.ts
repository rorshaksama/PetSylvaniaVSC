import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userConnecte: User = new User();

  lienHttp = 'http://localhost:8099/';
  connect = false;
  mConnecte = true;

  myAnimalFaireGarder;

  msgIfNotConnect;

  constructor(private route: Router) { }

  recupUserLocalStorage() {
    const u: User = JSON.parse(localStorage.getItem('UserConnectStorage'));
    this.userConnecte = u;
  }


  recupUserConnectLocalStorage() {

    const u: User = JSON.parse(localStorage.getItem('UserConnectStorage'));

    this.userConnecte = u;
    if (this.userConnecte != null) {
      this.connect = true;
      this.mConnecte = false;
    } else {
      this.connect = false;
      this.mConnecte = true;
    }
    return this.userConnecte;
  }
  deconnexion() {
    localStorage.clear();
    this.connect = false;
    this.mConnecte = true;
    console.log('connect:   ' + this.connect);
    console.log('mConnecte:   ' + this.mConnecte);
    this.route.navigate(['bienvenue']);
  }
}
