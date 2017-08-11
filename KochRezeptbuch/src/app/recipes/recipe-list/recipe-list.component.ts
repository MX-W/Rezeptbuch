import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../../services/recipe.service";
import {Recipe} from "../../../model/recipe";
import {FoodRecipe} from "../../../model/food-recipe";
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  private recipeEntries: Recipe[] = [];
  private ingredientInMiddle: Food[] = [];
  private recipeDisplay: Recipe[] = [];

  constructor(private ingredientService: IngredientService,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getRecipeEntries().subscribe((data: Recipe[]) => {
      for (let key in data) {
        this.recipeEntries.push(data[key]);
      }
    });

    this.ingredientService.ingredientInRecipeCheck.subscribe((data) => {
      this.recipeDisplay = this.recipeService.checkIngredientInRecipe(this.recipeEntries, data);
    });


  }

}
