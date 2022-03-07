import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormComponent } from '../page/dynamic_form/dynamic-c.interface';
import { FieldConfig } from '../page/dynamic_form/field.interface';
@Component({
  selector: 'mvb-select',
  template: `
<mat-form-field class="demo-full-width margin-top" [formGroup]="group">
<mat-select [placeholder]="field.label" [formControlName]="field.name">
<mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
</mat-select>
</mat-form-field>
`,
  styles: ['../common/common.css']
})
export class DynamicFormSelectComponent implements OnInit, DynamicFormComponent {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }
}
