import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingDirective } from './loading.directive'
import { MatSpinner } from '@angular/material';
import { MaterialModule } from '../shared/material.module';
import { SpinnerComponent } from './loading.component';

@NgModule({
    declarations: [LoadingDirective,SpinnerComponent],
    imports: [
        BrowserModule, BrowserAnimationsModule, MaterialModule
    ],
    exports: [
        BrowserAnimationsModule, LoadingDirective, MaterialModule
    ],
    entryComponents: [
        MatSpinner, SpinnerComponent
    ]
})
export class MaterialOverlayModule { }
