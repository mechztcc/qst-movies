import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SearchEngineService } from '../../shared/services/search-engine.service';
import { fade } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'app-search-by-score',
  templateUrl: './search-by-score.component.html',
  styleUrls: ['./search-by-score.component.scss'],
  animations: [fade]
})
export class SearchByScoreComponent implements OnInit {
  icons = {
    star: faStar,
  };

  form: FormGroup;
  get formValue() {
    return this.form.controls['value'].value;
  }

  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private fb: FormBuilder, public search: SearchEngineService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      value: [10],
    });
  }

  onChange() {
    this.stars = [];
    const value = this.form.controls['value'].value;
    for (let index = 0; index < value; index++) {
      this.stars.push(index);
    }
    this.search.onSearchByScore(value);
  }
}
