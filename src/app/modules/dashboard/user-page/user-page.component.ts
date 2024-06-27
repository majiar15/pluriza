import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user.model';
import { UserStateService } from 'src/app/services/user/user-state.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  currentPage: number = 1;
  usersPerPage: number = 5;
  loading: boolean = false;

  constructor(
    private userService: UserService,
    private stateService: UserStateService
  ) {}

  ngOnInit(): void {
    this.stateService.users$.subscribe(users => {
      this.users = users;
      this.updateFilteredUsers();
    });

    this.stateService.loading$.subscribe(loading => {
      this.loading = loading;
    });

    this.userService.getUsers();
  }

  onSearch(searchValue: string): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  onLoadMore(): void {
    this.currentPage++;
    this.updateFilteredUsers();
  }

  private updateFilteredUsers(): void {
    this.filteredUsers = this.users.slice(0, this.currentPage * this.usersPerPage);
  }
}
