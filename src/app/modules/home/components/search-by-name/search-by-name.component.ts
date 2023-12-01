import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
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

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss'],
})
export class SearchByNameComponent implements OnInit, AfterViewInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  @ViewChild('input') input: ElementRef;

  icons = {
    search: faMagnifyingGlass,
  };

  form: FormGroup;
  get formValue() {
    return this.form.controls['name'].value;
  }

  constructor(private fb: FormBuilder) {}

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
          this.search.emit(this.formValue);
          this.form.reset()
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
