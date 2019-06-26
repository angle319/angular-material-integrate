import { ChangeDetectorRef, Component, OnDestroy, Input, ViewChild, OnInit, Output, TemplateRef, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BarWidget } from '../common/menu'


@Component({
    selector: 'mvb-tool-bar',
    templateUrl: './toolbar.component.html',
    // template: ``,
    //styleUrls: ['./sidebar.component.css']
})
export class ToolBarComponent implements OnDestroy, OnInit {
    @Input() title = '';
    @Input() isMenu = true;
    @Input() barWidget: BarWidget[];
    @Output() onToggle: EventEmitter<any> = new EventEmitter();
    @Input() titleContainerTemplate: TemplateRef<any> = null;
    @Input() settingContainerTemplate: TemplateRef<any> = null;
    @Input() extendsContainerTemplate: TemplateRef<any> = null;
    mobileQuery: MediaQueryList;
    mobileQueryListener: () => void;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
    }
    ngOnInit(): void {
    }
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
    clickMenu(event) {
        this.onToggle.emit(event)
    }
}
