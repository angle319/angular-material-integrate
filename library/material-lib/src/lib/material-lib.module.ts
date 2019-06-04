import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent, PrimeTemplate } from './table/table.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeCommonModule } from './fontawesome.module';
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
export class MaterialLibModule { }
