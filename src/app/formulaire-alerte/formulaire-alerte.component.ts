import { Component, OnInit } from '@angular/core';
import { Alerte } from '../model/Alerte';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../model/User';

@Component({
  selector: 'app-formulaire-alerte',
  templateUrl: './formulaire-alerte.component.html',
  styleUrls: ['./formulaire-alerte.component.css']
})
export class FormulaireAlerteComponent implements OnInit {
  u: User = new User();
  alerte: Alerte = new Alerte();
  constructor(private route: Router, public myservice: MyserviceService, private http: HttpClient, private dialog: MatDialog,
              public dialogRef: MatDialogRef<FormulaireAlerteComponent>) { }

  ngOnInit() {
    this.alerte.user = this.u;
  }

  createAlerte() {
    this.http.post(this.myservice.lienHttp + 'createAlerte', this.alerte).subscribe(data => {
      this.dialogRef.close();
    });
  }

}