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
        "_id": "589f2cc0689fad129a03ea76",
        "email": "dwd@jn.com",
        "salt": "vJXNRfjd",
        "firstName": "khaled",
        "lastName": "Romdhane",
        "tel": "24998628",
        "adresse": "tahar haddad"
      });
    }
    if (!this.storage.get('token')) {
      this.storage.set('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR3ZEBqbi5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCQwS3VLZS5YMWtkbjF3d1VZcE8uVVFPcEV6bkxCem5aMWpWRVdqQ0ozV2dJblhKVDgyangvVyIsImlhdCI6MTQ4Njg1MTg0MSwiZXhwIjoxNDg2ODU1NDQxfQ.4Yb-9UQN-W3XXeGVhD4KwRWXse4LdCVRKxGwlfCodY4");
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
