import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  u: User = new User();
  


  constructor(private http: HttpClient, public dialogRef: MatDialogRef<InscriptionComponent>, private myservice: MyserviceService) { }

  ngOnInit() {

  }
  createUser() {
    this.http.post(this.myservice.lienHttp + 'createUser', this.u).subscribe(data => {
      this.dialogRef.close();
    });

  }
}

