import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { UserStateService } from './user-state.service';
import { environment } from 'src/environments/environment';
import { User } from '../../common/models/user.model';

describe('UserService', () => {
  let userService: UserService;
  let mockClient: HttpTestingController;
  let userStateService: UserStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService, UserStateService]
    });

    userService = TestBed.inject(UserService);
    mockClient = TestBed.inject(HttpTestingController);
    userStateService = TestBed.inject(UserStateService);

    spyOn(userStateService, 'setLoading').and.stub();
    spyOn(userStateService, 'setUsers').and.stub();
  });

  afterEach(() => {
    mockClient.verify();
  });

  it('should fetch users and update state correctly', () => {
    const mockUsers: User[] = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }
    ];

    userService.getUsers();

    expect(userStateService.setLoading).toHaveBeenCalledWith(true);

    const req = mockClient.expectOne(environment.urlBase + '/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);

    expect(userStateService.setUsers).toHaveBeenCalledWith(mockUsers);
    expect(userStateService.setLoading).toHaveBeenCalledWith(false);
  });

});
