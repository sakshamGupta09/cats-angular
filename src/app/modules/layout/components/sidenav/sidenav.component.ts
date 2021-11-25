import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  isOpen: boolean = false;
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  public toggleSidenav(): void {
    this.isOpen = !this.isOpen;
    this.detectChanges();
  }
  private detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
