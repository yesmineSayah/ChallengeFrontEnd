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
        "email": "heiyuki@live.fr",
        "salt": "8ac7hECL",
        "firstName": "khaled",
        "lastName": "Romdhane",
        "tel": "24998628",
        "adresse": "tahar haddad"
      });
    }
    if (!this.storage.get('token')) {
      this.storage.set('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlaXl1a2lAbGl2ZS5mciIsInBhc3N3b3JkIjoiJDJhJDEwJGw4dXJ1ckFFd2VGQnVFbWNEclVDLmU2empOYnhuRWpVRUV2L0lING00UTBodUJud0hoR0dXIiwiaWF0IjoxNDg2ODU4ODQzLCJleHAiOjE0ODY4NjI0NDN9.V_kO5fNou-blVDuu0vyrENaMPTpQo4b5pCP3ScLd7tU");
    }
    return this.http.get(hostUrl + "/api/mouvements").map(response => response.json());
  }
  getMouvementsByMember(user) {
    return this.http.get(hostUrl + "/api/mouvements/bymember/" + user._id).map(response => response.json());
  }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', <string>this.storage.get("token"));
  }
  createMouvement(mouvement) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(hostUrl + "/secure/mouvements", mouvement, { headers: headers }).map(() => {});
  }
  updateMouvement(mouvement){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(hostUrl + "/secure/mouvements/"+mouvement._id, mouvement, { headers: headers }).map(() => {});
  }
  deleteMouvement(mouvement){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(hostUrl + "/secure/mouvements/"+mouvement._id, mouvement, { headers: headers }).map(() => {});
  }
}
