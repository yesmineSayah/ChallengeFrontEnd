import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
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
    if (!this.storage.get('user')) {
      this.storage.set('user', {
        "_id": "589f17d21533b124b818b6f8",
        "email": "dwd@jn.com",
        "salt": "8ac7hECL",
        "firstName": "khaled",
        "lastName": "Romdhane",
        "tel": "24998628",
        "adresse": "tahar haddad"
      });
    }
    if (!this.storage.get('token')) {
      this.storage.set('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlaXl1a2lAbGl2ZS5mciIsInBhc3N3b3JkIjoiJDJhJDEwJGw4dXJ1ckFFd2VGQnVFbWNEclVDLmU2empOYnhuRWpVRUV2L0lING00UTBodUJud0hoR0dXIiwiaWF0IjoxNDg2ODQyNzE1LCJleHAiOjE0ODY4NDYzMTV9.LrS9GGsgzuywXKmL4HdS-eQrolB5K88SNKyBjeuVV3U");
    }
    return this.http.get(hostUrl + "/api/mouvements").map(response => response.json());
  }
  getMouvementsByAuthor(user) {
    return this.http.get(hostUrl + "/api/mouvements/byauthor/" + user._id).map(response => response.json());
  }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', <string>this.storage.get("token"));
  }
  createMouvement(mouvement) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(hostUrl + "/api/mouvements", mouvement, { headers: headers }).map(response => response.json());
  }
}
