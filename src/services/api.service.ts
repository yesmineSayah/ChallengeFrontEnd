import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {hostUrl} from './app.host';
import "rxjs";
@Injectable()
export class PostService {
  http: any;
  constructor(http: Http) {
    this.http = http;
  }
  getPosts() {

    return this.http.get(hostUrl+"/posts").map(response => response.json());
  }
}
