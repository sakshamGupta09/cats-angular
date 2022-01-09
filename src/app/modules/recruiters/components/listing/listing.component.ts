import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IRecruiter } from '../../models/model';
import { RecruiterService } from '../../services/recruiter.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent implements OnInit {
  recruiters: IRecruiter[];
  totalRecords: number = 0;
  pageSizeOptions = [5, 10, 25];
  payload = {
    limit: 5,
    skip: 0,
    search: '',
  };
  isLoading: boolean = false;
  isModalOpen: boolean = false;
  recruiterIdForDeletion: string;

  constructor(
    private service: RecruiterService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getRecruiters();
  }

  private getRecruiters(): void {
    this.isLoading = true;
    this.service.getRecruiters(this.payload).subscribe({
      next: (res) => {
        this.recruiters = res.data.recruiters;
        this.totalRecords = res.data.totalRecords;
        this.isLoading = false;
        this.detectChanges();
      },
      error: (err) => {
        this.recruiters = [];
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  public tracker(index: number, item: IRecruiter): string {
    return item._id;
  }
  public searchRecruiters(event: string): void {
    this.payload.search = event;
    this.payload.skip = 0;
    this.getRecruiters();
  }
  public onPageEvent(event: PageEvent): void {
    this.payload.limit = event.pageSize;
    this.payload.skip = event.pageIndex * this.payload.limit;
    this.getRecruiters();
  }
  public onDeleteHandler(recruiterId: string): void {
    this.recruiterIdForDeletion = recruiterId;
    this.isModalOpen = true;
  }
  public deleteRecruiter(): void {
    this.isLoading = true;
    this.service.deleteRecruiter(this.recruiterIdForDeletion).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.isModalOpen = false;
        this.getRecruiters();
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
