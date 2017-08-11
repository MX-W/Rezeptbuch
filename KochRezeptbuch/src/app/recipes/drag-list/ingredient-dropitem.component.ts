import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../../../model/food';
import {IngredientService} from "../../../services/ingredients.service";


/*
 Diese Component stellt die Foodeinträge, die in der mittleren Spalte platziert werden, dar.
 */
@Component({
  selector: 'app-ingredient-dropitem',
  templateUrl: './ingredient-dropitem.component.html',
  styles: [`
    .food {
      cursor: pointer;
      margin-top: 5px;
    }

    td {
      padding: 5px;
    }

    input {
      max-width: 50px;
    }
  `]
})
export class IngredientDropItemComponent implements OnInit {

  @Input() private ingredient: Food;  // Übergebenes Food von ingredient-draglist

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {
  }

  valueChanged(amount: number) {
    this.ingredient.amount = amount;
    this.ingredientService.amountIsChanged.emit(this.ingredient);  // wird die Menge erhöht, wird ein Event gefeuert und
  }                                                               // und die ingredient mit der neuen Menge übergeben.

}
