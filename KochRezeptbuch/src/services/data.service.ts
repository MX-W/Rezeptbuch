import {HttpService} from './http.service';
import {OriginFood} from '../interfaces/origin-food-list';
import {Food} from '../model/food';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ObjectUnsubscribedError} from "rxjs/Rx";
import {Recipe} from "../model/recipe";
/**
 * Created by Max on 12.07.2017.
 */

@Injectable()
export class DataService {
  constructor(private http: HttpService) {

  }

  getData(categoryToCatch: string): Observable<Food[]> {
    if (categoryToCatch === 'fruit') {
      return this.http.sendRequest(this.http.getFoodURL(1)).map((response) => this.mapResponse(response));
    } else if (categoryToCatch === 'vegetable') {
      return this.http.sendRequest(this.http.getFoodURL(2)).map((response) => this.mapResponse(response));
    } else if (categoryToCatch === 'animal') {
      return this.http.sendRequest(this.http.getFoodURL(3)).map((response) => this.mapResponse(response));
    }
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.sendRequest((this.http.getFoodURL(4))).map((response) => this.mapRecipes(response));
  }

  mapResponse(response) {
    const returnArray = [];
    for (let key in response) {
      returnArray.push(new Food(
        response[key].name,
        response[key].energy,
        response[key].carb,
        response[key].fat,
        response[key].protein,
        response[key].ruffage,
        response[key].salt,
        response[key].sugar,
        response[key].vitaminb6,
        response[key].vitaminc,
        response[key].picture,
        1
      ));
    }
    return returnArray;
  }

  mapRecipes(response) {
    const returnArray = [];
    for (let key in response) {
      returnArray.push(new Recipe(
        response[key].name,
        response[key].picture,
        response[key].ingredients
      ));
    }
    return returnArray;
  }
}
