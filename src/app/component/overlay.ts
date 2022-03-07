import { Component, OnInit } from '@angular/core';
import { LoadingService }  from 'library/material-lib/src/public-api';
@Component({
    selector: 'app-overlays',
    template: `<h2>Loading Overlay</h2>
  <button mat-raised-button (click)="onLoading()">Loading 5 sec</button>
  <div mvbLoading [size]="30" [loading]="isload" style="width:30%;">
    <div style="height:200px;">dassdaasda</div>
  </div>
`,
    providers: [LoadingService]
})
export class OverlayComponent implements OnInit {
    isload = true
    constructor(public loadingService: LoadingService) {

    }
    ngOnInit() {
        setInterval(() => {
            console.log(`change====`, this.isload)
            this.isload = !this.isload
        }, 5000)
    }
    onLoading() {
        this.loadingService.spin$.next(true)
        setTimeout(() => {
            this.loadingService.spin$.next(false)
        }, 5000)
    }
}
