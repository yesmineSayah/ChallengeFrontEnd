import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/api.service';

@Component({
  selector: 'app-profileedit',
  templateUrl: 'editProfile.html',
  providers : [AuthService]

})
export class EditProfilePage {
user : any={};
  constructor(public navCtrl: NavController,private service:AuthService) {

  }
  ngOnInit(){

  }

  editProfile(){
      this.service.editProfile(this.user).subscribe();
  }

}
