import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingDirective } from './loading.directive'
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MaterialModule } from '../shared/material.module';
import { SpinnerComponent } from './loading.component';

@NgModule({
    declarations: [LoadingDirective, SpinnerComponent],
    imports: [
        CommonModule, BrowserAnimationsModule, MaterialModule
    ],
    exports: [
        BrowserAnimationsModule, LoadingDirective, MaterialModule
    ],
    entryComponents: [
        MatProgressSpinner, SpinnerComponent
    ]
})
export class MaterialOverlayModule { }
