import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../../../model/food';

/*
 Diese Component stellt einen einzelnen Listeneintrag in der ingredient-draglist dar.
 */
@Component({
  selector: 'app-ingredient-dragitem',
  templateUrl: './ingredient-dragitem.component.html',
  styles: [`
    .food {
      cursor: pointer;
      margin-top: 5px;
    }
  `]
})
export class IngredientDragItemComponent implements OnInit {

  @Input() private ingredient: Food; // Übergebenes Food von ingredient-draglist

  constructor() {
  }

  ngOnInit() {
  }

}
