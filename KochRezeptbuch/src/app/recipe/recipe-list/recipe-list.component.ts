import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter <Recipe>();
  recipe: Recipe = new Recipe('Test-Tomate', 'rot und lecker', 'http://www.lebensbaum.com/sites/default/files/tomate2.jpg');
  recipe2: Recipe = new Recipe('Test-Tomate', 'rot und lecker', 'http://www.lebensbaum.com/sites/default/files/tomate2.jpg');

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
this.recipeSelected.emit(recipe);
  }
}
