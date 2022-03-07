
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeCommonModule } from '../shared/fontawesome.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    MaterialModule, FormsModule, ReactiveFormsModule,
    CommonModule, FontAwesomeCommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MaterialModule,
    FontAwesomeCommonModule,
    SidebarComponent]
})
export class MaterialSidebarModule { }
