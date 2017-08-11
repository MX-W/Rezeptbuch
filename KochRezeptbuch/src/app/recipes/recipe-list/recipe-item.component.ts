import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../model/recipe";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [`
      div {
        cursor: pointer;
      }
  `]
})
export class RecipeItemComponent implements OnInit {

  @Input() private recipe: Recipe;

  private clicked = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelect() {
    this.clicked = !this.clicked;
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
