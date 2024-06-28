import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { User } from 'src/app/common/models/user.model';
import { userTable } from './interfaces/user-table.interface';
import { TableComponent } from 'src/app/common/components/table/table.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  // Mock de usuarios
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
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
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
          lng: '-34.4618'
        }
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      }
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserListComponent,
        TableComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectar cambios iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize titles correctly', () => {
    expect(component.titles).toEqual(['id', 'name', 'email', 'user name', 'address']);
  });

  it('should transform users input to dataTable correctly in ngDoCheck', () => {
    component.users = mockUsers;
    component.ngDoCheck();

    const expectedDataTable: userTable[] = [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        userName: 'Bret',
        address: 'Kulas Light Apt. 556'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        userName: 'Antonette',
        address: 'Victor Plains Suite 879'
      }
    ];

    expect(component.dataTable).toEqual(expectedDataTable);
  });

  it('should render the dataTable correctly', () => {
    component.users = mockUsers;
    component.ngDoCheck();
    fixture.detectChanges(); // Detectar cambios después de ngDoCheck

    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('table tbody tr');
    expect(rows.length).toBe(2);

    const firstRowCells = rows[0].querySelectorAll('td');
    expect(firstRowCells[0].textContent).toContain('1');
    expect(firstRowCells[1].textContent).toContain('Leanne Graham');
    expect(firstRowCells[2].textContent).toContain('Sincere@april.biz');
    expect(firstRowCells[3].textContent).toContain('Bret');
    expect(firstRowCells[4].textContent).toContain('Kulas Light Apt. 556');

    const secondRowCells = rows[1].querySelectorAll('td');
    expect(secondRowCells[0].textContent).toContain('2');
    expect(secondRowCells[1].textContent).toContain('Ervin Howell');
    expect(secondRowCells[2].textContent).toContain('Shanna@melissa.tv');
    expect(secondRowCells[3].textContent).toContain('Antonette');
    expect(secondRowCells[4].textContent).toContain('Victor Plains Suite 879');
  });
});
