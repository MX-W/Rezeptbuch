
import {HttpService} from './http.service';
import {OriginFood} from '../interfaces/origin-food';
import {Food} from '../model/food';
import {Injectable} from '@angular/core';
/**
 * Created by Max on 12.07.2017.
 */

@Injectable()
export class DataService {
  constructor (private http: HttpService) {

  }

  getData() {
    return this.http.sendRequest(this.http.getFoodURL())
      .map((originFood: OriginFood) => new Food(originFood));
  }
}
