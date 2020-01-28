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
  typeChien = false;
  typeChat = false;
  typeOiseau = false;
  typeRongeur = false;
  typeLapin = false;

  dropdownSettings = {};
  dropdownType = [];
  selectedType = [];

  constructor(private http: HttpClient, private route: Router, public myService: MyserviceService, private dialog: MatDialog) { }

  ngOnInit() {
    this.http.get(this.myService.lienHttp + 'garde').subscribe(ga => {
      this.garde = ga;

      this.dropdownType = [
        { item_id: 1, item_text: 'Chien' },
        { item_id: 2, item_text: 'Chat' },
        { item_id: 3, item_text: 'Oiseau' },
        { item_id: 4, item_text: 'Rongeur' },
        { item_id: 5, item_text: 'Lapin' },

      ];



      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 10,
        allowSearchFilter: true

      };
      this.onSelectAllType();
    });
  }
  onSelectAllType() {
    this.typeChien = true;
    this.typeChat = true;
    this.typeRongeur = true;
    this.typeLapin = true;
    this.typeOiseau = true;
  }

  onDeSelectAllType() {
    this.typeChien = false;
    this.typeChat = false;
    this.typeRongeur = false;
    this.typeLapin = false;
    this.typeOiseau = false;
  }
  onTypeSelect(item: any) {
    if (item.item_id === 1) { this.typeChien = true; console.log('chien'); }
    if (item.item_id === 2) { this.typeChat = true; }
    if (item.item_id === 3) { this.typeOiseau = true; }
    if (item.item_id === 4) { this.typeRongeur = true; }
    if (item.item_id === 5) { this.typeLapin = true; }
  }

  onTypeDeselect(item: any) {
    if (item.item_id === 1) { this.typeChien = false; console.log('chien mort'); }
    if (item.item_id === 2) { this.typeChat = false; }
    if (item.item_id === 3) { this.typeOiseau = false; }
    if (item.item_id === 4) { this.typeRongeur = false; }
    if (item.item_id === 5) { this.typeLapin = false; }
  }
  test(ga) {


    if (this.TuEsUnChien(ga)) { return true; }
    if (this.tuEsUnChat(ga)) { return true; }
    if (this.tuEsUnOiseau(ga)) { return true; }
    if (this.tuEsUnRongeur(ga)) { return true; }
    if (this.tuEsUnLapin(ga)) { return true; }

    return false;
  }
  TuEsUnChien(ga) {
    if (this.typeChien && ga.animal.type.type === 'Chien') {
      return true;
    }
  }

  tuEsUnChat(ga) {
    if (this.typeChat && ga.animal.type.type === 'Chat') {
      return true;
    }
  }
  tuEsUnOiseau(ga) {
    if (this.typeOiseau && ga.animal.type.type === 'Oiseau') {
      return true;
    }
  }
  tuEsUnRongeur(ga) {
    if (this.typeRongeur && ga.animal.type.type === 'Rongeur') {
      return true;
    }
  }
  tuEsUnLapin(ga) {
    if (this.typeLapin && ga.animal.type.type === 'Lapin') {
      return true;
    }
  }
}
