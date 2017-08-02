///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {OriginFoodList} from '../interfaces/origin-food-list';

@Injectable()
export class HttpService {

  private _baseURL = 'http://api.nal.usda.gov/ndb/nutrients/?';
  private format = 'format=json';
  private apiKey = '&api_key=9wS8rVgVznjkXpqCbdmY5SgVy808hfnk18eBuv7N';
  private abridgedList = '&subset=1';
  private measureByGrams = '&measureby=g';
  private _nutrient = '&nutrients=';
  private idFruits = '0900';
  private idVegetables = '1100';
  private idKCAL = '208';
  private idFatAcids = 605;
  private idSaturatedFatAcids = 606;
  private idFructose = 212;
  private idGlucose = 211;
  private idIron = 303;
  private idLactose = 304;
  private idProtein = 203;
  private idSugar = 269;
  private idVitaminB12 = 418;
  private idVitaminC = 401;
  private idWater = 255;

  constructor( private http: Http) {

  }

  getFoodURL() {
    return this._baseURL + this.format + this.apiKey + this.abridgedList + '&fg=' + this.idFruits
      + this._nutrient + this.idKCAL + this.measureByGrams;
  }

  sendRequest(endpoint: string): Observable<OriginFoodList> {
    return this.http.get(endpoint).map((response) => response.json().report.foods);
  }
}

