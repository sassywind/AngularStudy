import { Component, OnInit } from '@angular/core';
import { UserListUseCase } from './service/user-list.usecase';
import { UserListFilter } from './models/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users$ = this.userList.users$;
  userListFilter$ = this.userList.filter$;

  constructor(
    private userList: UserListUseCase
  ) { }

  ngOnInit() {
    this.userList.fetchUsers().then(r => r);
  }

  setUserListFilter(value: UserListFilter) {
    this.userList.setNameFilter(value.nameFilter);
  }
}
