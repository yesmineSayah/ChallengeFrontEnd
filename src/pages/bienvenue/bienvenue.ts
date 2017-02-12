import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InscriptionComponent} from '../inscription/inscription';

@Component({
  selector: 'page-bienvenue',
  templateUrl: 'bienvenue.html'
})
export class BienvenuePage {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {

  }
  slides = [
    {
      title: "Ensemble",
      description: "On Peut tous surmonter",
      image: "assets/icon/slider.jpg"
    }
  ];

  inscriptionRoute() {
    this.navCtrl.push(InscriptionComponent, null, { animate: true, direction: "forward" });
  }

}
