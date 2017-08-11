import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../../../services/recipe.service";
import {Recipe} from "../../../../model/recipe";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  private recipe: Recipe;
  private isClicked = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      if (this.isClicked === false) {
        this.recipe = recipe;
        this.isClicked = true;
      } else {
        this.recipe = null;
        this.isClicked = false;
      }
    });
  }

}
