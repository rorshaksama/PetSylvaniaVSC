import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adoption } from '../model/Adoption';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../model/User';
import { Animal } from '../model/Animal';
import { Type } from '../model/Type';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  u: User = new User();
  a: Animal = new Animal();
  add: Adoption = new Adoption();
  ty: Type = new Type();
  type;
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, public myservice: MyserviceService, private route: Router, private dialog: MatDialog, public dialogRef: MatDialogRef<PopupComponent>) {
    this.u = this.myservice.recupUserConnectLocalStorage();

  }

  ngOnInit() {
    this.http.get(this.myservice.lienHttp + 'type').subscribe(ty => {
      this.type = ty;
    });

  }
  addAdoption(add) {

    this.ty.id = add;
    this.a.type = this.ty;
    this.a.user = this.u;
    this.add.animal = this.a;


    // console.log('type ', add);
    console.log('mettrre ad', this.add);


    this.http.post(this.myservice.lienHttp + 'adoption', this.add).subscribe(data => {
      this.dialogRef.close();
    });
  }



}
