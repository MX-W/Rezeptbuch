import { Component, OnInit} from '@angular/core';
import {IngredientService} from "../../services/ingredients.service";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styles: [],
  providers: [IngredientService]
})
export class IngredientComponent implements OnInit {

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {

  }

}
