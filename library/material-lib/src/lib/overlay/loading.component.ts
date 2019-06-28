import { ChangeDetectorRef, Component, OnDestroy, Input, ViewChild, OnInit, Output, TemplateRef, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeIn, fadeOut, fadeInX, fadeOutX } from '../animations/fading'



@Component({
    selector: 'mvb-loading',
    template: `<div *ngIf="isVisible" class="mvb-load-panel" [@modalFadeZoom]>
    <mat-spinner [diameter]="diameter" mode="indeterminate" style="margin:0 auto;"></mat-spinner>
    </div>`,
    styleUrls: ['./loading.component.css'],
    animations: [
        trigger(
            'modalFadeZoom',
            [
                transition(
                    ':enter', fadeInX(0, 0, 0.5)
                ),
                transition(
                    ':leave', fadeOutX(0, 0, 0.5)
                ),
            ])
    ]
})
export class SpinnerComponent implements OnDestroy, OnInit {
    @Input() diameter
    @Input() isVisible = true
    constructor(public _elementRef: ElementRef) {

    }
    ngOnDestroy(): void {
    }
    ngOnInit(): void {
    }
}