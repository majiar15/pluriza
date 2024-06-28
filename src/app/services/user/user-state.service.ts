import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private usersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  users$: Observable<any[]> = this.usersSubject.asObservable();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {}

  setUsers(users: any[]): void {
    this.usersSubject.next(users);
  }

  setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }
}
