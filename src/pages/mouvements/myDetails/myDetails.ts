import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementMenu } from '../menu/menu';
@Component({
  selector: 'app-mouvementmydetails',
  templateUrl: 'myDetails.html'
})
export class MouvementMyDetails {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){

  }
  menuRoute(){
    this.navCtrl.push(MouvementMenu);
  }
}
