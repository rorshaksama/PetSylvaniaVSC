import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  lienHttp = 'http://localhost:4200/';
  constructor() { }
}
