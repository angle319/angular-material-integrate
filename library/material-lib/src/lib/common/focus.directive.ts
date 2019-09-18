import { FocusableOption } from '@angular/cdk/a11y';
import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[mvbFocus]'
})
export class FocusElDirective implements FocusableOption, AfterViewInit {

    constructor(private el: ElementRef) { }

    focus() {
        this.el.nativeElement.focus();
    }
    ngAfterViewInit(): void {
        this.focus()
    }
}
