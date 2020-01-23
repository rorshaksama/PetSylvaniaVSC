import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Alerte } from '../model/Alerte';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireAlerteComponent } from '../formulaire-alerte/formulaire-alerte.component';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.css']
})
export class AlerteComponent implements OnInit {

  alertes;
  animal;
  alerte: Alerte = new Alerte();
  al;

  constructor(private route: Router, public myservice: MyserviceService, private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.http.get(this.myservice.lienHttp + 'alerte').subscribe(a => {
      this.alertes = a;
    });
  }

  deleteAlerte(id) {
    this.http.delete(this.myservice.lienHttp + 'alerte/' + id).subscribe(data => {
      // console.log(data);
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }

  addAlerte() {
    const mydial = this.dialog.open(FormulaireAlerteComponent);
    mydial.afterClosed().subscribe(result =>{
      this.ngOnInit();
      
      /*this.alerte.user.login = result.login;
      this.alerte.message = result.message;
      this.alerte.dateDisparition = result.dateDisparition;*/
    });
    
   /* this.http.post(this.myservice.lienHttp + 'createAlerte', this.alerte).subscribe(data => {
      this.ngOnInit();
    });*/
  }

}

