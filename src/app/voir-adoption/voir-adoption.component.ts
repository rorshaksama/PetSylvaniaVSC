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
  typeChien;
  typeChat;
  typeOiseau;
  typeRongeur;
  typeLapin;

  dropdownSettings = {};
  dropdownType = [];
  selectedType = [];


  constructor(private http: HttpClient, private route: Router, public myService: MyserviceService, private dialog: MatDialog ) { }

  ngOnInit() {
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

    if (ad.animal.type === 'Chien') {
      console.log('vrai chien');
    } else {
      console.log('fau chien');
    }

    console.log('********************************** debut test *******************************************');
    console.log('typeChien ', this.typeChien);
    console.log('ad Type ', ad.animal.type);
    console.log('is chien ? ', this.TuEsUnChien(ad));

    if (this.TuEsUnChien(ad)) { return true; }
    if (this.tuEsUnChat(ad)) { return true; }

    return false;
  }


  TuEsUnChien(ad) {
    if (this.typeChien && ad.animal.type.type === 'Chien') {
      console.log('afficher chien');
      return true;
    }
  }

  tuEsUnChat(ad) {
    if (this.typeChat && ad.animal.type.type === 'Chat') {
      console.log('afficher chien');
      return true;
    }
  }
  callMyPopop() {
    const mydial = this.dialog.open(PopupComponent);
  }
  
}
