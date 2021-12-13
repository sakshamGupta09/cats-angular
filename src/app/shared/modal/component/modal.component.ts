import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  @Input() heading: string;
  @Input() modalType: string;
  constructor() {}

  ngOnInit(): void {}
}
