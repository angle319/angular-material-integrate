
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-toast',
  templateUrl: './table.html'
})
export class TableComponent implements OnInit {
  displayedColumns = ['Name', 'Test', 'PP', 'time']
  keysColumns = ['a', 'b', 'c', 'time']
  data = [
    { a: 'abcabcabcabcabc abc abcabcabcabc', b: '45545', c: '12d34', time: new Date() },
    { a: 'abc', b: '45545', c: '1234', time: new Date() },
    { a: 'A', b: '1', c: '1', time: new Date() },
    { a: 'B', b: '2', c: '2', time: new Date() },
    { a: 'C', b: '3', c: '3', time: new Date() },
    { a: 'D', b: '4', c: '4', time: new Date() }];
  dataSource = [];
  event_row = {};
  maxHeight = "30vh";
  maxWidth = "50vw";
  constructor() {
  }
  ngOnInit() {
    this.fetch({first: 0, rows: 5});
  }
  fetch($event) {
    console.log($event);
    const { first, rows } = $event;
    this.event_row = $event;
    this.dataSource = this.data.filter((x: any, index) => {
      if (index < (first + 1) * rows && index >= first * rows) {
        x._select = false;
        return x;
      }
    });
  }
  click_test(row) {
    console.log(`select:`, row);
  }
}
