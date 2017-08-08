import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../../../../model/food";

@Component({
  selector: 'app-ingredient-dragitem',
  templateUrl: './ingredient-dragitem.component.html',
  styles: []
})
export class IngredientDragitemComponent implements OnInit {

  @Input() private ingredient: Food;

  constructor() { }

  ngOnInit() {
  }

}
