import {Component, Input, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styles: [`
    .item {
      cursor: pointer;
    }
  `]
})
export class IngredientItemComponent implements OnInit {
  @Input() ingredient: Food;


  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }
  onSelect() {
      this.ingredientService.ingredientSelected.emit(this.ingredient);
  }

}
