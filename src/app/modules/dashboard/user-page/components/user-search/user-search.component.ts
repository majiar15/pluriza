import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event): void {

    const input = event.target as HTMLInputElement;
    this.searchEvent.emit(input.value);
  }
}
