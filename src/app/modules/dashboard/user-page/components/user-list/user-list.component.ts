import { Component, DoCheck, Input } from '@angular/core';
import { User } from 'src/app/common/models/user.model';
import { userTable } from './interfaces/user-table.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements DoCheck{

  @Input() users: User[] = [];
  public titles: string[] = ['id', 'name', 'email', 'user name', "address"];
  public dataTable: userTable[] = [];

  ngDoCheck(): void {
    this.dataTable = this.users.map( user =>{
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        userName: user.username,
        address: `${user.address.street} ${user.address.suite}`
      }
    });
  }

}
