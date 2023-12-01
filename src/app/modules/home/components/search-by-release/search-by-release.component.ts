import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { SearchEngineService } from '../../shared/services/search-engine.service';

@Component({
  selector: 'app-search-by-release',
  templateUrl: './search-by-release.component.html',
  styleUrls: ['./search-by-release.component.scss'],
})
export class SearchByReleaseComponent implements OnInit {
  form: FormGroup;
  get formValue() {
    return this.form.controls['date'].value;
  }

  icons = {
    calendar: faCalendar,
  };

  constructor(private fb: FormBuilder, public search: SearchEngineService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      date: [''],
    });
  }

  onChange() {
    const year = this.formValue;
    if (year.length == 4) {
      this.search.onSearchByRelease(year);
      this.form.reset();
    }
  }
}
