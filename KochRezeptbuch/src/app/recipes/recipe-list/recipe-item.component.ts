import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../model/recipe";
import {RecipeService} from "../../../services/recipe.service";

/*
  Diese Component stellt einen einzelnen Rezepteintrag in der Liste dar.
 */
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [`
    div {
      cursor: pointer;
    }
    .item {
      margin-top: 5px;
    }
  `],
  providers: [RecipeService]    // benötigt einen eigenen Provider von RecipeService,
                                // damit jedes Item eine eigene Checkvariable ob es geklickt wurde hat. Siehe RecipeService.
})
export class RecipeItemComponent implements OnInit {

  @Input() private recipe: Recipe;    // einzelnes Rezeptitem aus der Liste übergeben.


  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);    // Geklicktes Rezept wird an recipe-detail übergeben.
  }

}
