import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { User } from '../model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  u;
  infoConnexion;
  hsnom = false;
  myName;

  name: string;
  prenom: string;

  constructor(private http: HttpClient, private route: Router, private myservice: MyserviceService) { }

  ngOnInit() {
    this.u = this.myservice.recupUserConnectLocalStorage();
  }
  hideAndShowNom() {
    if (this.hsnom === false) {
      this.hsnom = true;
    }
  }
  changeNom(name) {
    this.myName = name;
  }

}
