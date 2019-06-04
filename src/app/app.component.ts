import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns = ['a', 'b', 'c', 'time']
  dataSource = [{ a: 'abc', b: '45545', c: '12d34', time: new Date() },
  { a: 'abc', b: '45545', c: '1234', time: new Date() }];
  title = 'myviewboard';
  ngOnInit() {

  }
  click_test(row) {
    console.log(`select:`, row)
  }
  changeAPI(event) {
    console.log(event)
  }
}
