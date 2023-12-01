import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.scss'],
})
export class SearchByCategoryComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  selected: string = 'all';

  onSelect(name: string) {
    this.selected = name;
    this.search.emit(name);
  }
}
