import { Injectable, OnDestroy } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';
import { Subject } from 'rxjs'
import { scan, map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class LoadingService implements OnDestroy {

    private spinnerTopRef = this.cdkSpinnerCreate();
    backgroundClass = ''
    spin$: Subject<boolean> = new Subject()

    constructor(private overlay: Overlay) {
        this.spin$
            .asObservable()
            .pipe(
                map(val => val ? 1 : -1),
                scan((acc, one) => (acc + one) >= 0 ? acc + one : 0, 0)
            )
            .subscribe(
                (isLoading) => {
                    if (isLoading) {
                        this.showSpinner()
                    } else {
                        if (this.spinnerTopRef.hasAttached()) {
                            this.stopSpinner()
                        }
                    }
                }
            )
    }

    private cdkSpinnerCreate() {
        return this.overlay.create({
            hasBackdrop: true,
            backdropClass: this.backgroundClass,
            positionStrategy: this.overlay.position()
                .global()
                .centerHorizontally()
                .centerVertically()
        })
    }
    setBackgroundClass(className) {
        this.backgroundClass = className
    }

    private showSpinner() {
        const component= new ComponentPortal(MatSpinner)
        this.spinnerTopRef.attach(component)
    }

    private stopSpinner() {
        console.log('dispose')
        this.spinnerTopRef.detach();
    }
    ngOnDestroy(): void {
        this.spin$.unsubscribe()
    }
}