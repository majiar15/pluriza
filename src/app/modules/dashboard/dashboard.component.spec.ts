import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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
        DashboardComponent,
        SidebarComponent
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
