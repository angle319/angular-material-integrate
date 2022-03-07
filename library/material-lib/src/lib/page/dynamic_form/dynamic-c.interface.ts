import { FieldConfig } from './field.interface';
import { FormGroup } from '@angular/forms';

export interface DynamicFormComponent {
    field: FieldConfig;
    group: FormGroup;
}
