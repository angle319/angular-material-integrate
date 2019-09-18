import { ChangeDetectorRef, Component, OnDestroy, Input, ViewChild, OnInit, Output, TemplateRef, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeIn, fadeOut, fadeInX, fadeOutX } from '../animations/fading'



@Component({
    selector: 'mvb-loading',
    template: `<div *ngIf="isVisible" class="mvb-load-panel" [@fadeZoom] [style.height.px]="height" [style.line-height.px]="height"
    style="text-align: center;">
    <mat-spinner [diameter]="diameter" mode="indeterminate" style="margin:0 auto;display:inline-block;"></mat-spinner>
    </div>`,
    styleUrls: ['./loading.component.css'],
    animations: [
        trigger(
            'fadeZoom',
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
    @Input() height;
    @Input() diameter
    @Input() isVisible = true
    constructor(public elementRef: ElementRef) {

    }
    ngOnDestroy(): void {
    }
    ngOnInit(): void {
    }
}
