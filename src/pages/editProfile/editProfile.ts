import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/api.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-profileedit',
  templateUrl: 'editProfile.html',
  providers : [AuthService]

})
export class EditProfilePage {
user : any={};
  constructor(public navCtrl: NavController,private service:AuthService,private storage:LocalStorageService,
  public toastCtrl: ToastController) {

  }
  ngOnInit(){
    this.user = this.storage.get('user');
  }

  editProfile(){
    delete this.user._id;
      this.service.editProfile(this.user).subscribe(()=>{
        let toast = this.toastCtrl.create({
              message: 'Profile Modifié',
              duration: 2000
            });
            toast.present();
      });
  }

}
