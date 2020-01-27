import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AlerteComponent } from '../alerte/alerte.component';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  t;
  constructor(private myservice: MyserviceService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  deconnexion() {
    this.t = this.myservice.deconnexion();
  }
  callMyPopop() {
    const mydial = this.dialog.open(AlerteComponent);
  }

}
