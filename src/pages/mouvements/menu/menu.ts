import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementDetails } from '../details/details';

@Component({
  selector: 'app-mouvementmenu',
  templateUrl: 'menu.html'
})
export class MouvementMenu {
  items: any;

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
  }
}
