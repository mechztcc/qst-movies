import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  tap,
} from 'rxjs';
import { SearchEngineService } from '../../shared/services/search-engine.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss'],
})
export class SearchByNameComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef;

  icons = {
    search: faMagnifyingGlass,
  };

  form: FormGroup;
  get formValue() {
    return this.form.controls['name'].value;
  }

  constructor(private fb: FormBuilder, public search: SearchEngineService) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        tap((text) => {
          this.search.onFilterByName(this.formValue);
          this.form.reset();
        })
      )
      .subscribe();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
    });
  }
}
