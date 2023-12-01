import { Component } from '@angular/core';
import { SearchEngineService } from '../../shared/services/search-engine.service';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.scss'],
})
export class SearchByCategoryComponent {
  constructor(public search: SearchEngineService) {}
}
