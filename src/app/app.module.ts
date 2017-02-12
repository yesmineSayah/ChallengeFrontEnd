import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AuthentificationComponent} from '../pages/authentification/authentification';
import {InscriptionComponent} from '../pages/inscription/inscription';
import {MouvementModule} from '../pages/mouvements/mouvement.module';
import {ProfilePage} from '../pages/profile/profile';
import { LocalStorageModule } from 'angular-2-local-storage';
import {ProfileMenu} from '../pages/menuProfile/menuProfile';
import {EditProfilePage} from '../pages/editProfile/editProfile';
import {BienvenuePage} from '../pages/bienvenue/bienvenue';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthentificationComponent,
    InscriptionComponent,
    ProfilePage,
    ProfileMenu,
    EditProfilePage,
    BienvenuePage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MouvementModule,
    LocalStorageModule.withConfig({
           prefix: 'hackathon',
           storageType: 'localStorage'
       })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthentificationComponent,
    InscriptionComponent,
    ProfilePage,
    ProfileMenu,
    EditProfilePage,
    BienvenuePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
