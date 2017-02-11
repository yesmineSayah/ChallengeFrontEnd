import { Component } from '@angular/core';
import {TabsPage} from '../tabs/tabs';
import { NavController , AlertController} from 'ionic-angular';
import {AuthService} from '../../services/api.service';

@Component({
  selector: 'app-authentification',
  templateUrl: 'authentification.html',
  providers : [AuthService]
})
export class AuthentificationComponent {
user : any={};
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private service:AuthService) {

  }
 login()
{
  this.service.login(this.user).subscribe(data=>{
    if(data.success===true){
      this.navCtrl.setRoot(TabsPage);
    }
  });
}
}
