import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupgardeComponent } from '../popupgarde/popupgarde.component';


@Component({
  selector: 'app-fairegarder',
  templateUrl: './fairegarder.component.html',
  styleUrls: ['./fairegarder.component.css']
})
export class FairegarderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  CallMypopupgarde() {
    const mydial = this.dialog.open(PopupgardeComponent);
  }
}
