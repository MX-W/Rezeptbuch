import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";
import {RecipeService} from "../../../services/recipe.service";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-recipe-summation-nutrients',
  templateUrl: './recipe-summation-nutrients.component.html',
  styleUrls: ['./recipe-summation-nutrients.component.css']
})
export class RecipeSummationNutrientsComponent implements OnInit {

  private arrayInDrop: Food[] = [];
  private addedNutrients: Food;
  private recipeName: string = '';

  constructor(private ingredientService: IngredientService,
              private recipeService: RecipeService,
              private httpService: HttpService) {
  }

  ngOnInit() {
    this.ingredientService.newIngredientInDrop.subscribe((food: Food) => {
     this.arrayInDrop.push(food);
      this.sumUpNutrients();
    });

    this.recipeService.amountIsChanged.subscribe((data: Food) => {
      for (let food in this.arrayInDrop) {
        if (this.arrayInDrop[food].name = data.name) {
          this.arrayInDrop[food].amount = data.amount;
          this.sumUpNutrients();
        }
      }
    });
  }

  sumUpNutrients() {
    this.addedNutrients = new Food('', 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0);
    for (let key in this.arrayInDrop) {
      this.addedNutrients.carb += (this.arrayInDrop[key].carb * this.arrayInDrop[key].amount);
      this.addedNutrients.energy += (this.arrayInDrop[key].energy * this.arrayInDrop[key].amount);
      this.addedNutrients.fat += (this.arrayInDrop[key].fat * this.arrayInDrop[key].amount);
      this.addedNutrients.protein += (this.arrayInDrop[key].protein * this.arrayInDrop[key].amount);
      this.addedNutrients.ruffage += (this.arrayInDrop[key].ruffage * this.arrayInDrop[key].amount);
      this.addedNutrients.salt += (this.arrayInDrop[key].salt * this.arrayInDrop[key].amount);
      this.addedNutrients.sugar += (this.arrayInDrop[key].sugar * this.arrayInDrop[key].amount);
      this.addedNutrients.vitaminb6 += (this.arrayInDrop[key].vitaminb6 * this.arrayInDrop[key].amount);
      this.addedNutrients.vitaminc += (this.arrayInDrop[key].vitaminc * this.arrayInDrop[key].amount);
    }
  }

  recipeInDatabase() {
    if (this.recipeName !== '' || this.arrayInDrop !== []) {
      this.httpService.insertRecipe(this.arrayInDrop, this.recipeName)
        .subscribe(
          (data) => console.log(data),
          (error) => console.log(error)
        );
    }
  }

  setRecipeName(value: string) {
    this.recipeName = value;
  }

}
