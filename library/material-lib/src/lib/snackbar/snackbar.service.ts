import { Injectable, HostListener, OnDestroy, Component, Inject, TemplateRef } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
    MAT_SNACK_BAR_DATA
} from '@angular/material/snack-bar';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { SnackbarComponent } from './snackbar.component';
import { MaterialSnackModule } from './snack-bar.module';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable(
    ({ providedIn: MaterialSnackModule })
)
export class SnackbarService implements OnDestroy {
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    subscription: Subscription;
    constructor(public snackBar: MatSnackBar, private breakpointObserver: BreakpointObserver) {
        const subscription = this.breakpointObserver.observe('(max-width: 768px)').subscribe(result => {
            if (result.matches) {
                this.horizontalPosition = 'center';
                this.verticalPosition = 'bottom';
            } else {
                this.horizontalPosition = 'right';
                this.verticalPosition = 'top';
            }
            console.log(`{portrait: ${result.matches}`);
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
    open(title = '', message = '') {
        this.snackBar.openFromComponent(SnackbarComponent, {
            ...this._buildConfig('snack-panel-default'),
            data: { title, message },
        });
    }
    openInfo(message = '') {
        this.snackBar.openFromComponent(SnackbarComponent, {
            ...this._buildConfig('snack-panel-info'),
            data: { title: 'Information', message },
        });
    }
    openSuccess(message = '') {
        this.snackBar.openFromComponent(SnackbarComponent, {
            ...this._buildConfig('snack-panel-success'),
            data: { title: 'Success', message },
        });
    }
    openWarning(message = '') {
        this.snackBar.openFromComponent(SnackbarComponent, {
            ...this._buildConfig('snack-panel-warning'),
            data: { title: 'Warning', message },
        });
    }
    openError(message = '') {
        this.snackBar.openFromComponent(SnackbarComponent, {
            ...this._buildConfig('snack-panel-error'),
            data: { title: 'Error', message },
        });
    }
    openCustomerStyle(message = '', title = '', className = '') {
        console.log(className)
        this.snackBar.openFromComponent(SnackbarComponent, {
            ...this._buildConfig(className),
            data: { title, message },
        });
    }
    _buildConfig(className?: string) {
        const config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = 20000000;
        if (className) {
            config.panelClass = className;
        }
        config.politeness = 'off';
        return config
    }
}