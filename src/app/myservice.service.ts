import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Router } from '@angular/router';
import { Animal } from './model/Animal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userConnecte: User = new User();
  animalConnecte: Animal = new Animal();
  lienHttp = 'http://localhost:8099/';
  // lienHttp = 'http://51.254.112.59:8080/petsylvanie2/';
  connect = false;
  mConnecte = true;
  alertes;
  myAnimalFaireGarder;

  msgIfNotConnect;

  constructor(private route: Router, private http: HttpClient) { }

  recupUserLocalStorage() {
    const u: User = JSON.parse(localStorage.getItem('UserConnectStorage'));

  }

  recupanimal() {
    const a: Animal = JSON.parse(localStorage.getItem('AnimalConnectStorage'));
    return this.animalConnecte;
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
