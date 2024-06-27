import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserListComponent } from './modules/dashboard/user-page/components/user-list/user-list.component';
import { UserSearchComponent } from './modules/dashboard/user-page/components/user-search/user-search.component';
import { UserLoadMoreComponent } from './modules/dashboard/user-page/components/user-load-more/user-load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    UserListComponent,
    UserSearchComponent,
    UserLoadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
