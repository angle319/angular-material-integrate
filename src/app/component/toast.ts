import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'library/material-lib/src/public-api';
@Component({
  selector: 'app-toast',
  template: `<h2>Toast</h2>
  <button mat-raised-button (click)="onClickToast()" >Success</button>
  <button mat-raised-button (click)="onClickToast('warning')">Warning</button>
  <button mat-raised-button (click)="onClickToast('error')">Error</button>`
})
export class ToastComponent implements OnInit {
  title = 'demo'
  message = 'sample text'
  constructor(public snackbarService: SnackbarService) {

  }
  ngOnInit() {
  }
  onClickToast(success = 'success') {
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
