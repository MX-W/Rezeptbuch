import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {IngredientService} from "../../../services/ingredients.service";
import {Food} from "../../../model/food";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params} from "@angular/router";


/*
  Diese Component wird geladen sobald ein Item in der ingredient-list gelickt wurde.
 */
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
    this.ingredientService.ingredientSelected.subscribe(        // Falls Food in Liste geklickt wurde wird Ingredient
      (food: Food) => {                                         // zugewiesen und dadurch im Template angezeigt.
        this.selectedIngredient = food;
        this.switch = true;   // Einblenden des Templates von ngIf und nicht den default-else Text
      },
      (error) => console.log(error)
    );
    this.subscription = this.activatedRoute.params.subscribe(   // Wenn sich die Route ändert wird wieder auf
      (params: Params) => {                                     // default-Werte zurückgesetzt.
        this.selectedIngredient = null;
        this.switch = false;
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();        // Unsubscribe um stacken von Subscriptions zu unterbinden.
  }
}
