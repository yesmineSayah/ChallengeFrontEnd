import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MouvementsService } from '../../../services/mouvements.service';
import { MouvementMy} from '../myMouvements/my';
@Component({
  selector: 'app-mouvementedit',
  templateUrl: 'edit.html',
  providers: [MouvementsService]
})
export class MouvementEdit {

  mouvement: any;
  add: boolean = false;
  besoin: any = {};
  constructor(public navCtrl: NavController, private NavParams: NavParams, private service: MouvementsService) {
    this.mouvement = NavParams.get('item');
  }
  ngOnInit() {

  }
  validate() {
    this.service.updateMouvement(this.mouvement).subscribe(data => {
      this.cancel();
    });
  }
  cancel() {
    this.navCtrl.setRoot(MouvementMy, null, { animate: true, direction: "forward" });
  }

}
