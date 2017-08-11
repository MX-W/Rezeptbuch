import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideMenueComponent } from './menues/side-menue/side-menue.component';
import { TopMenueComponent } from './menues/top-menue/top-menue.component';
import { FooterComponent } from './footer/footer.component';
import {LayoutComponent} from './layout/layout.component';
import {HttpService} from '../services/http.service';
import {DataService} from '../services/data.service';
import { LoginComponent } from './login/login.component';
import {routing} from './app.routing';
import {RecipesComponent} from "./recipes/recipes.component";
import {IngredientListComponent} from "./ingredient/ingredient-list/ingredient-list.component";
import {IngredientItemComponent} from "./ingredient/ingredient-list/ingredient-item.component";
import {IngredientDetailComponent} from "./ingredient/ingredient-detail/ingredient-detail.component";
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { IngredientDraglistComponent } from './recipes/drag-list/ingredient-draglist.component';
import { IngredientDragitemComponent } from './recipes/drag-list/ingredient-dragitem.component';
import {DragulaModule} from "ng2-dragula";
import {IngredientComponent} from "./ingredient/ingredient.component";
import { IngredientDropitemComponent } from './recipes/drag-list/ingredient-dropitem.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import {IngredientService} from "../services/ingredients.service";
import { RecipeDetailComponent } from './recipes/recipe-list/recipe-detail/recipe-detail.component';
import {RecipeService} from "../services/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    SideMenueComponent,
    TopMenueComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    RecipesComponent,
    IngredientListComponent,
    IngredientItemComponent,
    IngredientDetailComponent,
    RecipeListComponent,
    IngredientDraglistComponent,
    IngredientDragitemComponent,
    IngredientComponent,
    IngredientDropitemComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DragulaModule
  ],
  providers: [HttpService, DataService, IngredientService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
