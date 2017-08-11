import {EventEmitter, Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Recipe} from "../model/recipe";
import {Food} from "../model/food";

/*
  Dieser Service kümmert sich um jeglichen Datenaustausch der Rezepte betrifft.
 */
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();    // EventEmitter für gelicktes recipe-item in recipe-list


  constructor(private dataService: DataService) {
  }

  // Bekommt über DataService und HttpService alle Rezepteinträge aus der Datenbank.
  getRecipeEntries() {
    return this.dataService.getRecipes();
  }

  // Algorithmus um festzustellen ob eine der Zutaten im Drop-Bereich in einem der Rezepte enthalten ist
  // und wenn ja, ob das Rezept nicht schon in der Ausgabe-Liste steht.
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


