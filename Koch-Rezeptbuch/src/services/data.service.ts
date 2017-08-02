
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

  getData(): Observable<FoodList> {
    return this.http.sendRequest(this.http.getFoodURL())
      .map((originFood: OriginFoodList) => new FoodList(originFood));
  }
}
