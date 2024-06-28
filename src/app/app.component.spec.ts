import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './modules/dashboard/user-page/user-page.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

describe('AppComponent', () => {
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
        AppComponent,
        UserPageComponent,
        DashboardComponent,
        SidebarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
