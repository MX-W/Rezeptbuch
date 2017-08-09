import {EventEmitter, Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Food} from "../model/food";

@Injectable()
export class IngredientService {

  ingredientSelected = new EventEmitter<Food>();

  constructor(private dataService: DataService) {
  }

    // this.dataService.getData('vegetable').subscribe((data) => this.veggieEntries = data);
    // this.dataService.getData('animal').subscribe((data) => this.animalEntries = data);

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
