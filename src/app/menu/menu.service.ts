import {Injectable, Component} from '@angular/core';
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Menu} from './menu';

@Injectable()
export class MenuService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private menuUrl = 'app/menu';

  constructor(private  http: Http) {
  }

  getMenu(): Promise<Menu[]> {
    return this.http.get(this.menuUrl)
      .toPromise()
      .then(response => response.json().data as Menu[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An Error Occurred', error);
    return Promise.reject(error.message || error);
  }


}
