import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementsService } from '../../../services/mouvements.service';
import { MouvementMenu } from '../menu/menu';
@Component({
  selector: 'app-mouvementmy',
  templateUrl: 'my.html',
  providers: [MouvementsService]
})
export class MouvementMy {
items: any;
  constructor(public navCtrl: NavController, private service: MouvementsService) {

  }
  ngOnInit(){
    this.service.getMouvements().subscribe(data => {
      this.items = data;
    });
  }
  menuRoute(){
    this.navCtrl.push(MouvementMenu);
  }
}
