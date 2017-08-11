import {Component, OnInit} from '@angular/core';
import {IngredientService} from '../../../services/ingredients.service';
import {Food} from '../../../model/food';
import {DragulaService} from 'ng2-dragula';

/*
 In dieser Component werden alle Foodeinträge aus der Datenbank geladen und angezeigt.
 */
@Component({
  selector: 'app-ingredient-draglist',
  templateUrl: './ingredient-draglist.component.html',
  styleUrls: [
    './ingredient-draglist.component.css',
    '../../../../node_modules/dragula/dist/dragula.css'
  ],
  providers: []
})
export class IngredientDraglistComponent implements OnInit {

  private foodEntries: Food[] = [];  // Enthält alle Foodeinträge

  private midArray: Food[] = [];  // Referenzarray für Dragula, gedroppte Einträge werden hier eingefügt

  public dropEmpty = true;

  constructor(private ingredientService: IngredientService,
              private dragulaService: DragulaService) {
    /*
     Das drop-Event von Dragula sorgt dafür, dass alle in der Mitte gedroppten Elemente zur Rezeptliste übergeben
     werden, wo überprüft wird ob ein gedropptes Food-Element in einem Rezept vorhanden ist.
     Außerdem wird das aktuell in diesem Event gedroppte Food-Element and die Nährstoff-Gesamtanzeige übergeben.
     */
    dragulaService.drop.subscribe((value) => {
      this.ingredientService.ingredientArrayInDrop.emit(this.midArray);
      this.dropEmpty = false;
    })
    ;
  }

  // Holt alle Food-Einträge aus der Datenbank und schreibt sie in foodEntries
  ngOnInit() {
    this.ingredientService.getFruitEntries().subscribe((food: Food[]) => {
        for (let key in food) {
          this.foodEntries.push(food[key]);
        }
      },
      (error) => console.log(error));

    this.ingredientService.getVeggieEntries().subscribe((food: Food[]) => {
        for (let key in food) {
          this.foodEntries.push(food[key]);
        }
      },
      (error) => console.log(error));

    this.ingredientService.getAnimalEntries().subscribe((food: Food[]) => {
        for (let key in food) {
          this.foodEntries.push(food[key]);
        }
      },
      (error) => console.log(error));
  }

}
