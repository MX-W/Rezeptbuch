///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {OriginFood} from '../interfaces/origin-food-list';
import {Food} from "../model/food";
import {Recipe} from "../model/recipe";
import {FoodRecipe} from "../model/food-recipe";

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
    } else if (requestID === 4) {
      this.foodURL += 'Gerichte.json';
    } else {
      console.log('Falsche ID übergeben, URL konnte nicht erzeugt werden.')
    }
    return this.foodURL;
  }

  sendRequest(endpoint: string) {
    return this.http.get(endpoint).map((response) => response.json());
  }

  insertRecipe(ingredients: Food[], name: string) {
    const body = JSON.stringify(this.getJSON(ingredients, name));
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post(this.getFoodURL(4), body, { headers: headers });
  }

  getJSON(ingredients: Food[], recipeName: string) {
    const ingredientArray: FoodRecipe[] = [];
    for (let key in ingredients) {
      ingredientArray.push(new FoodRecipe(ingredients[key].name, ingredients[key].amount));
    }
    return {
      name: recipeName,
      picture: '',
      ingredients: ingredientArray
    };
  }
}
