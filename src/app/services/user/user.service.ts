import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../../common/models/user.model';
import { environment } from 'src/environments/environment';
import { UserStateService } from './user-state.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private userStateService: UserStateService
  ) {}

  getUsers(): void {
    this.userStateService.setLoading(true);
    const getUsersUrl = environment.urlBase+'/users';
    this.http.get<User[]>(getUsersUrl).pipe(
      tap(users => {
        this.userStateService.setUsers(users);
        this.userStateService.setLoading(false);
      })
    ).subscribe();
  }
}
