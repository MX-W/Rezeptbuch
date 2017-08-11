import {Component, Input, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";


/*
  Diese Component stellt einen einzelnen Listeneintrag in der ingredient-list dar.
 */
@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styles: [`
    .item {
      cursor: pointer;
      margin-top: 5px;
    }
  `]
})
export class IngredientItemComponent implements OnInit {
  @Input() ingredient: Food;      // Übergebenes Food von ingredient-list


  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }
  onSelect() {                                                          // Item wurde geklickt. Benachrichtigung von
      this.ingredientService.ingredientSelected.emit(this.ingredient);  // ingredient.detail.
  }

}
