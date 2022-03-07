import { ChangeDetectorRef, Component, OnDestroy, Input, ViewChild, OnInit, Output, TemplateRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuElement } from '../common/menu'

@Component({
    selector: 'mvb-side-bar',
    templateUrl: './sidebar.component.html',
    // template: ``,
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy, OnInit {
    options = {
        fixed: false,
        topGap: 0,
        bottomGap: 0
    }
    @ViewChild('sidenav') sidenav: MatSidenav
    @Input() sidebar?: MenuElement[];
    @Input() topGap = 0;
    @Input() bottomGap = 0;
    @Input() xsAutoFill = false;
    @Input() panelWidth = 240;
    @Input() position = 'start';
    @Input() sidebarTemplate: TemplateRef<any> = null;
    @Input() containerTemplate: TemplateRef<any> = null;
    mobileQuery: MediaQueryList;
    mobileQueryListener: () => void;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
    }
    ngOnInit(): void {
        console.log(`init`,this.sidebarTemplate,this.containerTemplate)
        // setInterval(()=>{this.sidenav.toggle()},5000)
        this.options = {
            fixed: (this.topGap || this.bottomGap) ? true : false,
            topGap: this.topGap,
            bottomGap: this.bottomGap
        }
        console.log(this.options)
    }
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
    toggle() {
        console.log(`----------`)
        this.sidenav.toggle()
    }
}



