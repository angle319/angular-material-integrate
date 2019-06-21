import {
    Component, OnInit, Input, Output, EventEmitter, TemplateRef, AfterContentInit,
    QueryList, ContentChildren, Directive, ContentChild, Inject
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'mvb-confirm-dialog',
    template: `
    <h1 mat-dialog-title>{{title}}</h1>
<div mat-dialog-content>
<ng-container *ngIf="">
</ng-container>
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">{{||}}</button>
  <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
</div>`
})
export class DialogComponent implements OnInit, AfterContentInit {
    @Input() title = ''
    @Output() onCancel: EventEmitter<any> = new EventEmitter();
    @Output() onOK: EventEmitter<any> = new EventEmitter();
    constructor( @Inject(MAT_DIALOG_DATA) public data:DialogData)) {

    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    ngAfterContentInit(): void {
        throw new Error("Method not implemented.");
    }
}
