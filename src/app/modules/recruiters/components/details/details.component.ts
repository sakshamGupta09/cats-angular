import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecruiter } from '../../models/model';
import { RecruiterService } from '../../services/recruiter.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  public isLoading: boolean = false;
  public recruiterId: string;
  public recruiter: IRecruiter;

  constructor(
    private route: ActivatedRoute,
    private service: RecruiterService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchUrlParams();
  }

  private fetchUrlParams(): void {
    this.recruiterId = this.route.snapshot.params?.['recruiterId'];
    this.getRecruiterDetails();
  }
  private getRecruiterDetails(): void {
    this.isLoading = true;
    this.service.getRecruiterById(this.recruiterId).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.recruiter = res.data;
        this.detectChanges();
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
