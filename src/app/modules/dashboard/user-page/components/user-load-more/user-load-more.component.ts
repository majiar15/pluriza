import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './user-load-more.component.html',
  styleUrls: ['./user-load-more.component.scss']
})
export class UserLoadMoreComponent {
  @Output() loadMoreEvent = new EventEmitter<void>();

  onLoadMore(): void {
    this.loadMoreEvent.emit();
  }
}
