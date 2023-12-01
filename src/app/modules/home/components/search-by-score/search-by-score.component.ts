import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-by-score',
  templateUrl: './search-by-score.component.html',
  styleUrls: ['./search-by-score.component.scss'],
})
export class SearchByScoreComponent implements OnInit, OnChanges {
  @Input() clearFilters: boolean = false;
  @Output() search: EventEmitter<string> = new EventEmitter();
  icons = {
    star: faStar,
  };

  form: FormGroup;
  get formValue() {
    return this.form.controls['value'].value;
  }

  stars: number[] = [1,2,3,4,5,6,7,8,9];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.clearFilters) {
      this.form.controls['value'].setValue(10);
      this.stars = [1,2,3,4,5,6,7,8,9];
    }
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
    this.search.emit(`${this.formValue}.0`);
  }
}
