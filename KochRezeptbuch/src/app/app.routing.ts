import {RouterModule, Routes} from "@angular/router";
// import {IngredientsComponent} from "./ingredients/ingredients.service";
import {RecipesComponent} from "./recipes/recipes.component";
import {LoginComponent} from "./login/login.component";
import {IngredientComponent} from "./ingredient/ingredient.component";

const APP_ROUTES: Routes = [
  { path: 'recipes', component: RecipesComponent},
  { path: 'login', component: LoginComponent},
  { path: ':kind', component: IngredientComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
