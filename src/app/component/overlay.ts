import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'library/material-lib/src/public-api';
@Component({
    selector: 'app-overlays',
    template: `<h2>Loading Overlay</h2>
  <button mat-raised-button (click)="onLoading()">Loading 5 sec</button>
  <div mvbLoading [loading]="isload">
    <div style="height:50px;">dassdaasda</div>
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
