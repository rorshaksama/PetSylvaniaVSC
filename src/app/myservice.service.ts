import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userConnecte: User = new User();

  lienHttp = 'http://localhost:8099/';
  connect = false;
  mConnecte = true;

  msgIfNotConnect;

  constructor() { }


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
    console.log('A++++');
    console.log('connect:   ' + this.connect);
    console.log('mConnecte:   ' + this.mConnecte);
  }
}
