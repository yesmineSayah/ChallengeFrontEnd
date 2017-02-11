import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EditProfilePage} from '../editProfile/editProfile';
import {ProfilePage} from '../profile/profile';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-profilemenu',
  templateUrl: 'menuProfile.html'
})
export class ProfileMenu {
  items: any;
  user :any;

  constructor(public navCtrl: NavController,private storage:LocalStorageService) {

  }
  ngOnInit() {
  
  }

  editProfileRoute(){
    this.navCtrl.setRoot(EditProfilePage,null,{animate:true,direction:"forward"});
  }
// changePwdRoute(){
//     this.navCtrl.setRoot(ChangePwdPage,null,{animate:true,direction:"forward"});
//   }

  backRoute(){
    this.navCtrl.pop();
  }
}
