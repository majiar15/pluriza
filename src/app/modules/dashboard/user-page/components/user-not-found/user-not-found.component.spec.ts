import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserNotFoundComponent } from './user-not-found.component';
import { By } from '@angular/platform-browser';

describe('UserNotFoundComponent', () => {
  let component: UserNotFoundComponent;
  let fixture: ComponentFixture<UserNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserNotFoundComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "User not found" message', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('404');
  });
});
