import { Component, OnInit } from '@angular/core';
import {IngredientService} from "../../../../services/ingredients.service";
import {Food} from "../../../../model/food";
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-ingredient-draglist',
  templateUrl: './ingredient-draglist.component.html',
  styles: [`
    .pull-left, .pull-right{
      margin-top: 15px;
    }
  `],
  providers: [IngredientService]
})
export class IngredientDraglistComponent implements OnInit {

  private foodEntries: Food[] = [];

  private midArray: Food[] = [];

  constructor(private ingredientService: IngredientService, private dragula: DragulaService) { }

  ngOnInit() {
    this.ingredientService.getFruitEntries().subscribe((food: Food[]) => {
      for (let key in food) {
        this.foodEntries.push(food[key]);
      }
    });

    this.ingredientService.getVeggieEntries().subscribe((food: Food[]) => {
      for (let key in food) {
        this.foodEntries.push(food[key]);
      }
    });

    this.ingredientService.getAnimalEntries().subscribe((food: Food[]) => {
      for (let key in food) {
        this.foodEntries.push(food[key]);
      }
    });
  }

}
