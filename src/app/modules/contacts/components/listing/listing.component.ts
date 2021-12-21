import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../../models/model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent implements OnInit {
  clientId: string;
  contacts: IContact[];
  payload = {
    limit: 20,
    skip: 0,
    search: '',
  };
  isLoading: boolean = false;
  constructor(
    private service: ContactsService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchParamsFromUrl();
  }
  private fetchParamsFromUrl(): void {
    this.clientId = this.route.snapshot.params?.['clientId'];
    this.getContacts();
  }
  private getContacts(): void {
    this.isLoading = true;
    this.service.getContacts(this.clientId, this.payload).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.contacts = res.data.contacts;
        this.detectChanges();
      },
      error: (err) => {
        this.isLoading = false;
        this.contacts = [];
        this.detectChanges();
      },
    });
  }
  public searchContact(event: string): void {
    this.payload.search = event;
    this.payload.skip = 0;
    this.getContacts();
  }
  public tracker(index: number, row: IContact): string {
    return row._id;
  }
  private detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
