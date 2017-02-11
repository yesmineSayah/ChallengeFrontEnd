import { Component } from '@angular/core';
import {HomePage} from '../Home/home';
import { NavController , AlertController} from 'ionic-angular';
import {AuthentificationComponent} from '../authentification/authentification';

@Component({
  selector: 'app-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionComponent {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }
loginRoot(){

  this.navCtrl.setRoot(AuthentificationComponent);
}

}
