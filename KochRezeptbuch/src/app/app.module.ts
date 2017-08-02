import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideMenueComponent } from './menues/side-menue/side-menue.component';
import { TopMenueComponent } from './menues/top-menue/top-menue.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import { FooterComponent } from './footer/footer.component';
import {LayoutComponent} from './layout/layout.component';
import {HttpService} from '../services/http.service';
import {DataService} from '../services/data.service';
import { RecipeComponent } from './recipe/recipe.component';
import { LoginComponent } from './login/login.component';
import {routing} from './app.routing';
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeListComponent} from "./recipe/recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe/recipe-list/recipe-item.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    SideMenueComponent,
    TopMenueComponent,
    IngredientsComponent,
    FooterComponent,
    LayoutComponent,
    RecipeComponent,
    LoginComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
