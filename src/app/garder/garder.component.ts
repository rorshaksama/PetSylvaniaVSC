import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-garder',
  templateUrl: './garder.component.html',
  styleUrls: ['./garder.component.css']
})
export class GarderComponent implements OnInit {
  garde;
  constructor(private http: HttpClient, private route: Router, public myService: MyserviceService, private dialog: MatDialog) { }

  ngOnInit() {
    this.http.get(this.myService.lienHttp + 'garde').subscribe(ga => {
      this.garde = ga;
    });

  }
  }
