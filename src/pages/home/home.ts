import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InscriptionComponent} from '../inscription/inscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {

  }
  slides = [
    {
      title: "Ensemble on peut faire Plus",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/icon/slider.jpg"
    }
  ];

  inscriptionRoute() {
    this.navCtrl.push(InscriptionComponent, null, { animate: true, direction: "forward" });
  }

}
