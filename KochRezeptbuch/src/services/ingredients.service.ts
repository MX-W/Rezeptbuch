import {EventEmitter, Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Food} from "../model/food";

@Injectable()
export class IngredientService {

  ingredientSelected = new EventEmitter<Food>();
  ingredientArrayInDrop = new EventEmitter<Food[]>();

  constructor(private dataService: DataService) {
  }

  getFruitEntries() {
    return this.dataService.getData('fruit');
  }

  getVeggieEntries() {
    return this.dataService.getData('vegetable');
  }

  getAnimalEntries() {
    return this.dataService.getData('animal');
  }

}
