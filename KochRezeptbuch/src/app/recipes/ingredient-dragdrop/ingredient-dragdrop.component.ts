import { Component, OnInit } from '@angular/core';
import {Food} from "../../../model/food";

@Component({
  selector: 'app-ingredient-dragdrop',
  templateUrl: './ingredient-dragdrop.component.html',
  styleUrls: [
    './ingredient-dragdrop.component.css',
    '../../../../node_modules/dragula/dist/dragula.css'
  ]
})
export class IngredientDragdropComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
