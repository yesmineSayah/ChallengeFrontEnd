import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementDetails } from '../details/details';
import { MouvementMy } from '../myMouvements/my';
import { MouvementPage } from '../index/index';
@Component({
  selector: 'app-mouvementmenu',
  templateUrl: 'menu.html'
})
export class MouvementMenu {
  items: any;

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
  }

  indexRoute(){
    this.navCtrl.setRoot(MouvementPage,null,{animate:true,direction:"forward"});
  }

  myRoute(){
    this.navCtrl.setRoot(MouvementMy,null,{animate:true,direction:"forward"});
  }

  backRoute(){
    this.navCtrl.pop();
  }
}
