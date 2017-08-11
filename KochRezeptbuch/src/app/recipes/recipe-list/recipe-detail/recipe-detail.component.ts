import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../../../services/recipe.service";
import {FoodRecipe} from "../../../../model/food-recipe";

/*
 Diese Component wird angezeigt, wenn man auf einen Rezepteintrag in der Rezeptliste klickt.
 */
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: []
})
export class RecipeDetailComponent implements OnInit {

  private ingredients: FoodRecipe[] = []; // Zutaten des Rezeptes
  private isClicked = false;    // zum überprüfen ob das Rezept schon geklickt wurde

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {

    // Weist die Zutaten des übergebenen Rezeptes auf ein Array zu, falls das Rezept schon geklickt wurde
    // ist this.isClicked true und das Zutatenarray wird gelöscht sowie die Anzeige im Template durch ngIf deaktiviert.
    this.recipeService.recipeSelected.subscribe((recipe) => {
        if (this.isClicked === false) {
          for (let key in recipe.ingredients) {
            this.ingredients.push(recipe.ingredients[key]);
          }
          this.isClicked = true;
        } else {
          this.ingredients = [];
          this.isClicked = false;
        }
      },
      (error) => console.log(error));
  }

}
