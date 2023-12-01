import { Component } from '@angular/core';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { SearchEngineService } from '../../shared/services/search-engine.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  icons = {
    remove: faRemove,
  };

  constructor(public search: SearchEngineService) {}

  onClearFilters() {
    this.search.clear();
  }
}
