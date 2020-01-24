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

  myName = false;
  myPName = true;

  myPrenom = false;
  myPPrenom = true;

  myMail = false;
  myPMail = true;

  myLogin = false;
  myPLogin = true;

  Cname;
  Cprenom;
  Cmail;
  Clogin;



  constructor(private http: HttpClient, private route: Router, private myservice: MyserviceService) { }

  ngOnInit() {
    this.u = this.myservice.recupUserConnectLocalStorage();
  }
  // -------------------- NOM
  hideAndShowNom() {
    if (this.myName === false) {
      this.myName = true;

    } else {
      this.myName = false;
    }
  }
  changeNom(name) {
    this.Cname = name;
    this.myName = false;
    this.myPName = false;
  }
  // -------------------- PRENOM
  hideAndShowPrenom() {
    if (this.myPrenom === false) {
      this.myPrenom = true;

    } else {
      this.myPrenom = false;
    }
  }
  changePrenom(prenom) {
    this.Cprenom = prenom;
    this.myPrenom = false;
    this.myPPrenom = false;
  }
  // -------------------- MAIL
  hideAndShowMail() {
    if (this.myMail === false) {
      this.myMail = true;

    } else {
      this.myMail = false;
    }
  }
  changeMail(mail) {
    this.Cmail = mail;
    this.myMail = false;
    this.myPMail = false;
  }
  // ------------------- LOGIN
  hideAndShowLogin() {
    if (this.myLogin === false) {
      this.myLogin = true;

    } else {
      this.myLogin = false;
    }
  }
  changeLogin(login) {
    this.Clogin = login;
    this.myLogin = false;
    this.myPLogin = false;
  }


}
