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
  // user: User = new User();
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

  pers;

  nomBool = false;
  prenomBool = false;
  mailBool = false;
  loginBool = false;

  animal;


  constructor(private http: HttpClient, private route: Router, private myservice: MyserviceService) {
    this.u = this.myservice.recupUserConnectLocalStorage();

    if (this.u === null) {
      this.myservice.msgIfNotConnect = 'Voud devez vous connecter pour accéder à cette page';
      this.route.navigate(['bienvenue']);
    }
    this.http.get(this.myservice.lienHttp + 'animal/user/' + this.u.id).subscribe(a => {
      this.animal = a;

    });

  }



  ngOnInit() {


  }
  // -------------------- NOM
  hideAndShowNom() {
    if (this.myName === false) {
      this.myName = true;

    } else {
      this.myName = false;
    }
  }
  changeNom() {
    // this.Cname = name;
    this.myName = false;
    this.myPName = false;

    this.nomBool = true;
  }
  // -------------------- PRENOM
  hideAndShowPrenom() {
    if (this.myPrenom === false) {
      this.myPrenom = true;

    } else {
      this.myPrenom = false;
    }
  }
  changePrenom() {
    // this.Cprenom = prenom;
    this.myPrenom = false;
    this.myPPrenom = false;

    this.prenomBool = true;
  }
  // -------------------- MAIL
  hideAndShowMail() {
    if (this.myMail === false) {
      this.myMail = true;

    } else {
      this.myMail = false;
    }
  }
  changeMail() {
    // this.Cmail = mail;
    this.myMail = false;
    this.myPMail = false;
    this.mailBool = true;
  }
  // ------------------- LOGIN
  hideAndShowLogin() {
    if (this.myLogin === false) {
      this.myLogin = true;

    } else {
      this.myLogin = false;
    }
  }
  changeLogin() {
    // this.Clogin = login;
    this.myLogin = false;
    this.myPLogin = false;

    this.loginBool = true;
  }



  modificationUser() {

    const user: User = new User();

    //user.nom = nom;


    /* if (this.nomBool) {
       user.nom = nom;
     }
 
     if (this.prenomBool) {
       user.prenom = prenom;
     }
 
     if (this.mailBool) {
       user.mail = mail;
     }
 
     if(this.loginBool){
       user.login = login;
     }*/



    this.http.put(this.myservice.lienHttp + 'user/' + this.u.id, this.u).subscribe(data => {
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }


}
