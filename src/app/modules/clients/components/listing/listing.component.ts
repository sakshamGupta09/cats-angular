import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { IClient } from '../../models/model';
import { ClientService } from '../../services/client.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent implements OnInit {
  clients: IClient[];
  totalRecords: number;
  pageSizeOptions = [5, 10, 25];
  payload = {
    limit: 5,
    skip: 0,
    search: '',
  };
  isLoading: boolean = false;
  isModalOpen: boolean = false;
  clientIdForDeletion: string;
  constructor(
    private service: ClientService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(): void {
    this.isLoading = true;
    this.service.getClients(this.payload).subscribe({
      next: (res) => {
        this.clients = res.data.clients;
        this.totalRecords = res.data.totalRecords;
        this.isLoading = false;
        this.detectChanges();
      },
      error: (err) => {
        this.clients = [];
        this.totalRecords = 0;
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  public tracker(index: number, item: IClient): string {
    return item._id;
  }
  public searchClients(event: string): void {
    this.payload.search = event;
    this.payload.skip = 0;
    this.getClients();
  }
  public onPageEvent(event: PageEvent): void {
    this.payload.limit = event.pageSize;
    this.payload.skip = event.pageIndex * this.payload.limit;
    this.getClients();
  }
  public onDeleteHandler(clientId: string): void {
    this.clientIdForDeletion = clientId;
    this.isModalOpen = true;
  }
  public deleteClient(): void {
    this.isLoading = true;
    this.service.deleteClient(this.clientIdForDeletion).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.isModalOpen = false;
        this.getClients();
      },
      error: (err) => {
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  private detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
