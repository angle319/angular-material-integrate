import {
    Directive, Input, ViewContainerRef, Renderer2, ComponentFactoryResolver,
    OnDestroy, OnInit, Component, HostListener
} from '@angular/core';
import { ElementRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material';
import { AnimationBuilder } from '@angular/animations';
import { SpinnerComponent } from './loading.component';

@Directive({
    selector: '[mvbLoading]',
})
export class LoadingDirective {
    loadComponent: SpinnerComponent;
    backgroundClass = '';
    _size = null
    _is_remove = false
    @Input()
    set loading(show: boolean) {
        console.log(`setting loading`)
        if (show) {
            this.showSpinner()
        } else {
            this.stopSpinner()
        }
    }
    @Input()
    set size(_size: number) {
        this._size = (_size < 20) ? 20 : _size
    }
    @Input()
    set remove(_is_remove: boolean) {
        this._is_remove = _is_remove
    }
    constructor(private cfResolver: ComponentFactoryResolver, public vcRef: ViewContainerRef, private renderer: Renderer2) {
        console.log(`init`)
    }

    private showSpinner() {
        console.log('attach')
        console.log(this.vcRef.element.nativeElement)
        if (this.loadComponent) {
            this.loadComponent.isVisible = false
            //this.loadingRef.nativeElement.style.display = 'block';
            return 0
        }
        const factory = this.cfResolver.resolveComponentFactory(SpinnerComponent);
        const componentRef = this.vcRef.createComponent(factory);
        const { clientWidth, clientHeight } = this.vcRef.element.nativeElement
        const component = componentRef.injector.get(SpinnerComponent)
        this.loadComponent = component
        const loadRef = component._elementRef.nativeElement
        component.diameter = (this._size) ? this._size : Math.min(clientWidth, clientHeight)

        loadRef.style.position = 'fixed'
        loadRef.style.width = clientWidth + 'px'
        loadRef.style.margin = '0 auto'
        //this.renderer.addClass(this.loadingRef.nativeElement, 'mvb-load-panel' );
        //this.loadingRef.nativeElement.style.height = clientHeight
        //this.loadingRef.nativeElement.style.width = clientWidth
        this.renderer.insertBefore(
            this.vcRef.element.nativeElement,
            loadRef,
            this.vcRef.element.nativeElement.firstChild
        );
    }
    private stopSpinner() {
        console.log('dispose')
        console.log(this.vcRef)

        if (this.loadComponent && this._is_remove) {
            const loadRef = this.loadComponent._elementRef.nativeElement
            this.renderer.removeChild(this.vcRef.element.nativeElement,
                loadRef)
        } else if (this.loadComponent && !this._is_remove) {
            this.loadComponent.isVisible = true
            //this.loadingRef.nativeElement.style.display = 'none';
        }
    }
    @HostListener('window:resize')
    public detectResize(): void {
        const loadRef = this.loadComponent._elementRef.nativeElement
        loadRef.style.width = loadRef.offsetWidth + 'px'
    }
}


