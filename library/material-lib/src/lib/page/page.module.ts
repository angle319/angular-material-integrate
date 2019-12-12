import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeCommonModule } from '../shared/fontawesome.module';
import { FocusElDirective } from '../common/focus.directive';
@NgModule({
    declarations: [LoginPageComponent, FocusElDirective],
    imports: [
        MaterialModule, FormsModule, ReactiveFormsModule, 
        CommonModule, BrowserAnimationsModule, FontAwesomeCommonModule,
    ],
    exports: [
        MaterialModule,
        BrowserAnimationsModule, FontAwesomeCommonModule,
        LoginPageComponent]
})
export class MaterialSimplePageModule { }
