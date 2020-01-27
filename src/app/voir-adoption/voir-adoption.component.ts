import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-voir-adoption',
  templateUrl: './voir-adoption.component.html',
  styleUrls: ['./voir-adoption.component.css']

})
export class VoirAdoptionComponent implements OnInit {

  adoptions;
  typeChien = false;
  typeChat = false;
  typeOiseau = false;
  typeRongeur = false;
  typeLapin = false;

  dropdownSettings = {};
  dropdownType = [];
  selectedType = [];
  u;
  connecte = false;
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private route: Router, public myService: MyserviceService, private dialog: MatDialog) {
    
  }

  HSConnecte() {
    this.u = this.myService.recupUserConnectLocalStorage();
    console.log('utilisateur ', this.u);

  }

  ngOnInit() {


    this.u = this.myService.recupUserLocalStorage();
    this.http.get(this.myService.lienHttp + 'adoption').subscribe(ad => {
      this.adoptions = ad;

      /*  this.adoptions.forEach(element => {
          console.log(element);
          if (element.animal.type.type === 'Chien') {
            console.log('chien trouvé');
          }
        });*/

      this.dropdownType = [
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
        allowSearchFilter: true

      }
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
  test(ad) {


    if (this.TuEsUnChien(ad)) { return true; }
    if (this.tuEsUnChat(ad)) { return true; }
    if (this.tuEsUnOiseau(ad)) { return true; }
    if (this.tuEsUnRongeur(ad)) { return true; }
    if (this.tuEsUnLapin(ad)) { return true; }

    return false;
  }
  TuEsUnChien(ad) {
    if (this.typeChien && ad.animal.type.type === 'Chien') {
      return true;
    }
  }

  tuEsUnChat(ad) {
    if (this.typeChat && ad.animal.type.type === 'Chat') {
      return true;
    }
  }
  tuEsUnOiseau(ad) {
    if (this.typeOiseau && ad.animal.type.type === 'Oiseau') {
      return true;
    }
  }
  tuEsUnRongeur(ad) {
    if (this.typeRongeur && ad.animal.type.type === 'Rongeur') {
      return true;
    }
  }
  tuEsUnLapin(ad) {
    if (this.typeLapin && ad.animal.type.type === 'Lapin') {
      return true;
    }
  }
  callMyPopop() {
    const mydial = this.dialog.open(PopupComponent);

    mydial.afterClosed().subscribe(r => {
      this.ngOnInit();
    });

  }



  

}
