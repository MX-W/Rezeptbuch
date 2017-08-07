import { Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './ingredient-list.component.html',
  styles: []
})
export class IngredientListComponent implements OnInit {
  fruitEntries : Food[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.getFruitEntries().subscribe((data : Food[]) => {
      for (let key in data) {
        this.fruitEntries.push(data[key]);
      }
    });
    console.log(this.fruitEntries);
  }
}
