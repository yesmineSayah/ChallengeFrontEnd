import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {hostUrl} from './app.host';
import "rxjs";
import { LocalStorageService } from 'angular-2-local-storage';
@Injectable()
export class MouvementsService {
  http: any;
  constructor(http: Http, private storage: LocalStorageService) {
    this.http = http;
  }
  getMouvements() {
    return this.http.get(hostUrl + "/api/mouvements").map(response => response.json());
  }
  getMouvementsByAuthor(user) {
    return this.http.get(hostUrl + "/api/mouvements/byauthor/" + user._id).map(response => response.json());
  }
}
