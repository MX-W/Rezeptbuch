import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../../../services/recipe.service";
import {Recipe} from "../../../../model/recipe";
import {FoodRecipe} from "../../../../model/food-recipe";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: []
})
export class RecipeDetailComponent implements OnInit {

  private ingredients: FoodRecipe[] = [];
  private isClicked = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe) => {
      if (this.isClicked === false) {
        for (let key in recipe.ingredients) {
          this.ingredients.push(recipe.ingredients[key]);
          console.log(recipe.ingredients[key]);
        }
        this.isClicked = true;
      } else {
        this.ingredients = [];
        this.isClicked = false;
      }
    });
  }

}
