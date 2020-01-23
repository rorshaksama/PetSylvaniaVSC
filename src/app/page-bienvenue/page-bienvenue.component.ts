import { Component, OnInit } from '@angular/core';
import { ConnexionComponent } from '../connexion/connexion.component';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-bienvenue',
  templateUrl: './page-bienvenue.component.html',
  styleUrls: ['./page-bienvenue.component.css']
})
export class PageBienvenueComponent implements OnInit {
  u;

  constructor(private http: HttpClient, public myservice: MyserviceService, private route: Router) {
    this.u = myservice.recupUserConnectLocalStorage();
  }
  ngOnInit() {
    if (this.u !== null) {
      console.log('connecte toi');
      this.route.navigate(['voirAdoption']);
    }
  }

}
