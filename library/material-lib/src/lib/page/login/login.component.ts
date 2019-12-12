import {
    Component, OnDestroy, Input, OnInit, Output,
    ElementRef, EventEmitter, HostListener, ViewChildren
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import {  fadeOut, fadeInDown } from '../../animations/fading'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FocusElDirective } from '../../common/focus.directive';
import { QueryList } from '@angular/core/src/render3';
import { ENTER, MAC_ENTER } from '@angular/cdk/keycodes';
@Component({
    selector: 'mvb-login-page',
    templateUrl: `./login.component.html`,
    styleUrls: ['./login.component.css', '../../common/common.css'],
    animations: [
        trigger(
            'fadeZoom',
            [
                transition(
                    ':enter', fadeInDown
                ),
                transition(
                    ':leave', fadeOut
                ),
            ])
    ]
})
export class LoginPageComponent implements OnDestroy, OnInit {
    loginForm: FormGroup;
    submitted = false;
    @Input() username: string;
    @Input() password: string;
    @Output() onLogin: EventEmitter<any> = new EventEmitter();
    @Output() onForgetPWD: EventEmitter<any> = new EventEmitter();
    constructor(public _elementRef: ElementRef, private formBuilder: FormBuilder) {

    }
    ngOnDestroy(): void {
    }
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }
    get form() { return this.loginForm.controls; }
    @HostListener('keypress', ['$event'])
    keydown($event: KeyboardEvent) {
        if (($event.keyCode === MAC_ENTER || $event.keyCode === ENTER) && this.loginForm.valid) {
            this.confirm(this.loginForm.value)
        }
    }
    confirm(form) {
        this.onLogin.emit(Object.assign({}, form))
    }
    forgetPWD(form) {
        this.onForgetPWD.emit(form.value)
    }
}
