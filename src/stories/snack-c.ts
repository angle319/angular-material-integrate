import { Component, OnInit, Input } from '@angular/core';
import { SnackbarService } from 'library/material-lib/src/public-api';
@Component({
    selector: 'app-root',
    template: `<p>Title:{{title}}</p>
    <p> Message:{{message}}</p>
    <button mat-raised-button (click)="onClick()">success</button>
    <button mat-raised-button (click)="onClick('warning')">waring</button>
    <button mat-raised-button (click)="onClick('error')">error</button>
    <button mat-raised-button (click)="onClick('customer')" >my style</button>`,
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