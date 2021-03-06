
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './toolbar.compoent';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeCommonModule } from '../shared/fontawesome.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [ToolBarComponent],
  imports: [
    MaterialModule, FormsModule, ReactiveFormsModule,
    BrowserModule, BrowserAnimationsModule, FontAwesomeCommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MaterialModule,
    BrowserAnimationsModule, FontAwesomeCommonModule,
    ToolBarComponent]
})
export class MaterialToolBarModule { }

