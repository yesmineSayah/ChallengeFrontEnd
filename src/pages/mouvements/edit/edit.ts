import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MouvementsService } from '../../../services/mouvements.service';
import { MouvementMy} from '../myMouvements/my';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'app-mouvementedit',
  templateUrl: 'edit.html',
  providers: [MouvementsService]
})
export class MouvementEdit {

  mouvement: any;
  add: boolean = false;
  besoin: any = {};
  constructor(public navCtrl: NavController, private NavParams: NavParams, private service: MouvementsService, private alertCtrl: AlertController) {
    this.mouvement = NavParams.get('item');
  }
  ngOnInit() {

  }
  toggleBesoin() {
    if (this.add) {
      this.add = false;
    }
    else {
      this.add = true;
    }
  }
  addBesoin() {

    var b = {
      title: this.besoin.title,
      description: this.besoin.description,
      quantity: this.besoin.quantity
    };
    this.besoin = {};
    this.mouvement.needs.push(b);
    this.toggleBesoin();
  }
  showConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Attention',
      message: 'Souhaitez-vous vraiment supprimer ce besoin?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
          }
        },
        {
          text: 'Oui',
          handler: () => {
            var index = -1;
            for (var i = 0; i < this.mouvement.needs.length; i++) {
              if (this.mouvement.needs[i].title == item.title) {
                index = i;
                break;
              }
            }
            if (index > -1) {
              this.mouvement.needs.splice(index, 1);
            }
          }
        }
      ]
    });
    confirm.present();
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
