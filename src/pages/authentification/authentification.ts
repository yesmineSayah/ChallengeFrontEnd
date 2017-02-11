import { Component } from '@angular/core';
import {TabsPage} from '../tabs/tabs';
import { NavController , AlertController} from 'ionic-angular';

@Component({
  selector: 'app-authentification',
  templateUrl: 'authentification.html'
})
export class AuthentificationComponent {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }


}
