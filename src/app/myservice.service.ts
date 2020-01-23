import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userConnecte: User = new User();

  lienHttp = 'http://localhost:8099/';
  connect = false;
  msgIfNotConnect;

  constructor() { }


  recupUserConnectLocalStorage() {

    const u: User = JSON.parse(localStorage.getItem('UserConnectStorage'));

    this.userConnecte = u;
    if (this.userConnecte != null) {
      this.connect = true;
    }
    return this.userConnecte;
  }
}
