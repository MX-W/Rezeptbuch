import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../../../../model/food";

@Component({
  selector: 'app-ingredient-dropitem',
  templateUrl: './ingredient-dropitem.component.html',
  styles: [`
    .food {
      cursor: pointer;
    }
    
    td {
      padding: 5px;
    }    
  `]
})
export class IngredientDropitemComponent implements OnInit {

  @Input() private ingredient: Food;

  constructor() {
  }

  ngOnInit() {
  }

  valueChanged(amount: any) {
    console.log(amount);
  }

}
