
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() titles: string[] = [];

  constructor() { }

  getObjectKeys(obj: any): string[] {
    const newObject = {...obj};
    delete newObject._id;
    return Object.keys(newObject);
  }
}
