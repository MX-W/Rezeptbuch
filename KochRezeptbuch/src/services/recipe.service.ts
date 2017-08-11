import {EventEmitter, Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Recipe} from "../model/recipe";
import {Food} from "../model/food";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  amountIsChanged = new EventEmitter<Food>();

  constructor(private dataService: DataService) {
  }

  getRecipeEntries() {
    return this.dataService.getRecipes();
  }

  checkIngredientInRecipe(recipes: Recipe[], ingredients: Food[]): Recipe[] {
    const recipesWithIngredient: Recipe[] = [];
    let isInArray = false;
    for (let recipe in recipes) {
      for (let ingredient in recipes[recipe].ingredients) {
        for (let food in ingredients) {
          if (recipes[recipe].ingredients[ingredient].name === ingredients[food].name) {
            for (let key in recipesWithIngredient) {
              if (recipes[recipe].name === recipesWithIngredient[key].name) {
                  isInArray = true;
              }
            }
            if (isInArray === false) {
              recipesWithIngredient.push(recipes[recipe]);
            }
          }
        }
      }
    }
    return recipesWithIngredient;
  }
}


