import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserListComponent } from './modules/dashboard/user-page/components/user-list/user-list.component';
import { UserSearchComponent } from './modules/dashboard/user-page/components/user-search/user-search.component';
import { UserLoadMoreComponent } from './modules/dashboard/user-page/components/user-load-more/user-load-more.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './modules/dashboard/user-page/user-page.component';
import { TableComponent } from './common/components/table/table.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserNotFoundComponent } from './modules/dashboard/user-page/components/user-not-found/user-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    TableComponent,
    UserListComponent,
    UserSearchComponent,
    UserLoadMoreComponent,
    UserPageComponent,
    UserNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
