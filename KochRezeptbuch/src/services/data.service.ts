
import {HttpService} from './http.service';
import {OriginFoodList} from '../interfaces/origin-food-list';
import {FoodList} from '../model/food-list';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
/**
 * Created by Max on 12.07.2017.
 */

@Injectable()
export class DataService {
  constructor (private http: HttpService) {

  }

  getData(categoryToCatch: string) {
    if (categoryToCatch === 'fruit'){
      return this.http.sendRequest(1);
    }else if (categoryToCatch === 'vegetable') {
      return this.http.sendRequest(2);
    }else if (categoryToCatch === 'animal') {
      return this.http.sendRequest(3);
    }
  }
}
