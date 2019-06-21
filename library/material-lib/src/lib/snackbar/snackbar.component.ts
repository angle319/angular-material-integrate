import { Component, Inject, OnDestroy } from '@angular/core';
import {
    MAT_SNACK_BAR_DATA, MatSnackBarRef
} from '@angular/material';

@Component({
    selector: 'mvb-snack-success',
    template: `
    <div class="toast-header">
      <strong class="snack-title">{{title}}</strong>
      <!--<small class="text-muted">5 mins ago</small>-->
      <button  mat-raised-button class="close" (click)="action()">×</button>
    </div>
    <div class="toast-body">
    {{message}}
    </div>`,
    styleUrls: ['snack-bar.component.css']
})
export class SnackbarComponent implements OnDestroy{
    
    title = ''
    message = ''
    constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) {
        if (typeof data === 'object') {
            this.message = this.data.message
            this.title = this.data.title
        } else {
            this.message = data
        }
    }
    ngOnDestroy(): void {
        this.snackBarRef.dismissWithAction();
    }
    action(): void {
        this.snackBarRef.dismissWithAction();
    }

    /** If the action button should be shown. */
    get hasAction(): boolean {
        return !!this.data.action;
    }
}