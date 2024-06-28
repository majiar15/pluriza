import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from 'src/app/modules/dashboard/user-page/user-page.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(
          [
            { path: "users", component: UserPageComponent },
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: '**', redirectTo: 'users', pathMatch: 'full' },
          ]
        )
      ],

      declarations: [
        SidebarComponent,
        UserPageComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with showMenu set to false', () => {
    expect(component.showMenu).toBeFalse();
  });

  it('should toggle showMenu when openMenu() is called', () => {
    const initialValue = component.showMenu;
    component.openMenu();
    expect(component.showMenu).toBe(!initialValue);
    component.openMenu();
    expect(component.showMenu).toBe(initialValue);
  });

});
