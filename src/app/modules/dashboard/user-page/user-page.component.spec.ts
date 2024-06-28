import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPageComponent } from './user-page.component';
import { UserStateService } from 'src/app/services/user/user-state.service';
import { UserService } from 'src/app/services/user/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';
import { UserLoadMoreComponent } from './components/user-load-more/user-load-more.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let userStateService: jasmine.SpyObj<UserStateService>;

  const mockUsers: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
  ];

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
    const userStateServiceSpy = jasmine.createSpyObj('UserStateService', [], {
      users$: new BehaviorSubject<User[]>([]),
      loading$: new BehaviorSubject<boolean>(false),
    });

    await TestBed.configureTestingModule({
      declarations: [
        UserPageComponent,
        UserSearchComponent,
        UserListComponent,
        UserNotFoundComponent,
        UserLoadMoreComponent,
      ],
      imports: [NgxSkeletonLoaderModule],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: UserStateService, useValue: userStateServiceSpy },
      ],
    }).compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    userStateService = TestBed.inject(UserStateService) as jasmine.SpyObj<UserStateService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update filteredUsers on search', () => {
    component.users = mockUsers;
    component.onSearch('Leanne');

    expect(component.filteredUsers.length).toBe(1);
    expect(component.filteredUsers[0].name).toBe('Leanne Graham');
  });
  it('should update filteredUsers on search value blank', () => {
    component.users = mockUsers;
    component.onSearch('');

    expect(component.filteredUsers.length).toBe(0);
  });

  it('should update currentPage and filteredUsers on load more', () => {
    component.users = mockUsers;
    component.currentPage = 1;
    component.usersPerPage = 1;
    component.onLoadMore();

    expect(component.currentPage).toBe(2);
    expect(component.filteredUsers.length).toBe(2);
    expect(component.filteredUsers.map(user => user.name)).toEqual(['Leanne Graham', 'Ervin Howell']);
  });
});
