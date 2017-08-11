import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../../services/recipe.service";
import {Recipe} from "../../../model/recipe";
import {IngredientService} from "../../../services/ingredients.service";

/*
 Diese Component verwaltet die Rezepteinträge die angezeigt werden sollen.
 */
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  private recipeEntries: Recipe[] = [];  // Alle Rezepteinträge aus der Datenbank

  private recipeDisplay: Recipe[] = [];  // Die Rezepte die angezeigt werden sollen.

  constructor(private ingredientService: IngredientService,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    // Rezepte aus der Datenbank wird dem Array zugewiesen.
    this.recipeService.getRecipeEntries().subscribe((data: Recipe[]) => {
      for (let key in data) {
        this.recipeEntries.push(data[key]);
      }
    });

    // erhält das Array von Foodeinträgen im Drop-Bereich und leitet es weiter an den RecipeService
    this.ingredientService.ingredientArrayInDrop.subscribe((data) => {
        this.recipeDisplay = this.recipeService.checkIngredientInRecipe(this.recipeEntries, data);
      },
      (error) => console.log(error));

  }
}
