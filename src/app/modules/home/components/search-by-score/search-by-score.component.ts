import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-by-score',
  templateUrl: './search-by-score.component.html',
  styleUrls: ['./search-by-score.component.scss'],
})
export class SearchByScoreComponent implements OnInit {
  icons = {
    star: faStar,
  };

  form: FormGroup;
  get formValue() {
    return this.form.controls['value'].value;
  }

  stars: number[] = [1];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      value: [1],
    });
  }

  onChange() {
    this.stars = [];
    const value = this.form.controls['value'].value;
    for (let index = 0; index < value; index++) {
      this.stars.push(index);
    }
  }
}
