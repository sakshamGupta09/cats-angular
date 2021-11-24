import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onMenuClick(): void {
    this.toggleSidebar.emit();
  }
}
