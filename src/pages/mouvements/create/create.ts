import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MouvementMenu } from '../menu/menu';
import { MouvementPage} from '../index/index';
import { AlertController } from 'ionic-angular';
import { MouvementsService} from '../../../services/mouvements.service';
@Component({
  selector: 'app-mouvementcreate',
  templateUrl: 'create.html',
  providers : [MouvementsService]
})
export class MouvementCreate {

  mouvement: any = { needs: [] };
  add: boolean = false;
  besoin: any = {};
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,private service:MouvementsService) {

  }
  ngOnInit() {

  }
  cancel() {
    this.navCtrl.setRoot(MouvementPage, null, { animate: true, direction: "forward" });
  }
  menuRoute() {
    this.navCtrl.push(MouvementMenu);
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
      description: this.besoin.description
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

  create(){
    this.service.createMouvement(this.mouvement).subscribe(data=>{
        this.cancel();
    });
  }

}
