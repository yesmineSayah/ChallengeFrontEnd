import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementMenu } from '../menu/menu';

@Component({
  selector: 'app-mouvementcreate',
  templateUrl: 'create.html'
})
export class MouvementCreate {

mouvement:any = {};
  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){

  }
  menuRoute(){
    this.navCtrl.push(MouvementMenu);
  }

}
