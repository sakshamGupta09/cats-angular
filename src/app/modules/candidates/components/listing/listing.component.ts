import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ICandidate } from '../../models/model';
import { CandidateService } from '../../services/candidate.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent implements OnInit {
  candidates: ICandidate[];
  totalRecords: number = 0;
  pageSizeOptions = [5, 10, 25];
  payload = {
    limit: 5,
    skip: 0,
    search: '',
  };
  isLoading: boolean = false;
  isModalOpen: boolean = false;
  candidateIdForDeletion: string;

  constructor(
    private service: CandidateService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCandidates();
  }

  private getCandidates(): void {
    this.isLoading = true;
    this.service.getCanidates(this.payload).subscribe({
      next: (res) => {
        this.candidates = res.data.candidates;
        this.totalRecords = res.data.totalRecords;
        this.isLoading = false;
        this.detectChanges();
      },
      error: (err) => {
        this.candidates = [];
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  public candidatesTracker(index: number, item: ICandidate): string {
    return item._id;
  }
  public searchCandidates(event: string): void {
    this.payload.search = event;
    this.payload.skip = 0;
    this.getCandidates();
  }
  public onPageEvent(event: PageEvent): void {
    this.payload.limit = event.pageSize;
    this.payload.skip = event.pageIndex * this.payload.limit;
    this.getCandidates();
  }
  public onDeleteHandler(candidateId: string): void {
    this.candidateIdForDeletion = candidateId;
    this.isModalOpen = true;
  }
  public deleteCandidate(): void {
    this.isLoading = true;
    this.service.deleteCanidate(this.candidateIdForDeletion).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.isModalOpen = false;
        this.getCandidates();
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
