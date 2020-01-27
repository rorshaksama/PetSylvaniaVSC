import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Alerte } from '../model/Alerte';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireAlerteComponent } from '../formulaire-alerte/formulaire-alerte.component';
import { Message } from '../model/message';
import { User } from '../model/User';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.css']
})
export class AlerteComponent implements OnInit {

  alertes;
  alerte: Alerte = new Alerte();
  message: Message = new Message();
  u: User = new User();
  truc: string;
  mess: string;
  lo;
  user;
  a;
  utilisateur;
  visible = false;

  constructor(private route: Router, public myservice: MyserviceService, private http: HttpClient, private dialog: MatDialog) {
    this.utilisateur = this.myservice.recupUserConnectLocalStorage();
  }

  ngOnInit() {
    this.http.get(this.myservice.lienHttp + 'alerte').subscribe(a => {
      this.alertes = a;
      console.log("alertes " + this.alerte);
      //this.a.user = this.a;
      //this.u.login = this.lo;
    });
  }

  deleteAlerte(id) {
    this.http.delete(this.myservice.lienHttp + 'alerte/' + id).subscribe(data => {
      // console.log(data);
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }

  addAlerte() {
    const mydial = this.dialog.open(FormulaireAlerteComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();

    });
  }

  reponseAlerte(alerte, login, message) {


    let userExp = new User();
    userExp.login = login;


    let messageSend = new Message();
    messageSend.contenu = message;
    messageSend.userExpediteur = userExp;
    messageSend.userDestinataire = alerte.user;
    //console.log('message send ', messageSend);
    this.http.post('http://localhost:8099/message', messageSend).subscribe(data => {
      //console.log(data);
    }, err => {
      console.log(err);
    });
    this.alerte.message = this.alerte.message + "\n" + login + " a répondu : " + this.message.contenu;
    this.ngOnInit();
  }
  hideAndShow() {
    if (this.visible === true) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }
  cache;

  unnom(alerte) {
    /*  const ap = this.http.post(this.myservice.lienHttp + 'alerte/usercreate/' + this.utilisateur.id, alerte).toPromise();
  
      ap.then(x => {
        this.cache = x;
      });
  
    this.http.post(this.myservice.lienHttp + 'alerte/usercreate/' + this.utilisateur.id, alerte).subscribe(s => {
      this.cache = s;
    });

    console.log('cache ', this.cache);*/


    if (alerte.id === this.utilisateur.id) {
      return true;
    } else {
      return false;
    }
  }


  voirB(alerte) {
    if (this.myservice.mConnecte === false) {
      console.log('ss ', this.unnom(alerte));
      return this.unnom(alerte);
    } else {
      return false;
    }
  }


  //  if (this.utilisateur.id === this.alerte.user) {
  //    this.visible = true;
  //  } else {
  //    this.visible = false;
  //   }


}
