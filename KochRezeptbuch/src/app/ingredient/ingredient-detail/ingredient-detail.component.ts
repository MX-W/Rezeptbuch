import { Component, OnInit, Input } from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styles: []
})
export class IngredientDetailComponent implements OnInit {
  selectedIngredient: Food;


  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.ingredientSelected.subscribe(
      (food: Food) => this.selectedIngredient = food
    );
  }

}
