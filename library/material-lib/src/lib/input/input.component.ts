import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicComponent } from '../page/dynamic_form/dynamic-c.interface';
import { FieldConfig } from '../page/dynamic_form/field.interface';
@Component({
  selector: 'mvb-input',
  template: `
<mat-form-field class="demo-full-width" [formGroup]="group">
<input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
`,
  styles: ['../common/common.css']
})
export class InputComponent implements OnInit, DynamicComponent {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }
}
