import { Component } from '@angular/core';
import {TabsPage} from '../tabs/tabs';
import { NavController, AlertController} from 'ionic-angular';
import {AuthService} from '../../services/api.service';
import { InscriptionComponent } from '../inscription/inscription';
@Component({
  selector: 'app-authentification',
  templateUrl: 'authentification.html',
  providers: [AuthService]
})
export class AuthentificationComponent {
  user: any = {};
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private service: AuthService) {

  }
  login() {
    this.service.login(this.user).subscribe(response => {
      if (response.success) {
        if (response.success == true) {
          this.navCtrl.setRoot(TabsPage);
        }
      }
    });
  }
  inscri() {
    this.navCtrl.setRoot(InscriptionComponent);
  }
}
