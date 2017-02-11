import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementsService } from '../../../services/mouvements.service';
import { MouvementMenu } from '../menu/menu';
import { LocalStorageService } from 'angular-2-local-storage';
import { MouvementMyDetails } from '../myDetails/myDetails';
@Component({
  selector: 'app-mouvementmy',
  templateUrl: 'my.html',
  providers: [MouvementsService]
})
export class MouvementMy {
items: any;
  constructor(public navCtrl: NavController, private service: MouvementsService,private storage:LocalStorageService) {

  }
  ngOnInit(){
    this.service.getMouvementsByMember(this.storage.get('user')).subscribe(data => {
      this.items = data;
    });
  }
  menuRoute(){
    this.navCtrl.push(MouvementMenu);
  }
  detailsRoute(item){
    this.navCtrl.push(MouvementMyDetails,{item:item});
  }
}
