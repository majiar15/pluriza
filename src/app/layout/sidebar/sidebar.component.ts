import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  public showMenu: boolean = false;
  constructor() { }

  public items = [
    {
        title: 'users',
        class: 'bi bi-person-fill',
        link: 'users'
    }
];

  public openMenu(){
    this.showMenu = !this.showMenu
  }

}
