import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementDetails } from '../details/details';
@Component({
  selector: 'app-mouvement',
  templateUrl: 'index.html'
})
export class MouvementPage {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){

  }
  detailsRoute(){
    this.navCtrl.push(MouvementDetails);
  }

}
