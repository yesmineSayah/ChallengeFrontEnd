import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MouvementsService} from '../../../services/mouvements.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-mouvementcheckin',
  templateUrl: 'checkin.html',
  providers: [MouvementsService]
})
export class MouvementCheckin {

  besoin: any = {};
  item;
  quantity;
  still = [];
  cont: any = {};
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private service: MouvementsService,
    private NavParams: NavParams,
    private storage: LocalStorageService,
    public toastCtrl: ToastController) {
    this.item = NavParams.get('item');
  }
  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this.still = new Array();
    for (var j = 0; j < this.item.needs.length; j++) {
      var newObj = {
        title: this.item.needs[j].title,
        quantity: this.item.needs[j].quantity,
        description: this.item.needs[j].description
      }
      this.still.push(newObj);
      if (this.item.aquired) {
        for (var i = 0; i < this.item.aquired.length; i++) {
          if (this.item.aquired[i].title == this.item.needs[j].title) {
            this.still[j].quantity = this.still[j].quantity - this.item.aquired[i].quantity;
          }
        }
      }
    }
    for (var i = 0; i < this.still.length; i++) {
      if (this.still[i].quantity == 0) {
        this.still.splice(i, 1);
      }
    }
  }
  add() {
    if (this.besoin.title != undefined && this.quantity != undefined) {
      if (!this.item.aquired) {
        this.item.aquired = [];
      }
      this.besoin.quantity = this.quantity;
      this.item.aquired.push(this.besoin);
      this.besoin = {};
      this.quantity = null;
      this.refreshTable();
    }
  }

  addCont() {
    var newObj = {
      title: this.cont.title,
      quantity: this.cont.quantity,
      description: this.cont.description
    }
    this.item.aquired.push(newObj);
    this.cont = {};
  }

  validate() {
    if (!this.item.members) {
      this.item.members = [];
    }
    let toast = this.toastCtrl.create({
      message: 'Contribution Sauvegardée',
      duration: 2000
    });
    toast.present();
    this.service.updateParticpateMouvement(this.item).subscribe(data => {
      this.navCtrl.pop();
    })
  }

}
