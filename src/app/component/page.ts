import { Component, OnInit } from '@angular/core';
import { LoadingService }  from 'library/material-lib/src/public-api';
@Component({
    selector: 'app-simple-page',
    template: `<h2>Login Page</h2>
    <mvb-login-page (onLogin)="onLogin($event)"></mvb-login-page>
`,
    providers: [LoadingService]
})
export class SimplePageComponent implements OnInit {
    constructor(public loadingService: LoadingService) {

    }
    ngOnInit() {

    }
    onLogin(event) {
        console.log(event)
    }
}
