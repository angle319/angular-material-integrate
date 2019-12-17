
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-toast',
    template: `<h2>Table</h2>
  <mvb-list (onRowSelect)="click_test($event)" [total]="20" [columnHeaders]="keysColumns"
    [pageIndex]="1"  [displayHeaders] ="displayedColumns"
      [dataSource]="dataSource" class="w-100" (onLazyLoad)="changeAPI($event)"  [isEdit]="true">
      <ng-template mvbCol let-input cell="1" styleClass="a-col">
        <div style="color:wheat;width:50% ;">{{input}}</div>

      </ng-template>
      <ng-template mvbCol let-input cell="2">
        <button>
          <fa-icon icon="edit"></fa-icon>{{input}}
        </button>

      </ng-template>
      <ng-template mvbCol let-input cell="4">
        <div style="color:aqua ;width:50% ;">{{input|date: 'yyyy-MM-dd HH:mm:ss'}}</div>

      </ng-template>
    </mvb-list>
    event is {{event_row|json}}`
})
export class TableComponent implements OnInit {
    displayedColumns = ['Name', 'Test', 'PP', 'time']
    keysColumns = ['a', 'b', 'c', 'time']
    dataSource = [{ a: 'abc', b: '45545', c: '12d34', time: new Date() },
    { a: 'abc', b: '45545', c: '1234', time: new Date() }];
    event_row = {}
    constructor() {

    }
    ngOnInit() {
    }
    changeAPI(event) {
        this.event_row = event
        console.log(event)
    }
    click_test(row) {
        console.log(`select:`, row)
    }
}
