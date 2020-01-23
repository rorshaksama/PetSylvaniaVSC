
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Alerte } from '../model/alerte';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireAlerteComponent } from '../formulaire-alerte/formulaire-alerte.component';
import { Message } from '../model/message';
import { User } from '../model/user';

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
  user;
  a;

  constructor(private route: Router, public myservice: MyserviceService, private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.http.get(this.myservice.lienHttp + 'alerte').subscribe(a => {
      this.alertes = a;
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

      /*this.alerte.user.login = result.login;
      this.alerte.message = result.message;
      this.alerte.dateDisparition = result.dateDisparition;*/
    });

    /* this.http.post(this.myservice.lienHttp + 'createAlerte', this.alerte).subscribe(data => {
       this.ngOnInit();
     });*/
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
}