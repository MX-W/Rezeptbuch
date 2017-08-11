import {EventEmitter, Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Food} from "../model/food";

/*
  Dieser Service kümmert sich um jeglichen Datenaustausch von Food-Objekten.
 */
@Injectable()
export class IngredientService {

  ingredientSelected = new EventEmitter<Food>();    // EventEmitter für gelicktes ingredient-item in ingredient-list

  ingredientArrayInDrop = new EventEmitter<Food[]>();   // EventEmitter für Array von Zutaten im Drop-Bereich.
                                                        // Wird benötigt für Feststellung ob ein Rezept vorhanden ist,
                                                        // in dem eine der Zutaten enthalten ist und um die Zutatenliste
                                                        // für das Erstellen eines neuen Rezeptes zu übergeben.

  amountIsChanged = new EventEmitter<Food>();   // EventEmitter falls die Menge einer Zutat verändert wird.
                                                // Wird benötigt um festzustellen, wann die Menge erhöht wird und
                                                // übergibt den Wert in einem Food-Objekt.

  constructor(private dataService: DataService) {
  }

  // Frägt über den DataService und HttpService die Obsteinträge aus der Datenbank ab
  getFruitEntries() {
    return this.dataService.getData('fruit');
  }

  // Frägt über den DataService und HttpService die Gemüseeinträge aus der Datenbank ab
  getVeggieEntries() {
    return this.dataService.getData('vegetable');
  }

  // Frägt über den DataService und HttpService die Tierischen Lebensmittel aus der Datenbank ab
  getAnimalEntries() {
    return this.dataService.getData('animal');
  }

}
