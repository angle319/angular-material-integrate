import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, FontAwesomeCommonModule } from 'library/material-lib/src/public-api';
@NgModule({

    exports: [
        MaterialModule, FontAwesomeCommonModule, FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule, FontAwesomeCommonModule]
})
export class TestLibModule { }
