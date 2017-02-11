import { Component } from '@angular/core';
import {ProfileMenu} from '../menuProfile/menuProfile';
import { NavController } from 'ionic-angular';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user :any;
  constructor(public navCtrl: NavController,private storage:LocalStorageService) {

  }
  ngOnInit() {
    this.user = this.storage.get("user");
  }

  menuProfileRoute(){
    this.navCtrl.push(ProfileMenu);
  }
}
