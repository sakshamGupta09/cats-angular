import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  control: FormControl;
  @Input() placeholder: string;
  @Output() onSearch: EventEmitter<string>;
  constructor() {
    this.control = new FormControl('');
    this.onSearch = new EventEmitter();
  }

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe({
        next: (value) => {
          this.onSearch.emit(value);
        },
      });
  }
}
