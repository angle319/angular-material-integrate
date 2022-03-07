import { Component, Inject, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {
    MAT_SNACK_BAR_DATA, MatSnackBarRef
} from '@angular/material/snack-bar';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'mvb-snack-bar',
    template: `
    <div *ngIf="!mobileQuery.matches" class="toast-header">
      <strong class="snack-title">{{title}}</strong>
      <!--<small class="text-muted">5 mins ago</small>-->
      <button mat-raised-button class="close" (click)="action()">×</button>
    </div>
    <div class="toast-body">
    <button *ngIf="mobileQuery.matches" mat-raised-button class="close" (click)="action()">×</button>
    {{message}}
    </div>`,
    styleUrls: ['snack-bar.component.css']
})
export class SnackbarComponent implements OnDestroy {

    title = ''
    message = ''
    mobileQuery: MediaQueryList;
    mobileQueryListener: () => void;
    constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any,
        changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
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