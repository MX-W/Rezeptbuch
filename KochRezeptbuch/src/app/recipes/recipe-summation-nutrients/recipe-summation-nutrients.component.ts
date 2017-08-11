import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";
import {isNull, isUndefined} from "util";

@Component({
  selector: 'app-recipe-summation-nutrients',
  templateUrl: './recipe-summation-nutrients.component.html',
  styleUrls: ['./recipe-summation-nutrients.component.css']
})
export class RecipeSummationNutrientsComponent implements OnInit {

  private arrayInDrop: Food[] = [];
  private addedNutrients: Food;
  private recipeName: string = '';

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {
    this.ingredientService.ingredientArrayInDrop.subscribe((array: Food[]) => {
      this.arrayInDrop = [];
      for (let key in array) {
        this.arrayInDrop.push(array[key]);
      }
      this.sumUpNutrients();
    });
  }

  sumUpNutrients() {
    this.addedNutrients = new Food('', 0, 0, 0, 0, 0, 0, 0, 0, 0, '');
    for (let key in this.arrayInDrop) {
      this.addedNutrients.carb += this.arrayInDrop[key].carb;
      this.addedNutrients.energy += this.arrayInDrop[key].energy;
      this.addedNutrients.fat += this.arrayInDrop[key].fat;
      this.addedNutrients.protein += this.arrayInDrop[key].protein;
      this.addedNutrients.ruffage += this.arrayInDrop[key].ruffage;
      this.addedNutrients.salt += this.arrayInDrop[key].salt;
      this.addedNutrients.sugar += this.arrayInDrop[key].sugar;
      this.addedNutrients.vitaminb6 += this.arrayInDrop[key].vitaminb6;
      this.addedNutrients.vitaminc += this.arrayInDrop[key].vitaminc;
    }
  }

  recipeInDatabase() {
    if (this.recipeName === '' || this.arrayInDrop === []) {
      
    }
  }

  setRecipeName(value: string) {
    this.recipeName = value;
  }

}
