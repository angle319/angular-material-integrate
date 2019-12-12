import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatButtonModule } from '@angular/material';
import { SnackbarComponent } from './snackbar.component';

@NgModule({
    declarations: [SnackbarComponent],
    imports: [
        MatSnackBarModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [
    ],
    entryComponents:[
        SnackbarComponent
    ]
})
export class MaterialSnackModule { }
