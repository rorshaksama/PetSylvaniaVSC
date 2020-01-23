import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
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
  constructor(private http: HttpClient, private route: Router, public myservice: MyserviceService, private dialogref: MatDialogRef<ConnexionComponent>, private dialog: MatDialog) {
    this.u = myservice.recupUserConnectLocalStorage();
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
      this.dialogref.close();
    });
  }
  verifUser(data) {
    this.u = data;

    if (this.u.login != null) {
      console.log('ok');
      this.myservice.userConnecte = data;
      localStorage.setItem('UserConnectStorage', JSON.stringify(data)); // MISE EN MEMOIRE DES INFOS
      this.route.navigate(['bienvenue']);   // A CHANGER SI ON VEUT LE GUIDER VERS AUTRE PART


    } else {
      console.log('NO NO NO');
      this.infoConnection = 'identifiants ou mdp inccorecte';
    }
  }
  callMyInsciption() {

    const mydial = this.dialog.open(InscriptionComponent);
    this.dialogref.close();
  }
}
