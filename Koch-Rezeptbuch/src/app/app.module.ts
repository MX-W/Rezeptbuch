import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideMenueComponent } from './menues/side-menue/side-menue.component';
import { TopMenueComponent } from './menues/top-menue/top-menue.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenueComponent,
    TopMenueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
