import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlerteComponent } from '../alerte/alerte.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
  visible = false;
  u;
  constructor(private dialog: MatDialog, private myService: MyserviceService, private route: Router) {

  }




  ngOnInit() {
  }

  hideAndshow() {
    if (this.visible === true) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

  callMyPopop() {
    const mydial = this.dialog.open(AlerteComponent);
  }
  callMyCon() {
    const mydial = this.dialog.open(ConnexionComponent);

    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  connecte() {
    this.u = this.myService.recupUserConnectLocalStorage();
    if (this.u === null) {
      this.myService.msgIfNotConnect = 'Vous devez vous connecter pour accéder à cette page';
      this.route.navigate(['bienvenue']);
    }


  }
}






