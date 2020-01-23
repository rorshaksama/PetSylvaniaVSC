import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';
import { User } from './model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petSylvanieVsc';

  constructor(public myservice: MyserviceService, public route: Router) {

  }

  deconnexion() {
    localStorage.clear();
    this.myservice.connect = false;
    this.myservice.mConnecte = true;
    console.log('A++++');
    console.log('connect:   ' + this.myservice.connect);
    console.log('mConnecte:   ' + this.myservice.mConnecte);
  }



}
