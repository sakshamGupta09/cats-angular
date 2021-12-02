import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { IClient } from '../../models/model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent implements OnInit {
  clients: IClient[];
  payload = {
    limit: 10,
    skip: 0,
    search: '',
  };
  constructor(
    private service: ClientService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(): void {
    this.service.getClients(this.payload).subscribe({
      next: (res) => {
        this.clients = res.data;
        this.detectChanges();
      },
      error: (err) => {
        this.clients = [];
      },
    });
  }
  public tracker(index: number, item: IClient): string {
    return item._id;
  }
  private detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
