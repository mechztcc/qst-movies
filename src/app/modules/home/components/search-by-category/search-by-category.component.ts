import { Component } from '@angular/core';
import { SearchEngineService } from '../../shared/services/search-engine.service';
import { fade } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.scss'],
  animations: [fade]
})
export class SearchByCategoryComponent {
  constructor(public search: SearchEngineService) {}
}
