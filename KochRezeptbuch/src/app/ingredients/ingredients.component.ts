import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import 'rxjs/add/operator/map';
import {Food} from "../../model/food";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  // private result = this.dataService.getData();
  private fruitEntries: Food[] = [];
  private veggieEntries;
  private animalEntries;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData('fruit').subscribe((data : Food[]) => {
      for (let key in data) {
        this.fruitEntries.push(data[key]);
      }
    });
    console.log(this.fruitEntries);
    // this.dataService.getData('vegetable').subscribe((data) => this.veggieEntries = data);
    // this.dataService.getData('animal').subscribe((data) => this.animalEntries = data);
  }

}
