import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent, PrimeTemplate } from './table.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeCommonModule } from '../shared/fontawesome.module';
@NgModule({
  declarations: [TableComponent, PrimeTemplate],
  imports: [
    MaterialModule, FormsModule, ReactiveFormsModule,
    BrowserModule, BrowserAnimationsModule, FontAwesomeCommonModule,
  ],
  exports: [
    MaterialModule,
    BrowserAnimationsModule, FontAwesomeCommonModule,
    TableComponent, PrimeTemplate]
})
export class MaterialTableModule { }
