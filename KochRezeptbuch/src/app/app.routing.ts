import {RouterModule, Routes} from "@angular/router";
import {IngredientsComponent} from "./ingredients/ingredients.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {LoginComponent} from "./login/login.component";

const APP_ROUTES: Routes = [
  { path: '', component: IngredientsComponent },
  { path: 'recipe', component: RecipeComponent},
  { path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
