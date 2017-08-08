import { Component, OnInit } from '@angular/core';
import {IngredientService} from "../../../../services/ingredients.service";
import {Food} from "../../../../model/food";

@Component({
  selector: 'app-ingredient-draglist',
  templateUrl: './ingredient-draglist.component.html',
  styles: [],
  providers: [IngredientService]
})
export class IngredientDraglistComponent implements OnInit {

  private fruitEntries: Food[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.getFruitEntries().subscribe((food: Food[]) => {
      for (let key in food) {
        this.fruitEntries.push(food[key]);
      }
    });
  }

}
