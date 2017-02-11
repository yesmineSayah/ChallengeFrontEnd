import { Component } from '@angular/core';
import {HomePage} from '../Home/home';
import { NavController , AlertController} from 'ionic-angular';
import {AuthentificationComponent} from '../authentification/authentification';
import {AuthService} from '../../services/api.service';

@Component({
  selector: 'app-inscription',
  templateUrl: 'inscription.html',
  providers : [AuthService]
})
export class InscriptionComponent {
  user : any={};
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private service:AuthService) {

  }
loginRoot(){

  this.navCtrl.setRoot(AuthentificationComponent);
}

inscription(){
  this.service.inscription(this.user).subscribe(data=>console.log(data));
}

}
