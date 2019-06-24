import { Injectable, HostListener, OnDestroy, Component, Inject, TemplateRef } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
    MAT_SNACK_BAR_DATA
} from '@angular/material';
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
    // height$: Observable<number>;
    // //create more Observables as and when needed for various properties
    // hello: string = "Hello";
    // constructor() {
    //     let windowSize$ = new BehaviorSubject(getWindowSize());

    //     this.height$ = (windowSize$.pluck('height') as Observable<number>).distinctUntilChanged();

    //     Observable.fromEvent(window, 'resize')
    //         .map(getWindowSize)
    //         .subscribe(windowSize$);
    // }

    constructor(public snackBar: MatSnackBar, private breakpointObserver: BreakpointObserver) {
        // console.log(window.innerWidth)
        // const isSmallScreen = breakpointObserver.isMatched('(max-width: 768px)');
        // if (isSmallScreen) {
        //     this.horizontalPosition = 'center';
        //     this.verticalPosition = 'bottom';
        // }
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

        // if (window.innerWidth < 768) {
        //     this.horizontalPosition = 'center';
        //     this.verticalPosition = 'bottom';
        // }
        // this.subscription = fromEvent(window, 'resize').subscribe(() => {
        //     if (window.innerWidth < 768) {
        //         this.horizontalPosition = 'center';
        //         this.verticalPosition = 'bottom';
        //     } else {
        //         this.horizontalPosition = 'right';
        //         this.verticalPosition = 'top';
        //     }
        // });

    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe()
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



// function getWindowSize() {
//     return {
//         height: window.innerHeight
//         //you can sense other parameters here
//     };
// };