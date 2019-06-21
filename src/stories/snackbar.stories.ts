import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean, array, select, radios, color, date, button, object } from '@storybook/addon-knobs';
import { MaterialSnackModule, SnackbarService } from 'library/material-lib/src/public-api';
import { SnackDemoComponent } from './snack-c';


storiesOf('Snakebar', module)
  .addParameters({
    backgrounds: [
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
    ],
  })
  .addDecorator(withKnobs)
  .add('toast', () => {
    return {
      moduleMetadata: {
        imports: [MaterialSnackModule],
      },
      component: SnackDemoComponent,
      props: {
        title: text('title', 'good life'),
        message: text('message', 'fdg')
      }
    }
  }, {
      notes: {
        markdown: ` ## sample code
${'```'}ts
import { Component, OnInit, Input } from '@angular/core';
import { SnackbarService } from 'library/material-lib/src/public-api';
@Component({
    selector: 'app-root',
    template: "<p>Title:{{title}}</p> \n
    <p> Message:{{message}}</p> \n
    <button mat-raised-button (click)="onClick()">success</button> \n
    <button mat-raised-button (click)="onClick('warning')">waring</button> \n
    <button mat-raised-button (click)="onClick('error')">error</button> \n
    <button mat-raised-button (click)="onClick('customer')" >my style</button>",
    styles: ['.my-panel { background-color: blue; }'],
    providers: [SnackbarService]
})
export class SnackDemoComponent implements OnInit {
    @Input() title;
    @Input() message;
    constructor(public snackbarService: SnackbarService) {

    }
    ngOnInit() {

    }
    onClick(success = 'success') {
        switch (success) {
            case 'success':
                this.snackbarService.openSuccess(this.message)
                break;
            case 'warning':
                this.snackbarService.openWarning(this.message)
                break;
            case 'error':
                this.snackbarService.openError(this.message)
                break;
            case 'customer':
                this.snackbarService.openCustomerStyle(this.title, this.message, 'my-panel')
                break;
            default:
                break;
        }

    }
}
${'```'}`
      }})
//   .add('Table', () => {
//     return {
//       moduleMetadata: {
//         imports: [MaterialTableModule]
//       },
//       template: `
//       <mvb-list (onRowSelect)="onRowSelect($event)" [total]="total" [columnHeaders]="columnHeaders"
//        [dataSource]="dataSource" class="w-100" (onLazyLoad)="onLazyLoad($event)" editParams="editParams"
//        onCreate="onCreate($event)" onEdit="onEdit($event)" onDelete="onDelete($event)" isRipple="isRipple" isMultiSelect="isMultiSelect"
//        isFilter="isFilter" isEdit="isEdit">
//         <ng-template mvbCol let-input cell="1" styleClass="a-col">
//           <div style="color:wheat;width:50%;">{{input}}</div>
//         </ng-template>
//         <ng-template mvbCol let-input cell="2">
//             <button> <fa-icon icon="edit"></fa-icon>{{input}}</button>
//         </ng-template>
//         <ng-template mvbCol let-input cell="4" >
//             <div style="color:aqua ;width:50% ;">{{input|date: 'yyyy-MM-dd HH:mm:ss'}}</div>
//         </ng-template>
//       </mvb-list>
//       `,
//       props: {
//         dataSource: array('dataSource', [{ a: 'abc', b: '45545', c: '12d34', time: new Date() },
//         { a: 'abc', b: '45545', c: '1234', time: new Date() }]),
//         total: number('total', 20),
//         isRipple: boolean(true),
//         isMultiSelect: boolean(false),
//         isFilter: boolean(true),
//         isEdit: boolean(true),
//         editParams: array(['edit', 'del']),
//         columnHeaders: array('columnHeaders', ['a', 'b', 'c', 'time']),
//         onLazyLoad: action(`when data load`),
//         onRowSelect: action(`select row`),
//         onCreate: action(`create data`),
//         onEdit: action(`editor data`),
//         onDelete: action(`delete data`),
//       }
//     }
//   }, {
//       notes: {
//         markdown: ` ## how to use
// ${'```'}html
// <mvb-list (onRowSelect)="onRowSelect($event)" [total]="total" [columnHeaders]="columnHeaders" [dataSource]="dataSource"
//   class="w-100" (onLazyLoad)="onLazyLoad($event)" editParams="editParams" onCreate="onCreate($event)"
//   onEdit="onEdit($event)" onDelete="onDelete($event)" isRipple="isRipple" isMultiSelect="isMultiSelect"
//   isFilter="isFilter" isEdit="isEdit">
//   <ng-template mvbCol let - input cell="1" styleClass="a-col">
//     <div style="color:wheat;width:50%;"> {{ input }}</div>
//   </ng-template>
//   <ng-template mvbCol let-input cell="2">
//     <button>
//       <fa-icon icon="edit"> </fa-icon>{{input}}
//     </button>
//   </ng-template>
//   <ng-template mvbCol let - input cell="4">
//     <div style="color:aqua ;width:50% ;"> {{ input | date: 'yyyy-MM-dd HH:mm:ss' }}</div>
//   </ng-template>
// </mvb-list>
// ${'```'}`
//       }
//     });
