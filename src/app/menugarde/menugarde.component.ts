import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menugarde',
  templateUrl: './menugarde.component.html',
  styleUrls: ['./menugarde.component.css']
})
export class MenugardeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



  Fairegarder() {

    this.router.navigate(['/Fairegarder']);

  }
}