import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: User = new User();

  u;
  infoConnection;

  constructor(private http: HttpClient, private route: Router, public myservice: MyserviceService) {
    this.u = myservice.recupUserConnectLocalStorage();
  }

  ngOnInit() {
    this.dejaConnecte();
  }
  dejaConnecte() {
    if (this.myservice.connect === true) {

      this.route.navigate(['myMemo']);
    }
  }

}
