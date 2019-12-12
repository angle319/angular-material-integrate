import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, PrimeTemplate } from './table.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeCommonModule } from '../shared/fontawesome.module';
@NgModule({
  declarations: [TableComponent, PrimeTemplate],
  imports: [
    MaterialModule, FormsModule, ReactiveFormsModule,
    CommonModule, FontAwesomeCommonModule,
  ],
  exports: [
    MaterialModule,
    FontAwesomeCommonModule,
    TableComponent, PrimeTemplate]
})
export class MaterialTableModule { }
