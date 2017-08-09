import {OriginFood} from '../interfaces/origin-food-list';
/**
 * Created by Max on 15.06.2017.
 */
export class Food {

  constructor(
    public name : string,
    public energy : number,
    public carb : number,
    public fat : number,
    public protein : number,
    public ruffage : number,
    public salt : number,
    public sugar : number,
    public vitaminb12 : number,
    public vitaminb2 : number,
    public vitaminc : number,
    public picture : string
  ) {
  }
}
