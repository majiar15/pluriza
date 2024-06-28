import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-page/components/user-list/user-list.component';
import { UserSearchComponent } from './user-page/components/user-search/user-search.component';
import { UserLoadMoreComponent } from './user-page/components/user-load-more/user-load-more.component';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { UserListSilverComponent } from './user-page/components/user-list-silver/user-list-silver.component';



@NgModule({
  declarations: [
    SidebarComponent,
    UserListComponent,
    UserSearchComponent,
    UserLoadMoreComponent,
    DashboardComponent,
    UserListSilverComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
