import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const getUsersUrl = environment.urlBase+'/users';
    return this.http.get<User[]>(getUsersUrl);
  }
}
