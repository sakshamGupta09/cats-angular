import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  sidebarMode: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSidebarToggle(event: any): void {
    this.sidebarMode = !this.sidebarMode;
  }
}
