import {EventEmitter, Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Recipe} from "../model/recipe";
import {Food} from "../model/food";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private dataService: DataService) {
  }

  getRecipeEntries() {
    return this.dataService.getRecipes();
  }

  checkIngredientInRecipe(recipes: Recipe[], ingredients: Food[]): Recipe[] {
    const recipesWithIngredient: Recipe[] = [];
    for (let recipe in recipes) {
      for (let food in ingredients) {
        for (let ingredient in recipes[recipe].ingredients)
        if(recipes[recipe].ingredients[ingredient].name === ingredients[food].name) {
          recipesWithIngredient.push(recipes[recipe]);
        }
      }
    }
    return recipesWithIngredient;
  }
}
