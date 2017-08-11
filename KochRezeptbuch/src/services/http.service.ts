import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Food} from "../model/food";
import {FoodRecipe} from "../model/food-recipe";

/*
  Dieser Service kümmert sich um die Anfragen und Submissions an die Datenbank.
 */
@Injectable()
export class HttpService {

  private foodURL: string;
  private _baseURL: string = 'https://foodbase-5af92.firebaseio.com/';

  constructor( private http: Http) {

  }

  // Gibt die komplette URL für die gewünschten Daten der Datenbank zurück.
  // 1: Obst
  // 2: Gemüse
  // 3: Tierische Lebensmittel
  // 4: Rezepte
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

  // Sendet eine Anfrage an die Datenbank um die Daten von endpoint zu bekommen.
  sendRequest(endpoint: string) {
    return this.http.get(endpoint).map((response) => response.json());
  }

  // stellt eine Verbindung zur Datenbank her und übermittelt die Daten für das neue Rezept
  insertRecipe(ingredients: Food[], name: string) {
    const body = JSON.stringify(this.getJSON(ingredients, name));
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post(this.getFoodURL(4), body, { headers: headers });
  }

  // gibt JSON-String für das Rezept zurück
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
