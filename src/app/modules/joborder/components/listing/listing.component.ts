import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IJoborder } from '../../models/model';
import { JoborderService } from '../../services/joborder.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent implements OnInit {
  public payload = { limit: 10, skip: 0 };
  public joborders: IJoborder[];
  public clientId: string;
  public isLoading: boolean = false;
  private totalRecords: number = 0;
  private disposeListener: () => void;

  constructor(
    private service: JoborderService,
    private route: ActivatedRoute,
    private ccdRef: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.fetchUrlParams();
  }
  private fetchUrlParams(): void {
    this.clientId = this.route.snapshot.params?.['clientId'];
    this.getJoborders();
    this.subscribeToScoll();
  }
  private subscribeToScoll(): void {
    this.disposeListener = this.renderer.listen('window', 'scroll', (event) => {
      if (
        Math.round(window.scrollY + window.innerHeight) >=
        document.documentElement.scrollHeight
      ) {
        console.log('==Scrolled to bottom');
        alert('scrolled to bottom');
      }
    });
  }

  private getJoborders(): void {
    this.isLoading = true;
    this.service.getJobordersOfClient(this.clientId, this.payload).subscribe({
      next: (res) => {
        this.joborders = res.data.joborders;
        this.totalRecords = res.data.totalRecords;
        this.isLoading = false;
        this.detectChanges();
      },
      error: (err) => {
        this.joborders = [];
        this.isLoading = false;
        this.detectChanges();
      },
    });
  }
  public joborderTracker(index: number, row: IJoborder): string {
    return row._id;
  }
  private detectChanges(): void {
    this.ccdRef.detectChanges();
  }
  ngOnDestroy() {
    if (this.disposeListener) {
      this.disposeListener();
    }
  }
}
