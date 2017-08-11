import {HttpService} from './http.service';
import {Food} from '../model/food';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Recipe} from "../model/recipe";

/*
  Dieser Service verarbeitet die von der Datenbank kommenden Daten weiter und mapped sie auf das Datenmodell.
 */
@Injectable()
export class DataService {
  constructor(private http: HttpService) {

  }

  // Bekommt die Zutatendaten aus der Datenbank.
  getData(categoryToCatch: string): Observable<Food[]> {
    if (categoryToCatch === 'fruit') {
      return this.http.sendRequest(this.http.getFoodURL(1)).map((response) => this.mapResponse(response));
    } else if (categoryToCatch === 'vegetable') {
      return this.http.sendRequest(this.http.getFoodURL(2)).map((response) => this.mapResponse(response));
    } else if (categoryToCatch === 'animal') {
      return this.http.sendRequest(this.http.getFoodURL(3)).map((response) => this.mapResponse(response));
    }
  }

  // Bekommt die Rezeptdaten aus der Datenbank.
  getRecipes(): Observable<Recipe[]> {
    return this.http.sendRequest((this.http.getFoodURL(4))).map((response) => this.mapRecipes(response));
  }

  // Mapped das Response Array auf Food-Model
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

  // Mapped das Response Array auf Rezept-Model
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
