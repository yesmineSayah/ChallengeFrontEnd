import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {hostUrl} from './app.host';
import "rxjs";
@Injectable()
export class MouvementsService {
  http: any;
  constructor(http: Http) {
    this.http = http;
  }
  getMouvements() {
    return this.http.get(hostUrl + "/api/mouvements").map(response => response.json());
  }
}
