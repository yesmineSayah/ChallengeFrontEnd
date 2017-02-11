import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {hostUrl} from './app.host';
import "rxjs";
import { LocalStorageService } from 'angular-2-local-storage';
@Injectable()
export class AuthService {
  http: any;
  constructor(http: Http, private storage: LocalStorageService) {
    this.http = http;
  }
  login(user) {
    return this.http.post(hostUrl + "/api/authentification/login", user).map(response => {
      response.json();
    });
  }
  inscription(user) {
    return this.http.post(hostUrl + "/api/authentification/register", user).map(response => response.json());
  }

  profile(){
    
  }
}
