import { Component } from '@angular/core';
import {PostService} from '../../services/api.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [PostService]
})
export class HomePage {

  constructor(public navCtrl: NavController, private postService:PostService) {

  }
  ngOnInit(){
       this.postService.getPosts().subscribe(data=>console.log(data));
  }
   
}
