import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupgardeComponent } from '../popupgarde/popupgarde.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-fairegarder',
  templateUrl: './fairegarder.component.html',
  styleUrls: ['./fairegarder.component.css']
})
export class FairegarderComponent implements OnInit {
  garder;
  u = this.myService.recupUserConnectLocalStorage();

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private route: Router, public myService: MyserviceService, private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.u);
    this.http.get(this.myService.lienHttp + 'animal/user/' + this.u.id).subscribe(ga => {
      this.garder = ga;

    });
  }
  CallMypopupgarde(animal) {
    this.myService.myAnimalFaireGarder = animal;
    const mydial = this.dialog.open(PopupgardeComponent);
  }

  


}
