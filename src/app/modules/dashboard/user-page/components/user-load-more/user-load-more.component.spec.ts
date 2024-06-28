import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoadMoreComponent } from './user-load-more.component';
import { By } from '@angular/platform-browser';

describe('UserLoadMoreComponent', () => {
  let component: UserLoadMoreComponent;
  let fixture: ComponentFixture<UserLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLoadMoreComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit loadMoreEvent when onLoadMore is called', () => {
    spyOn(component.loadMoreEvent, 'emit');

    component.onLoadMore();

    expect(component.loadMoreEvent.emit).toHaveBeenCalled();
  });

  it('should emit loadMoreEvent when the load more button is clicked', () => {
    spyOn(component.loadMoreEvent, 'emit');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.loadMoreEvent.emit).toHaveBeenCalled();
  });
});
