import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicComponent } from '../page/dynamic_form/dynamic-c.interface';
import { FieldConfig } from '../page/dynamic_form/field.interface';
@Component({
  selector: 'mvb-checkbox',
  template: `
<div class="demo-full-width margin-top" [formGroup]="group" >
<mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
</div>
`,
  styles: ['../common/common.css']
})
export class CheckboxComponent implements OnInit, DynamicComponent {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }
}
