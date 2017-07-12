///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {OriginFood} from '../interfaces/origin-food';

@Injectable()
export class HttpService {

  private _baseURL: string = 'http://api.nal.usda.gov/ndb/nutrients/?';
  private format: string = 'format=json';
  private apiKey: string = '&api_key=9wS8rVgVznjkXpqCbdmY5SgVy808hfnk18eBuv7N';
  private _nutrient: string = '&nutrients=';
  private idFruits: string = '0900';
  private idVegetables: string = '1100';
  private idKCAL: string = '208';
  private idFatAcids : number = 605;
  private idSaturatedFatAcids : number = 606;
  private idFructose : number = 212;
  private idGlucose : number = 211;
  private idIron : number = 303;
  private idLactose : number = 304;
  private idProtein : number = 203;
  private idSugar : number = 269;
  private idVitaminB12 : number = 418;
  private idVitaminC : number = 401;
  private idWater : number = 255;

  constructor( private http: Http) {

  }

  getFoodURL() {
    return this._baseURL + this.format + this.apiKey + '&fg=' + this.idFruits + '&fg=' + this.idVegetables + this._nutrient + this.idKCAL;
  }

  sendRequest(endpoint: string) : Observable<OriginFood> {
    return this.http.get(endpoint).map((response) => response.json());
  }
}

