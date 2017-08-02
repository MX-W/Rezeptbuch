import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideMenueComponent } from './menues/side-menue/side-menue.component';
import { TopMenueComponent } from './menues/top-menue/top-menue.component';
import { AroundcontentComponent } from './aroundcontent/aroundcontent.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AllaroundComponent } from './allaround/allaround.component';
import {HttpService} from "../services/http.service";
import {DataService} from "../services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    SideMenueComponent,
    TopMenueComponent,
    AroundcontentComponent,
    ContentComponent,
    FooterComponent,
    AllaroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
