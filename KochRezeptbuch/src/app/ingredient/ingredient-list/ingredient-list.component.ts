import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styles: [],
  providers: []
})
export class IngredientListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  foodEntries: Food[] = [];

  constructor(
    private ingredientService: IngredientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
   this. subscription = this.activatedRoute.params.subscribe(
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
    } else if (kind === 'Tierisch') {
      this.ingredientService.getAnimalEntries().subscribe(
        (food: Food[]) => {
          for(let key in food) {
            this.foodEntries.push(food[key]);
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
