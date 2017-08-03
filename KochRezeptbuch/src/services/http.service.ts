///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {OriginFoodList} from '../interfaces/origin-food-list';

@Injectable()
export class HttpService {

  // private _baseURL = 'http://api.nal.usda.gov/ndb/nutrients/?';
  private foodURL: string;
  private _baseURL: string = 'https://foodbase-5af92.firebaseio.com/';
  // private apiAcessToken = '?acess_token=AIzaSyCTeb5qDSRXqs6sezkNl6t_uFsbrmS1KMI';

  constructor( private http: Http) {

  }

  getFoodURL(requestID: number) {
    this.foodURL = this._baseURL;
    if (requestID === 1) {
      this.foodURL += 'Obst.json';
    }else if (requestID === 2) {
      this.foodURL += 'Gemuese.json';
    }else if (requestID === 3) {
      this.foodURL += 'Tierische%20Lebensmittel.json';
    }
    return this.foodURL;
  }

  sendRequest(requestID: number) {
    return this.http.get(this.getFoodURL(requestID)).map((response) => response.json());
  }
}
