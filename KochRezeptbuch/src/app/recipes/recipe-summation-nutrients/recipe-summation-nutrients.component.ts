import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";
import {RecipeService} from "../../../services/recipe.service";
import {HttpService} from "../../../services/http.service";

/*
 Diese Component bekommt ein Array aus Zutaten übergeben, addiert
 die Nährstoffe dieser und gibt die berechneten Werte aus.
 Außerdem ist sie zuständig für das Eintragen von neuen Rezepten in die Datenbank.
 */
@Component({
  selector: 'app-recipe-summation-nutrients',
  templateUrl: './recipe-summation-nutrients.component.html',
  styleUrls: ['./recipe-summation-nutrients.component.css']
})
export class RecipeSummationNutrientsComponent implements OnInit {

  private arrayInDrop: Food[] = [];   // Array von Zutaten
  private addedNutrients: Food;   // Food-Objekt, welches die addierten Nährstoffe enthält
  private recipeName: string = '';    // Der Name des Rezeptes, sobald ein Wert in das Input-Feld eingegeben wird

  constructor(private ingredientService: IngredientService,
              private recipeService: RecipeService,
              private httpService: HttpService) {
  }

  ngOnInit() {

    // Jedes mal wenn eine neue Zutat in die Mitte gezogen wird bekommt die Component sie hier übergeben
    // und die Anzeige aktualisiert
    this.ingredientService.ingredientArrayInDrop.subscribe((food: Food[]) => {
        this.arrayInDrop = [];
        for( let key in food) {
          this.arrayInDrop.push(food[key]);
        }
        this.sumUpNutrients();
        console.log(this.arrayInDrop);
      },
      (error) => console.log(error));

    // Sobald die Menge einer Zutat geändert wird, wird sie im Foodeintrag aktualisiert sowie die Anzeige aktualisiert.
    this.ingredientService.amountIsChanged.subscribe((data: Food) => {

        for (let food in this.arrayInDrop) {
          if (this.arrayInDrop[food].name === data.name) {
            this.arrayInDrop[food].amount = data.amount;
            this.sumUpNutrients();
          }
        }
      },
      (error) => console.log(error));
  }

  // Aktualisiert die Ausgabe für die Gesamtmenge an Nährstoffen in den Zutaten
  sumUpNutrients() {
    this.addedNutrients = new Food('', 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0);
    for (let key in this.arrayInDrop) {
      this.addedNutrients.carb += Math.ceil(this.arrayInDrop[key].carb * this.arrayInDrop[key].amount);
      this.addedNutrients.energy += Math.ceil(this.arrayInDrop[key].energy * this.arrayInDrop[key].amount);
      this.addedNutrients.fat += Math.ceil(this.arrayInDrop[key].fat * this.arrayInDrop[key].amount);
      this.addedNutrients.protein += Math.ceil(this.arrayInDrop[key].protein * this.arrayInDrop[key].amount);
      this.addedNutrients.ruffage += Math.ceil(this.arrayInDrop[key].ruffage * this.arrayInDrop[key].amount);
      this.addedNutrients.salt += Math.ceil(this.arrayInDrop[key].salt * this.arrayInDrop[key].amount);
      this.addedNutrients.sugar += Math.ceil(this.arrayInDrop[key].sugar * this.arrayInDrop[key].amount);
      this.addedNutrients.vitaminb6 += Math.ceil(this.arrayInDrop[key].vitaminb6 * this.arrayInDrop[key].amount);
      this.addedNutrients.vitaminc += Math.ceil(this.arrayInDrop[key].vitaminc * this.arrayInDrop[key].amount);
    }
  }

  // Wird ausgeführt, wenn der Button für Rezept speichern gedrückt wird. Greift auf HttpService zu,
  // welcher eine Verbindung zur Datenbank erstellt und die Daten übermittelt.
  recipeInDatabase() {
    if (this.recipeName !== '' || this.arrayInDrop !== []) {
      this.httpService.insertRecipe(this.arrayInDrop, this.recipeName)
        .subscribe(
          (data) => console.log(data),
          (error) => console.log(error)
        );
    }
  }

  // Sobald eine Eingabe im Input-Feld gemacht wird, wird der Name aktualisiert.
  setRecipeName(value: string) {
    this.recipeName = value;
  }

}
