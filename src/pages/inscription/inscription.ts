import { Component } from '@angular/core';
import {HomePage} from '../Home/home';
import { NavController , AlertController} from 'ionic-angular';

@Component({
  selector: 'app-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionComponent {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }

  
}
