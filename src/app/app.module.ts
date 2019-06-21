import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialTableModule, MaterialSnackModule } from 'library/material-lib/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MaterialLibModule } from 'material-lib';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialTableModule,
    MaterialSnackModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
