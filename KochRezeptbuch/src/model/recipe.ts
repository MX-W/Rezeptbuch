import {FoodRecipe} from "./food-recipe";


export class Recipe {

  constructor(public name: string,
              public picture: string,
              public ingredients: FoodRecipe[]) {
  }

}
