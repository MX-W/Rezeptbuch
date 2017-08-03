import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {FoodList} from "../../model/food-list";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  // private result = this.dataService.getData();
  private fruitEntries;
  private veggieEntries;
  private animalEntries;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData('fruit').subscribe((data) => console.log(data));
    console.log(this.fruitEntries);
    // this.dataService.getData('vegetable').subscribe((data) => this.veggieEntries = data);
    // this.dataService.getData('animal').subscribe((data) => this.animalEntries = data);
  }

}
