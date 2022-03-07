import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean, array, select, radios, color, date, button, object } from '@storybook/addon-knobs';
import { MaterialTableModule } from 'library/material-lib/src/public-api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from 'library/material-lib/src/lib/table/table.component';
import { ArrayTypeKnobValue } from '@storybook/addon-knobs/dist/components/types/Array';
storiesOf('Table', module)
  .addDecorator(withKnobs).addParameters({
    backgrounds: [
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
    ],
  })
  .add('Table', () => {
    return {
      moduleMetadata: {
        imports: [MaterialTableModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule]
      },
      template: `
      <mvb-list (onRowSelect)="onRowSelect($event)" [total]="total" [columnHeaders]="columnHeaders"
       [dataSource]="dataSource" class="w-100" (onLazyLoad)="onLazyLoad($event)" [editParams]="editParams"
       (onCreate)="onCreate($event)" (onEdit)="onEdit($event)" (onDelete)="onDelete($event)" [isRipple]="isRipple"
       [isMultiSelect]="isMultiSelect"
       [isFilter]="isFilter" [isEdit]="isEdit">
        <ng-template mvbCol let-input cell="1" styleClass="a-col">
          <div style="color:wheat;width:50%;">{{input}}</div>
        </ng-template>
        <ng-template mvbCol let-input cell="2">
            <button> <fa-icon icon="edit"></fa-icon>{{input}}</button>
        </ng-template>
        <ng-template mvbCol let-input cell="3">
            <div style="color:aqua ;width:50% ;">{{input|date: 'yyyy-MM-dd HH:mm:ss'}}</div>
        </ng-template>
      </mvb-list>
      `,
      props: {
        dataSource: object('dataSource', =[{ a: 'abc', b: '45545', c: '1234', time: new Date() },
        { a: 'abc', b: '45545', c: '1234', time: new Date() }]),
        total: number('total', 20),
        isRipple: boolean('isRipple', true),
        isMultiSelect: boolean('isMultiSelect', false),
        isFilter: boolean('isFilter', true),
        isEdit: boolean('isEdit', true),
        columnHeaders: array('columnHeaders', ['a', 'b', 'c', 'time']),
        editParams: array('editParams', ['edit', 'del']),
        onLazyLoad: action(`when data load`),
        onRowSelect: action(`select row`),
        onCreate: action(`create data`),
        onEdit: action(`editor data`),
        onDelete: action(`delete data`),
      }
    }
  }, {
      notes: {
        markdown: ` ## how to use
${'```'}html
<mvb-list (onRowSelect)="onRowSelect($event)" [total]="total" [columnHeaders]="columnHeaders" [dataSource]="dataSource"
  class="w-100" (onLazyLoad)="onLazyLoad($event)" editParams="editParams" onCreate="onCreate($event)"
  onEdit="onEdit($event)" onDelete="onDelete($event)" isRipple="isRipple" isMultiSelect="isMultiSelect"
  isFilter="isFilter" isEdit="isEdit">
  <ng-template mvbCol let-input cell="1" styleClass="a-col">
    <div style="color:wheat;width:50%;"> {{ input }}</div>
  </ng-template>
  <ng-template mvbCol let-input cell="2">
    <button>
      <fa-icon icon="edit"> </fa-icon>{{input}}
    </button>
  </ng-template>
  <ng-template mvbCol let-input cell="4">
    <div style="color:aqua ;width:50% ;"> {{ input | date: 'yyyy-MM-dd HH:mm:ss' }}</div>
  </ng-template>
</mvb-list>
${'```'}`
      }
    });
