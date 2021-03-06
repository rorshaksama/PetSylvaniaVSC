import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service';
import { Animal } from '../model/Animal';
import { User } from '../model/User';
import { Type } from '../model/Type';
import { MatDialog } from '@angular/material/dialog';
import { PopupAnimalComponent } from '../popup-animal/popup-animal.component';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {

  a: Animal = new Animal();
  u: User = new User();
  t: Type = new Type();
  animal;

  infoConnexion;

  myName = false;
  myPName = true;

  myPrenom = false;
  myPPrenom = true;

  myMail = false;
  myPMail = true;

  myNaissance = false;
  myPNaissance = true;

  Cname;
  Cprenom;
  Cmail;
  Clogin;

  pers;

  nomBool = false;
  prenomBool = false;
  mailBool = false;
  loginBool = false;

  

  constructor(private http: HttpClient, private myService: MyserviceService, private dialog: MatDialog) {
    this.u = this.myService.recupUserConnectLocalStorage();

    this.http.get(this.myService.lienHttp + 'animal/user/' + this.u.id).subscribe(a => {
      this.animal = a;

    });
  }
  ngOnInit() {
console.log(this.a);
  }

  createAnimal() {
    this.a.user = this.u;
    this.a.type = this.t;


    this.http.post(this.myService.lienHttp + 'animal', this.a).subscribe(data => {
      console.log(this.a);
    });
  }
  callNewAnimal() {
    const mydial = this.dialog.open(PopupAnimalComponent);
  }

}
