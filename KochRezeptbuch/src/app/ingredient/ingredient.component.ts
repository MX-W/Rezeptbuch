import { Component, OnInit} from '@angular/core';
import {IngredientService} from "../../services/ingredients.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styles: [],
  providers: [IngredientService]
})
export class IngredientComponent implements OnInit {

  constructor(private ingredienService: IngredientService) { }

  ngOnInit() {

  }

}
