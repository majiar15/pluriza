import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoadMoreComponent } from './user-load-more.component';

describe('UserLoadMoreComponent', () => {
  let component: UserLoadMoreComponent;
  let fixture: ComponentFixture<UserLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoadMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
