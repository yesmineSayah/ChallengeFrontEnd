import { Component } from '@angular/core';
import { MouvementPage } from '../mouvements/index/index';
import { MouvementDetails } from '../mouvements/details/details';
import { HomePage } from '../home/home';
import {MouvementCreate} from '../mouvements/create/create';
import {MouvementEdit} from '../mouvements/edit/edit';
import {MouvementMyDetails} from '../mouvements/myDetails/myDetails';
import {MouvementMy} from '../mouvements/myMouvements/my';
import {MouvementMenu} from '../mouvements/menu/menu';
import {ProfilePage} from '../profile/profile';
import { MouvementCheckin } from '../mouvements/checkin/checkin';
@Component({
  templateUrl: 'tabs.html',
  entryComponents: [
    MouvementPage,
    MouvementDetails,
    MouvementCreate,
    MouvementEdit,
    MouvementMyDetails,
    MouvementMy,
    MouvementMenu,
    MouvementCheckin
  ]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MouvementPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
