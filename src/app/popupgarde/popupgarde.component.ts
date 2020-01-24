import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Animal } from '../model/Animal';
import { Garde } from '../model/Garde';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-popupgarde',
  templateUrl: './popupgarde.component.html',
  styleUrls: ['./popupgarde.component.css']
})
export class PopupgardeComponent implements OnInit {
  u: User = new User();
  a: Animal = new Animal();
  ga: Garde = new Garde();
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, public myservice: MyserviceService, private route: Router, private dialog: MatDialog, public dialogRef: MatDialogRef<PopupgardeComponent>) { }

  ngOnInit() {
    this.u = this.myservice.recupUserConnectLocalStorage();
  }
  addGarde() {

    // this.ga.userGardien = this.u;
    // this.ga.animal = this.a;

    // console.log('ga ', this.ga);

    // this.http.post(this.myservice.lienHttp + 'createGarde', this.ga).subscribe(data => {
    //   this.dialogRef.close();
    // });


    const animal = this.myservice.myAnimalFaireGarder;
    this.ga.animal = animal;

    this.http.post(this.myservice.lienHttp + 'garde', this.ga).subscribe(data => {
      this.dialogRef.close();
    }, err => {
      console.log(err);
    });

  }
}
