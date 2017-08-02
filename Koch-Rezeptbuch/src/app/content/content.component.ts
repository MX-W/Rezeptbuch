import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {FoodList} from "../../model/food-list";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private foodEntries = this.dataService.getData();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getData.subscribe((foodList: FoodList) => this.foodEntries = foodList,
      // error => console.log(error));
  }

}
