import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  t;
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
  }

  test() {
    this.t = this.myservice.deconnexion();
  }

}
