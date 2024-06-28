import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSearchComponent } from './user-search.component';
import { By } from '@angular/platform-browser';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSearchComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchEvent on search', () => {
    spyOn(component.searchEvent, 'emit');

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'test search';
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.searchEvent.emit).toHaveBeenCalledWith('test search');
  });
});
