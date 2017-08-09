import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private selectedIngredient: Food;
  private switch = false;


  constructor(private ingredientService: IngredientService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ingredientService.ingredientSelected.subscribe(
      (food: Food) => this.callback(food)
    );
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.selectedIngredient = null;
        this.switch = false;
      });
  }

  callback(food: Food) {
    this.selectedIngredient = food;
    this.switch = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
