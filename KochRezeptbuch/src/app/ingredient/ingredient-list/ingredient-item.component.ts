import {Component, Input, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './ingredient-item.component.html',
  styles: []
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
