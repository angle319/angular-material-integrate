import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialTableModule } from 'library/material-lib/src/public-api';
@NgModule({
    exports: [
        MaterialTableModule, FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule]
})
export class TestLibModule { }
