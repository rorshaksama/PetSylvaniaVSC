import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlerteComponent } from '../alerte/alerte.component';
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
visible = false;
  constructor(private dialog: MatDialog) { }

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


}
