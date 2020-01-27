import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model/Animal';
import { HistoriqueGarde } from '../model/HistoGarde';
import { Garde } from '../model/Garde';
@Component({
  selector: 'app-histogarde',
  templateUrl: './histogarde.component.html',
  styleUrls: ['./histogarde.component.css']
})
export class HistogardeComponent implements OnInit {
  u: User = new User();
  a: Animal = new Animal();
  h: HistoriqueGarde = new HistoriqueGarde();
  g: Garde = new Garde();
  constructor(private myService: MyserviceService, private http: HttpClient) {
    
    this.u = this.myService.recupUserConnectLocalStorage();

    this.h.garde = this.g;
    this.g.userGardien = this.u;

    console.log("g " + this.g);
    console.log("h " + this.h);

 



  }

  ngOnInit() {
 
  }



}
