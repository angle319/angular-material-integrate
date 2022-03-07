import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../page/dynamic_form/field.interface';
import { DynamicFormComponent } from '../page/dynamic_form/dynamic-form.component';
@Component({
  selector: 'mvb-radiobutton',
  template: `
<div class="demo-full-width margin-top" [formGroup]="group">
<label class="radio-label-padding">{{field.label}}:</label>
<mat-radio-group [formControlName]="field.name">
<mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
</mat-radio-group>
</div>
`,
styles: ['../common/common.css']
})
export class DynamicFormRadioButtonComponent implements OnInit, DynamicFormComponent {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
