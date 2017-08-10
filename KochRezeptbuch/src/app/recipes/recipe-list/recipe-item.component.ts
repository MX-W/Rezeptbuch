import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../model/recipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {

  @Input() private recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
