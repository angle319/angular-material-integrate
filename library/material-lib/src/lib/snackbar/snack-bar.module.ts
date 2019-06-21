import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MatButtonModule } from '@angular/material';
import { SnackbarComponent } from './snackbar.component';

@NgModule({
    declarations: [SnackbarComponent],
    imports: [
        MatSnackBarModule,
        MatButtonModule,
        BrowserModule, BrowserAnimationsModule,
    ],
    exports: [
        BrowserAnimationsModule,
    ],
    entryComponents:[
        SnackbarComponent
    ]
})
export class MaterialSnackModule { }
