import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
