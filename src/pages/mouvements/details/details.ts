import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MouvementCheckin } from '../checkin/checkin';
@Component({
  selector: 'app-mouvementdetails',
  templateUrl: 'details.html'
})
export class MouvementDetails {

  item: any;
  constructor(public navCtrl: NavController, private NavParams: NavParams) {
    this.item = NavParams.get('item');
  }

  ngOnInit() {

  }

  checkinRoute() {
    this.navCtrl.push(MouvementCheckin, { item: this.item });
  }

}
