import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-voir-adoption',
  templateUrl: './voir-adoption.component.html',
  styleUrls: ['./voir-adoption.component.css']
  
})
export class VoirAdoptionComponent implements OnInit {

  adoptions;
  typeChien;
  typeChat;
  typeOiseau;
  typeRongeur;
  typeLapin;

  dropdownSettings = {};
  dropdownType = [];
  selectedType = [];
  

  constructor(private http: HttpClient, private route: Router, public myService: MyserviceService) { }
  
  ngOnInit() {
    this.http.get(this.myService.lienHttp + 'adoption').subscribe(ad => {
      this.adoptions = ad;


      this.dropdownType = [
        { item_id: 1, item_text: 'Chien' },
        { item_id: 2, item_text: 'Chat' },
        { item_id: 3, item_text: 'Oiseau' },
        { item_id: 4, item_text: 'Rongeur' },
        { item_id: 5, item_text: 'Lapin' }
      ];

      this.selectedType = [
        { item_id: 1, item_text: 'Chien' },
        { item_id: 2, item_text: 'Chat' },
        { item_id: 3, item_text: 'Oiseau' },
        { item_id: 4, item_text: 'Rongeur' },
        { item_id: 5, item_text: 'Lapin' }
      ];

      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 10,
        allowSearchFilter: false
      }
    });
  }

  onTypeSelect(item: any) {

    if (item.item_id == 1) { this.typeChien = true; }
    if (item.item_id == 2) { this.typeChat = true; }
    if (item.item_id == 3) { this.typeOiseau = true; }
    if (item.item_id == 4) { this.typeRongeur = true; }
    if (item.item_id == 5) { this.typeLapin = true; }


  }



}
