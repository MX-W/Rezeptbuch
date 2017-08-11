import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../../../model/food';
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-ingredient-dropitem',
  templateUrl: './ingredient-dropitem.component.html',
  styles: [`
    .food {
      cursor: pointer;
    }
    
    td {
      padding: 5px;
    } 
    
    input {
      max-width: 50px;
    }
  `]
})
export class IngredientDropitemComponent implements OnInit {

  @Input() private ingredient: Food;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  valueChanged(amount: number) {
    this.ingredient.amount = amount;
    this.recipeService.amountIsChanged.emit(this.ingredient);
  }

}
