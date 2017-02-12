import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementMy } from '../myMouvements/my';
import { MouvementPage } from '../index/index';
import { MouvementCreate } from '../create/create';
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

  createRoute(){
    this.navCtrl.setRoot(MouvementCreate,null,{animate:true,direction:"forward"});
  }

  myRoute(){
    this.navCtrl.setRoot(MouvementMy,null,{animate:true,direction:"forward"});
  }

  backRoute(){
    this.navCtrl.pop();
  }
}
