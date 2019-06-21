import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { SnackbarService } from 'library/material-lib/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SnackbarService]
})
export class AppComponent implements OnInit {
  displayedColumns = ['a', 'b', 'c', 'time']
  dataSource = [{ a: 'abc', b: '45545', c: '12d34', time: new Date() },
  { a: 'abc', b: '45545', c: '1234', time: new Date() }];
  title = 'myviewboard';
  constructor(public snackbarService:SnackbarService){

  }
  ngOnInit() {

  }
  click_test(row) {
    console.log(`select:`, row)
  }
  changeAPI(event) {
    console.log(event)
  }
  onClick(){
     this.snackbarService.openSuccess(`asdfsd`)
  }
}
