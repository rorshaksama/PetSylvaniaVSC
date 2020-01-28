import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model/Animal';
import { User } from '../model/User';
import { Type } from '../model/Type';

@Component({
  selector: 'app-popup-animal',
  templateUrl: './popup-animal.component.html',
  styleUrls: ['./popup-animal.component.css']
})
export class PopupAnimalComponent implements OnInit {
  a: Animal = new Animal();
  u: User = new User();
  t: Type = new Type();
  animal;

  constructor(private route: Router, private myService: MyserviceService, private http: HttpClient) {
    this.u = this.myService.recupUserConnectLocalStorage();

    this.http.get(this.myService.lienHttp + 'animal/user/' + this.u.id).subscribe(a => {
      this.animal = a;

    });
   }

  ngOnInit() {
  }
  createAnimal() {
    this.a.user = this.u;
    this.a.type = this.t;


    this.http.post(this.myService.lienHttp + 'animal', this.a).subscribe(data => {

    });
  }

}
