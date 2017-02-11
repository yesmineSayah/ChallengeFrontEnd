import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MouvementMenu } from '../menu/menu';
@Component({
  selector: 'app-mouvementmydetails',
  templateUrl: 'myDetails.html'
})
export class MouvementMyDetails {
  item: any;
  constructor(public navCtrl: NavController, private params: NavParams) {
    this.item = params.get('item');
  }
  ngOnInit() {

  }
  menuRoute() {
    this.navCtrl.push(MouvementMenu);
  }
  editRoute(item) {

  }
}
