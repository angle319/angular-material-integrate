import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MatButtonModule } from '@angular/material';
import { SnackbarComponent } from './snackbar.component';

@NgModule({
    declarations: [SnackbarComponent],
    imports: [
        MatSnackBarModule,
        MatButtonModule,
        CommonModule, BrowserAnimationsModule,
    ],
    exports: [
        BrowserAnimationsModule,
    ],
    entryComponents:[
        SnackbarComponent
    ]
})
export class MaterialSnackModule { }
