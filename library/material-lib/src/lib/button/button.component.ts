import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicComponent } from '../page/dynamic_form/dynamic-c.interface';
import { FieldConfig } from '../page/dynamic_form/field.interface';
@Component({
  selector: 'mvb-button',
  template: `
<div  [formGroup]="group">
<button type="submit" mat-raised-button color="primary">{{field.label}}</button>
</div>
`,
  styles: ['../common/common.css']
})
export class ButtonComponent implements OnInit, DynamicComponent {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }
}
