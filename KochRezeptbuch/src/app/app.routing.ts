import {RouterModule, Routes} from "@angular/router";
import {IngredientsComponent} from "./ingredients/ingredients.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {LoginComponent} from "./login/login.component";

const APP_ROUTES: Routes = [
  { path: '', component: IngredientsComponent },
  { path: 'recipes', component: RecipesComponent},
  { path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
