import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-voir-adoption',
  templateUrl: './voir-adoption.component.html',
  styleUrls: ['./voir-adoption.component.css']
})
export class VoirAdoptionComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, public myService: MyserviceService) { }

  ngOnInit() {
  }

}
