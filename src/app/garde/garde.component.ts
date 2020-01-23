import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garde',
  templateUrl: './garde.component.html',
  styleUrls: ['./garde.component.css']
})
export class GardeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

}
