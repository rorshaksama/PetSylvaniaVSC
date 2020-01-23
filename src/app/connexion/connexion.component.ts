import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: User = new User();

  u;
  infoConnection;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private route: Router, public myservice: MyserviceService, public dialogref: MatDialogRef<ConnexionComponent>, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.dejaConnecte();
  }
  dejaConnecte() {
    if (this.myservice.connect === true) {

      // this.route.navigate(['bienvenue']);      //Pour rester sur la page actuel laiser les //
    }
  }

  connexion() {
    this.myservice.msgIfNotConnect = '';
    this.http.post(this.myservice.lienHttp + 'connexion', this.user).subscribe(data => {
      this.verifUser(data);
      this.u = this.myservice.recupUserConnectLocalStorage();
      console.log(this.u);
      if (this.u.login != null) {
        this.dialogref.close();
      }




      // 
      // console.log('connect:   ' + this.myservice.connect);
      // console.log('mConnecte:   ' + this.myservice.mConnecte);


    });
  }
  verifUser(data) {
    this.u = data;

    if (this.u.login != null) {
      console.log('ok');
      this.myservice.userConnecte = data;
      localStorage.setItem('UserConnectStorage', JSON.stringify(data)); // MISE EN MEMOIRE DES INFOS
      // this.route.navigate(['menu2']);   // A CHANGER SI ON VEUT LE GUIDER VERS AUTRE PART


    } else {
      console.log('NO NO NO');
      this.infoConnection = 'identifiants ou mdp inccorecte, veuillez ré-éssayer';
    }
  }
  callMyInsciption() {

    const mydial = this.dialog.open(InscriptionComponent);
    this.dialogref.close();
  }
}
