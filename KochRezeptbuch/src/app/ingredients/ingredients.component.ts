import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {FoodList} from "../../model/food-list";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  private foodEntries = this.dataService.getData();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.dataService.getData().subscribe(data => console.log(data));
  }

}
