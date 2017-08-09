import { Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styles: [],
  providers: [IngredientService]
})
export class IngredientListComponent implements OnInit {

  foodEntries: Food[] = [];

  constructor(
    private ingredientService: IngredientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => this.loadContent(params['kind'])
    );



  }

  loadContent(kind: string) {
    this.foodEntries = [];
    if (kind === 'Obst') {
      this.ingredientService.getFruitEntries().subscribe(
        (food: Food[]) => {
          for(let key in food) {
            this.foodEntries.push(food[key]);
          }
        }
      );
    }else if (kind === 'Gemüse') {
      this.ingredientService.getVeggieEntries().subscribe(
        (food: Food[]) => {
          for(let key in food) {
            this.foodEntries.push(food[key]);
          }
        }
      );
    } else if (kind === 'Gemobst') {
      this.ingredientService.getAnimalEntries().subscribe(
        (food: Food[]) => {
          for(let key in food) {
            this.foodEntries.push(food[key]);
          }
        }
      );
    }
  }
}
