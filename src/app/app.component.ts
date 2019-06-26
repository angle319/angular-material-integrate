import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { SnackbarService } from 'library/material-lib/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SnackbarService]
})
export class AppComponent implements OnInit {
  list = ['a', 'b', 'c', 'time']
  displayedColumns = ['a', 'b', 'c', 'time']
  dataSource = [{ a: 'abc', b: '45545', c: '12d34', time: new Date() },
  { a: 'abc', b: '45545', c: '1234', time: new Date() }];
  title = 'myviewboard';
  message = 'somethings happened';

  sidebar = [{
    text: 'test',
    _child: [{
      route_url: '1234',
      text: 'test',
    }]
  }]
  widget = [
    {
      route_url: '#/',
      text: 'Component',
      tooltip: 'test'
    },
    {
      route_url: '#/',
      icon: 'apps',
      text: 'About',
      tooltip: 'test'
    },
    {
      route_url: '#/',
      icon: 'notifications',
      tooltip: 'test'
    },
    {
      icon: 'account_circle',
      tooltip: '',
      _child: [
        {
          route_url: '#/',
          icon: 'help',
          text: '1234'
        },
        {
          divide: true,
          click: this.onClickLogout,
          icon: 'exit_to_app',
          text: 'logout',
        }
      ]
    }
  ]
  constructor(public snackbarService: SnackbarService) {

  }
  ngOnInit() {
  }
  click_test(row) {
    console.log(`select:`, row)
  }
  changeAPI(event) {
    console.log(event)
  }
  onClickToast(success = 'success') {
    switch (success) {
      case 'success':
        this.snackbarService.openSuccess(this.message)
        break;
      case 'warning':
        this.snackbarService.openWarning(this.message)
        break;
      case 'error':
        this.snackbarService.openError(this.message)
        break;
      case 'customer':
        this.snackbarService.openCustomerStyle(this.title, this.message, 'my-panel')
        break;
      default:
        break;
    }
  }
  onClickLogout(event){
    console.log(event)
  }
  onToggle(event){
    console.log(event)
  }
}
