import { Component, OnInit, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adoption } from '../model/adoption';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../model/user';
import { Animal} from '../model/animal';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  u: User = new User();
  a: Animal= new Animal()
  add: Adoption = new Adoption();

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, public myservice: MyserviceService, private route: Router, private dialog: MatDialog, public dialogRef: MatDialogRef<PopupComponent>) { }

  ngOnInit() {
    this.add.user = this.u;
    this.add.animal = this.a;
  }
  
 addAdoption(){
  this.http.post(this.myservice.lienHttp + 'addAdoption',this.add).subscribe(data=>{
  this.dialogRef.close();

  })
 }


  
}
