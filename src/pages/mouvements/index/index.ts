import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementDetails } from '../details/details';
import { MouvementsService } from '../../../services/mouvements.service';
import { MouvementMenu } from '../menu/menu';
@Component({
  selector: 'app-mouvement',
  templateUrl: 'index.html',
  providers: [MouvementsService]
})
export class MouvementPage {

  items: any;

  constructor(public navCtrl: NavController, private service: MouvementsService) {

  }
  ngOnInit() {
    this.service.getMouvements().subscribe(data => {
      this.items = data;
    });
  }
  detailsRoute(item){
    this.navCtrl.push(MouvementDetails,{item:item});
  }

  menuRoute(){
    this.navCtrl.push(MouvementMenu);
  }

}
